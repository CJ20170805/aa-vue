<template>
  <AppContainer>
    <!-- <keep-alive> -->
      <list v-if="isListMode"/>
    <!-- </keep-alive> -->
    <profile v-if="!isListMode"/>
  </AppContainer>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import * as types from "../../store/modules/mutation-types.js";
import list from "./list";
import profile from "./profile";
export default {
  name: "Users",
  components: {
    list,
    profile
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isListMode: "isListMode",//是否为list模式
      profileMode: "profileMode",//编辑页面的模式
    })
  },
  async created() {},
  mounted() {
    // 初始化list数据
    this.initListProfile();
  },
  methods: {
    ...mapMutations({
      initListProfile: types.INIT_LIST_AND_PROFILE
    })
  }
};
</script>

<style lang="stylus" scoped>
</style>

