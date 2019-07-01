<template>
  <AppContainer>
    <el-form ref="form" :model="searchForm" inline>
      <el-form-item label="产品名称:">
        <el-input v-model="searchForm.name" placeholder="请输入产品名称"></el-input>
      </el-form-item>
      <el-form-item label="产品类别:">
        <el-input v-model="searchForm.type" placeholder="请输入产品类别"></el-input>
      </el-form-item>
      <el-form-item label="选择供应商">
        <el-select v-model="searchForm.sel" placeholder="请选择供应商">
          <el-option v-for="item in supplierList" :key="item.value" :label="item.title" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form>
    <el-table :data="supplierTable">
      <el-table-column prop="productNumber" label="编号"></el-table-column>
      <el-table-column prop="productName" label="名称"></el-table-column>
      <el-table-column prop="productType" label="类别"></el-table-column>
      <el-table-column prop="supplier" label="供应商"></el-table-column>
      <el-table-column label="详情">
        <template slot-scope="scope">
          <router-link :to="'/product/info/'+scope.row._id">查看详情</router-link>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="remove(scope.$index,scope.row._id)">下架</el-button>
          <el-button type="primary" plain @click="delate(scope.$index,scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p class="page"><el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination></p>
  </AppContainer>
</template>
<script>
import { Select, Option, Pagination } from 'element-ui'
import { mapActions} from 'vuex'
export default {
  components:{
    'el-select': Select,
    'el-option': Option,
    'el-pagination':  Pagination
  },
  data(){
    return{
      currentPage3: 1,
      searchForm:{
        name: '',
        type: '',
        sel: ''
      },
      supplierList:[
        { title: '精准供应商', value:'jingzhun'},
        { title: '供应商', value:'supplier'}
      ],
      supplierTable:[]
    }
  },
  mounted(){
    this.Getlist()
  },
  methods:{
    ...mapActions({
      getProductList:'getProductList'
    }),
    async Getlist(){
      this.supplierTable = (await this.getProductList()).data.productList
    },
    handleSizeChange(val){
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang="stylus" scoped>
.page{
  margin-top 20px
  text-align center
}
</style>

