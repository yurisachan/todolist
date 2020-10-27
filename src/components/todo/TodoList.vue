<!--  -->
<template>
  <div>
      <div class="list-header">
          <div>{{todoType}}</div>
          <div class="counter"><el-button type="primary" circle  @click.native='clearAll(type)'>{{counter}}</el-button></div>
      </div>
      <todo-item v-for="item in items" :key="item.id" @checked='checked(item.id)' @popItem="popItem(item.id)" :isChecked="item.isChecked" :todoType="todoType">
          <template v-slot:content>
						<div>
							{{item.content}}	
						</div>
					</template>
					
      </todo-item>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  name:'TodoList',
  data () {
    return {
    }
  },
  props:{
      itemList:{
          type:Array
      },
      todoType:{

      },
      counter:{

      },
      items:{

      },
      type:{

      }
  },
  computed: {
    
  },
  components:{
      TodoItem
	},
	methods: {
		checked(id){
			this.$emit('checked',id)
		},
		popItem(id){
			this.$emit('popItem',id)
    },
    clearAll(type){
      this.$emit('clearAll',type)
    }
	},
}
</script>

<style scoped>
@import url('../../assets/css/myCss.css')
</style>
