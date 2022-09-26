<template>
   <div>
     <el-button type="success" @click="changeVal">父组件改变传递给子组件的值</el-button>
   </div>
  <message ref="comp" :title="state.title" @sendMsg="getValue" @getContent="getContent"></message>
  <div>
    <el-button type="success" @click="handlerClick">按钮触发事件</el-button>
  </div>
  <!-- <div>
    <Button type="success" @click="getDevice">发送到数据仓库的信息</Button>
    <div>{{device}}</div>
  </div> -->
</template>

<script setup>
import { reactive, ref} from "vue"
import message from "./children.vue"
// import message from "./children.vue"

let state= reactive({
  title: "8999999"
});

const changeVal=()=>{
  state.title="未来有无限可能"
}


const getValue=(val)=>{
   console.log("得到子组件发送的值", val)
}

const getContent=(value)=>{
    console.log("得到第二个子组件的数据", value)
}

const comp= ref(null)
const handlerClick=()=>{
   console.log("获取数据", comp.value.list)
}
// const store= useStore();

// let device= computed(()=> store.state.settings.device)
// const getDevice=()=>{
//    store.dispatch("settings/toggleDevice", "android")
// }



</script>

<style>

</style>