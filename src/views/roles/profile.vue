<template>
  <div>
    <el-form label-width="150px">
      <el-form-item>
        <el-checkbox-group v-model="permissionForm.permissionIds">
          <el-checkbox v-for="item in permissions" :label="item.id" :key="item.id">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="backToList">取消</el-button>
        <el-button type="primary" @click="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import * as types from "../../store/modules/mutation-types.js";
export default {
  data() {
    return {
      permissionForm: {
        roleId: null,
        permissionIds: []
      }
    };
  },
  computed: {
    ...mapGetters({
      roleList: "roleList",
      profileMode: "profileMode",
      profileInParam: "profileInParam"
    }),
    ...mapState({
      permissions: state => state.permission.list
    })
  },
  methods: {
    ...mapActions({
      setRoles: "setRoles",
      getPermissions: "getPermissions",
      setPermission: "setPermission"
    }),
    ...mapMutations({
      backList: types.BACK_TO_LIST
    }),
    backToList() {
      this.backList({ mode: "list" });
    },
    async submit() {
      await this.setPermission(this.permissionForm)
    }
  },
  mounted() {
    this.getPermissions();
    // this.permissionForm
    let data = this.profileInParam.row;
    this.permissionForm.roleId = data.id;
    if (data.permission) {
      data.permission.forEach(v => {
        this.permissionForm.permissionIds.push(v.id);
      });
    }
  }
};
</script>
