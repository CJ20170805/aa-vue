<template>
  <div class="pagination-wrapper">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5,10,20,30]"
      :page-size="pageSize"
      layout="total,sizes,prev,pager,next,jumper"
      :total="total||listTotal"
    ></el-pagination>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    fetchData: {
      type: Function,
      default: () => {}
    },
    total: undefined,
    initSize: undefined
  },
  data() {
    return {
      pageSize: this.initSize === undefined ? 5 : this.initSize,
      page: 1
    };
  },
  computed: {
    ...mapGetters(["listTotal"])
  },
  methods: {
    reset() {
      this.page = 1;
      this.fetchDataByPage();
    },
    fetchDataByPage() {
      let pageParams = {
        pageNum: this.page,
        pageSize: this.pageSize
      };
      this.fetchData(pageParams);
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.fetchDataByPage();
    },
    handleCurrentChange(currentPage) {
      this.page = currentPage;
      this.fetchDataByPage();
    }
  },
  mounted() {
    this.fetchDataByPage();
  }
};
</script>
<style lang="stylus" scoped>
.pagination-wrapper {
  margin-top: 20px;
  text-align: center;
}
</style>
