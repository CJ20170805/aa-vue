<template>
  <div>
    <el-form size="mini" inline>
      <el-form-item label="用户名:">
        <el-input v-model="searchParam.username"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名:">
        <el-input v-model="searchParam.realname"></el-input>
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
          <el-button type="text" @click="handclickEdit(scope)">编辑</el-button>
          <el-button type="text" @click="handclickPermission(scope)">授权</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="page" :fetch-data="fetchData"/>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import * as types from "../../../store/modules/mutation-types.js";

export default {
  name: "List",
  components: {},
  data() {
    return {
      searchParam: {
        id: "",
        uaername: "",
        realname: ""
      }
    };
  },
  computed: {
    ...mapState({
      list: state => state.adminUser.list
    })
  },
  methods: {
    ...mapActions({
      getUsers: "getUsers"
    }),
    ...mapMutations({
      goProfile: types.GO_TO_PROFILE
    }),
    fetchData(params) {
      let Search = {};
      for (let key in this.searchParam) {
        if (this.searchParam[key]) Search[key] = this.searchParam[key];
      }
      let query = Object.assign({}, params, Search);
      this.getUsers(query);
    },
    // 搜索
    search() {
      this.$refs.page.reset();
    },
    handclickAdd() {
      this.goProfile({ mode: "add" });
    },
    handclickEdit(scope) {
      this.goProfile({ mode: "modify", profileInParam: scope.row });
    },
    handclickPermission(scope) {
      this.goProfile({ mode: "role", profileInParam: scope.row });
    }
  }
};
</script>
