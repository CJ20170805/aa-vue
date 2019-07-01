<template>
  <div>
    <el-table :data="list" size="small" stripe>
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="name" label="角色名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handclickModify(scope)">权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="page" :fetch-data="fetchData"/>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import * as types from "../../store/modules/mutation-types.js";
import {LIST_PROFILE_MODE_TYPES} from "../../utils/consts.js"
export default {
  name: "List",
  data() {
    return {
      searchParam: {}
    };
  },
  computed: {
    ...mapState({
      list: state => state.role.list
    })
  },
  methods: {
    ...mapMutations({
      goProfile: types.GO_TO_PROFILE
    }),
    ...mapActions({
      getRoles: "getRoles"
    }),
    /**
     * @param params [object] -- 换页后返回的参数
     */
    fetchData(params) {
      this.getRoles(params);
    },
    // 以下为根据实际 自定义方法
    // 搜索
    search() {},
    // 添加
    handclickAdd() {
      this.goProfile({mode:LIST_PROFILE_MODE_TYPES.ADD})
    },
    // 编辑
    handclickModify(scope) {
      this.goProfile({mode:LIST_PROFILE_MODE_TYPES.MODIFY,profileInParam:scope})
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
