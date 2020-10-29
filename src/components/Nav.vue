<!--  -->
<template>
  <div class="nav">
    <span class="logo">TODOLIST</span>
    <div class="nav-input">
      <el-input
        v-model="input"
        placeholder="输入待办事项"
        clearable
        @keyup.enter.native="pushValue(input)"
      ></el-input>
    </div>
    <div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          主题切换
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in items"
            :key="index"
            :command="item.command"
          >{{item.style}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dialog title="选择颜色" :visible.sync="isShow" width="30%">
        <span>头部：</span>
        <el-color-picker v-model="color1"></el-color-picker>
        <span>主体：</span>
        <el-color-picker v-model="color2"></el-color-picker>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="chooseColor">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      input: "",
      color1: null,
      color2: null,
      isShow: false,
      items: [
        {
          style: "默认",
          command: "default"
        },
        {
          style: "柠檬黄",
          command: "yellow"
        },
        {
          style: "胭脂粉",
          command: "pink"
        },
        {
          style: "自定义",
          command: "costom"
        }
      ]
    };
  },
  methods: {
    pushValue(value) {
      if (value == "") {
        this.$message.warning("请输入内容");
      } else {
        this.$emit("pushValue", value);
        this.input = "";
      }
    },
    handleCommand(command) {
      if (command === "costom") {
        this.isShow = true;
      }else{
        this.$emit("changeStyle", command);
      }
      
    },
    chooseColor() {
      if(this.color1!==null&&this.color2!==null){
        this.$emit('customColor',this.color1,this.color2)
        this.$emit("changeStyle", 'custom');
      }
      this.isShow=false
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/myCss.css");
</style>
