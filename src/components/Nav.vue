<!--  -->
<template>
  <div class="nav">
      <span>TODOLIST</span>
      <div class="nav-input">
        <el-input v-model="input" placeholder="输入代办事项" clearable @keyup.enter.native="pushValue(input)"></el-input>
      </div>
      
  </div>
</template>

<script>
export default {
  name:'Nav',
  data () {
    return {
        input:''
    }
  },
  methods: {
      pushValue(value){
        if(value==''){
          this.$message.warning('请输入内容')
        }else{
          this.$emit('pushValue',value)
          this.input=''
        }
      }
  },
}
</script>

<style scoped>
@import url('../assets/css/myCss.css');
</style>
