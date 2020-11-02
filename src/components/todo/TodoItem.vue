<!--  -->
<template>
  <div class="card">
    <el-card shadow="hover">
      <div class="todo-item">
        <el-row  type='flex'>
          <el-col :span="2" :offset="0"><el-checkbox @change="checked" :checked="check"></el-checkbox></el-col>
          <el-col :span="21" :offset="0"><slot name="content"></slot></el-col>
          <el-col :span="1" :offset="0"><el-button type="danger" icon="el-icon-delete" circle @click="popItem"></el-button></el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      check:this.isChecked
    };
  },
  props: {
    isChecked: Boolean
  },
  watch: {
    isChecked:{
      handler(newValue){
        //console.log('change');
        
        this.check=newValue

      }
    }
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
