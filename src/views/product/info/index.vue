<template>
  <AppContainer>
    <div>
      <el-row :gutter="30">
        <el-col :span="10" style="text-align:right">
          <p>产品名称:</p>  
          <p>产品品类:</p>
          <p>产品材质:</p>
          <p>产品品质:</p>
          <p>产品价格:</p>
          <p>库存:</p>
          <p>起供量:</p>
          <p>产品图片:</p>
        </el-col>
        <el-col :span="14">
          <p>{{ infoList.productName }}</p>  
          <p>{{ infoList.productType }}</p>
          <p>{{ infoList.productMaterial }}</p>
          <p>{{ infoList.productQuality }}</p>
          <p>{{ infoList.productPrice }}</p>
          <p>{{ infoList.productNum }}</p>
          <p>{{ infoList.productStartNum }}</p>
          <p><img src="@/assets/404_images/404.png" width="80%" alt=""></p>    
        </el-col>
      </el-row>
      <p class="back"><el-button type="primary" plain @click="back">返回</el-button></p>
    </div>
  </AppContainer>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return{
      infoList:{}
    }
  },
  mounted(){
    let a = this.$route.params
   // console.log(a)
    this.GetInfoList(a)
    //console.log(infoList)
  },
  methods:{
    ...mapActions({
      getProductInfoList:'getProductInfoList'
    }),
    async GetInfoList(id){
      this.infoList = (await this.getProductInfoList(id)).data.data
    },
    back(){
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
  p{
    margin-bottom 38px
  }
  .back{
    text-align center
  }
</style>

