<template>
  <div>
    <el-form size="mini" inline>
      <el-form-item label="用户名:">
        <el-input v-model="searchParam.username"></el-input>
      </el-form-item>
      <el-form-item label="用户id:">
        <el-input v-model="searchParam.id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="handclickAdd()">新建+</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" stripe size="small">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="realname" label="真实姓名"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handclickModify(scope)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="page" :fetch-data="fetchData"/>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import * as types from "../../../store/modules/mutation-types.js";
import {LIST_PROFILE_MODE_TYPES} from "../../../utils/consts.js"
export default {
  name: "List",
  data() {
    return {
      searchParam: {}
    };
  },
  computed: {
    ...mapState({
      list: state => state.customUser.list
    })
  },
  methods: {
    ...mapMutations({
      goProfile: types.GO_TO_PROFILE
    }),
    ...mapActions({
      getList: "getCustomUser"
    }),
    /**
     * @param params [object] -- 换页后返回的参数
     */
    fetchData(params) {
      let query = Object.assign({}, params);
      this.getList(query);
    },
    // 以下为根据实际 自定义方法
    // 搜索
    search() {
      this.$refs.page.reset();
    },
    // 添加
    handclickAdd() {
      this.goProfile({mode:LIST_PROFILE_MODE_TYPES.ADD})
    },
    // 编辑
    handclickModify() {
      this.goProfile({mode:LIST_PROFILE_MODE_TYPES.MODIFY})
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
