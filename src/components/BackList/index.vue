<template>
  <div class="back-list">
    <el-button @click="backList" type="primary">返回列表</el-button>
  </div>
</template>
<script>
export default {
  props:{
    params:{
      type:Object,
      default(){
        return null
      }
    }
  },
  methods:{
    backList(){
      this.$store.commit('BACK_TO_LIST',{
        mode:'list',
        profileOutParam: this.params
      })
    }
  }
}
</script>

