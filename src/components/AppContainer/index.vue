<template>
  <div>
    <el-card shadow="never" class="app-container">
      <slot/>
    </el-card>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters(["isListMode"])
  },
}
</script>

<style lang="stylus" scoped>
.app-container {
  margin: 20px 20px;
}
</style>

