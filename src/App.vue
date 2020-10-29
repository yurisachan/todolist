<template>
  <div id="app">
    <el-container>
      <el-header class="header" ref='header'>
        <!-- Header content -->
        <Nav @pushValue="pushValue" @changeStyle="changeStyle" @customColor='customColor'></Nav>
      </el-header>
      <el-main class="main">
        <!-- Main content -->
        <todo-list todoType="正在进行" :counter="doingCounter" :itemList="itemList" @checked='checked' key="doing" @popItem='popItem' @clearAll='clearAll' type="doing" @listChange='listChange'>
        </todo-list>

        <todo-list todoType="已经完成" :counter="doneCounter" :itemList="itemList" @checked='checked' key="done" @popItem='popItem' @clearAll='clearAll' type="done" @listChange='listChange'>
        </todo-list>
      </el-main>
      <el-footer>
        <!-- Footer content -->
        <Footer></Footer>
      </el-footer>
      <el-backtop></el-backtop>
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
      color:new Map(
        [
          ['default',['#ccc','#ddd']],
          ['yellow',['#F9D403','#F9F504']],
          ['pink',['#ED0F98','#F508E9']],
          ['custom',[]]
        ]
      )
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
    },
    changeStyle(color){
      document.body.style.background=this.color.get(color)[1]
      this.$refs.header.$el.style.background=this.color.get(color)[0]
      //console.log(this.color.get(color));
      
    },
    customColor(c1,c2){
      this.color.get('custom')[0]=c1
      this.color.get('custom')[1]=c2
    },
    listChange(id){
      this.itemList.forEach((item)=> {
        if(item.id==id){
          item.type=(item.type=='doing')?"done":"doing"
          item.isChecked=!item.isChecked
        }
      });
    }
  }
};
</script>

<style>
@import url("./assets/css/normalize.css");
@import url("./assets/css/myCss.css");
</style>
