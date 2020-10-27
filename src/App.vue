<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <!-- Header content -->
        <Nav @pushValue="pushValue"></Nav>
      </el-header>
      <el-main height>
        <!-- Main content -->
        <todo-list :item-list="itemList" todoType="正在进行" :counter="doingCounter" :items="doingItem" @checked='checked' key="doing" @popItem='popItem' @clearAll='clearAll' type="doing">
        </todo-list>

        <todo-list :item-list="itemList" todoType="已经完成" :counter="doneCounter" :items="doneItem" @checked='checked' key="done" @popItem='popItem' @clearAll='clearAll' type="done">
        </todo-list>
      </el-main>
      <el-footer>
        <!-- Footer content -->
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import TodoList from "./components/todo/TodoList";
import Footer from "./components/Footerr";

export default {
  name: "App",
  components: {
    Nav,
    TodoList,
    Footer
  },
  data() {
    return {
      itemList: [],
      id: 0,
      type: "doing",
    };
  },
  computed: {
    doingCounter(){
      let counter=0
      for(let item of this.itemList){
        if(item.type=='doing'){
          counter++
        }
      }
      return counter
    },
    doneCounter(){
      return this.itemList.length-this.doingCounter
    },
    doingItem(){
      return this.itemList.filter(item=>item.type=='doing')
    },
    doneItem(){
      return this.itemList.filter(item=>item.type=='done')
    }
  },
  methods: {
    pushValue(value) {
      let item = {
        id: this.id++,
        content: value,
        type: this.type,
        isChecked:false
      };
      this.itemList.push(item);
      //console.log(this.itemList);
    },
    checked(id){
     for(let item of this.itemList){
       if(item.id==id){
         item.type=(item.type=='doing')?"done":"doing"
         item.isChecked=(item.isChecked==true)?false:true
       }
     }
    },
    popItem(id){
      this.itemList.forEach((item,index)=> {
        if(item.id==id){
          this.itemList.splice(index,1)
        }
      });
    },
    clearAll(type){
    //   for(var i = 0; i < this.itemList.length; i++){
    //      if(this.itemList[i].type==type){
    //        this.itemList.shift()
    //      }
    //   }
        this.itemList=this.itemList.filter(item=>item.type!==type)
    }
  }
};
</script>

<style>
@import url("./assets/css/normalize.css");
.header {
  background: #ccc;
}
</style>
