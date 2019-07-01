<template>
  <AppContainer>
    <el-tree :data="data" node-key="id" :expand-on-click-node="false" ref="tree">
      <span class="custom-tree-node" slot-scope="{ node, data }">{{data}}</span>
    </el-tree>
  </AppContainer>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: null,
          name: "模块管理",
          isEdit: 0,
          sortOrder: 0, // 级别
          children: [
            {
              id: null,
              name: "模块管理",
              isEdit: 0,
              sortOrder: 0 // 级别
            }
          ]
        }
      ]
    };
  }
};
</script>
