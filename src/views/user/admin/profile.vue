<template>
  <div>
    <el-form
      v-if="addDialog"
      :model="addFormData"
      ref="addForm"
      :rules="addRule"
      label-width="150px"
    >
      <el-form-item
        :label="item.label"
        :prop="item.key"
        v-for="item in addFormItem"
        :key="item.key"
        v-if="!item.hidden"
      >
        <el-input v-model="addFormData[item.key]" :type="item.type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="backToList('addUserVisible')">取消</el-button>
        <el-button type="primary" @click="submit('add')">保存</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="editDialog" ref="editForm" :rules="editRule" label-width="150px">
      <el-form-item
        :label="item.label"
        :prop="item.key"
        v-for="item in editFormItem"
        :key="item.key"
        v-if="!item.hidden"
      >
        <el-input v-model="editFormData[item.key]" :type="item.type"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="backToList('editUserVisible')">取消</el-button>
        <el-button type="primary" @click="submit('edit')">保存</el-button>
      </el-form-item>
    </el-form>
    <el-form
      v-if="roleDialog"
      :model="editFormData"
      ref="editForm"
      :rules="editRule"
      label-width="150px"
    >
      <el-form-item label="角色">
        <el-transfer
          v-model="rolesForm.roleIds"
          :data="roleList"
          :titles="['其他角色', '已有角色']"
          :button-texts="['移除', '添加']"
        ></el-transfer>
      </el-form-item>
      <el-form-item>
        <el-button @click="backToList('permissionUserVisible')">取消</el-button>
        <el-button type="primary" @click="submit('role')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations,mapState } from "vuex";
import * as types from "../../../store/modules/mutation-types.js";
import { setRules, setFormData, checkForm, filterForm } from "../../../utils/form";
import formItem from "./formItem.js";
export default {
  name: "Profile",
  components: {},
  data() {
    // 校验再次输入密码
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      addUserVisible: false,
      editUserVisible: false,
      permissionUserVisible: false,

      tableData: [],
      isAddUser: false,

      addFormItem: formItem("add"),
      editFormItem: formItem("edit"),

      addFormData: setFormData(formItem("add")),
      editFormData: {},

      rolesForm: {
        userId: null,
        roleIds: []
      },
      addRule: setRules(formItem("add"), { checkPass: validatePass2 }),
      editRule: setRules(formItem("edit"))
    };
  },
  computed: {
    ...mapGetters({
      profileMode: "profileMode",
      profileInParam: "profileInParam"
    }),
    ...mapState({
      roleList: state => state.role.list
    }),
    addDialog() {
      return this.profileMode === "add";
    },
    editDialog() {
      return this.profileMode === "modify";
    },
    roleDialog() {
      return this.profileMode === "role";
    }
  },

  mounted() {
    console.log("this.profileInParam", this.profileInParam);
    switch (this.profileMode) {
      case "role":
        this.rolesForm.userId = this.profileInParam.id;
        this.profileInParam.roles.forEach(v => {
          this.rolesForm.roleIds.push(v.id);
        });
        this.getRoles()
        break;
      case "modify":
       this.editFormData = this.profileInParam
       break
      default:
        break;
    }
  },
  methods: {
    ...mapActions({
      addUser: "addAdminUser",
      getRoles: "getRoles",
      setRoles: "setRoles",
      adminEdit:"adminEdit"
    }),
    ...mapMutations({
      backList: types.BACK_TO_LIST
    }),
    // 返回列表页
    backToList() {
      this.backList({ mode: "list" });
    },
    async submit(type) {
      let check = false;
      switch (type) {
        case "add":
          check = checkForm(this, "addForm");
          if (!check) return false;
          console.log('this.formData',this.addFormData)
          await this.addUser(this.addFormData);
          break;
        case "edit":
          check = checkForm(this, "editForm");
          if (!check) return false;
          await this.adminEdit({id:this.profileInParam.id,data:filterForm(this.profileInParam)});
          break;
        case "role":
          check = checkForm(this, "editForm");
          await this.setRoles(this.rolesForm);
          this.permissionUserVisible = false;
          break;
        default:
          break;
      }
    },
    clearForm() {
      for (let key in this.formData) {
        this.formData[key] = "";
      }
    }
  }
};
</script>
