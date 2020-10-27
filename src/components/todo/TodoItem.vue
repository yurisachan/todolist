<!--  -->
<template>
  <div class="card">
    <el-card shadow="hover">
      <div class="todo-item">
        <el-checkbox @change="checked" ref="checkbox" :checked="isChecked"></el-checkbox>
        <slot name="content"></slot>
        <el-button type="danger" icon="el-icon-delete" circle @click="popItem"></el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {};
  },
  props: {
    isChecked: {}
  },
  methods: {
    checked() {
      this.$emit("checked");
      //console.log(this.$refs.checkbox);
    },
    popItem() {
      this.$emit("popItem");
    }
  }
};
</script>

<style scoped>
</style>
