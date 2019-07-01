<template>
  <div>
    <el-form label-width="150">
      <el-form-item label="用户名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="backToList()">取消</el-button>
        <el-button type="primary" @click="submit()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import * as types from "../../store/modules/mutation-types.js";
import { LIST_PROFILE_MODE_TYPES } from "../../utils/consts.js";
export default {
  data() {
    return {
      key: "value"
    };
  },
  computed: {
    ...mapGetters({
      profileMode: "profileMode",
      profileInParam: "profileInParam"
    })
  },
  methods: {
    ...mapActions({}),
    ...mapMutations({
      backList: types.BACK_TO_LIST
    }),
    backToList() {
      this.backList({ mode: LIST_PROFILE_MODE_TYPES.LIST });
    },
    submit(){
      this.backList({ mode: LIST_PROFILE_MODE_TYPES.LIST });
    }
  }
};
</script>
