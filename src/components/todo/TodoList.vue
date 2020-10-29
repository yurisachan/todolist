<!--  -->
<template>
  <div>
    <div class="list-header">
      <div>{{todoType}}</div>
      <div class="counter">
        <el-button type="primary" circle @click.native="clearAll(type)">{{counter}}</el-button>
      </div>
    </div>
    <draggable v-model="items" group='cards' animation="500" @change="onAdd">
    <transition-group>
     <todo-item
        v-for="item in items"
        :key="item.id"
        @checked="checked(item.id)"
        @popItem="popItem(item.id)"
        :isChecked="item.isChecked"
        :todoType="todoType">
        <template v-slot:content>
          <div>
            <el-input v-model="item.content" @focus="focus"></el-input>
          </div>
        </template>
      </todo-item>
    </transition-group>
     
    </draggable>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import Draggable from "vuedraggable";
export default {
  name: "TodoList",
  data() {
    return {
      items:[]
    }
  },
  watch: {
    itemList:{
        handler(newValue, oldValue) {
          this.items=newValue.filter(item=>item.type==this.type)
        },
        deep: true
    }
  },
  props: {
    todoType: {
      type: String
    },
    counter: {
      type: Number
    },
    itemList: {
      type: Array
    },
    type: {
      type: String
    }
  },
  computed: {},
  components: {
    TodoItem,
    Draggable
  },
  methods: {
    checked(id) {
      this.$emit("checked", id);
    },
    popItem(id) {
      this.$emit("popItem", id);
    },
    clearAll(type) {
      this.$emit("clearAll", type);
    },
    focus() {
      //console.log(111);
    },
    onAdd(e){
      if(e.added)
        //console.log(e)
        this.$emit('listChange',e.added.element.id)
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/myCss.css");
</style>
