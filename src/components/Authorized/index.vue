<template>
  <div class="authorized">
    <slot v-if="hasAuthor"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    authority: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters(["roles"]),
    hasAuthor() {
      let auth = false
      this.roles.forEach(v => {
        if (this.authority.includes(v)) auth = true;
      });
      return false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.authorized
  display inline-block
</style>

