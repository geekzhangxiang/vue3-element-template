<template>
  <h2>{{props.title}}</h2>
  <div>
    <el-button type="primary" @click="handleMsg">发送信息</el-button>
  </div>
  <div>
    <el-button type="primary" @click="getDevice">发送到数据仓库的信息</el-button>
    <div>{{device}}</div>
  </div>
  <div>
    <div>{{props.title}}1111111</div>
  </div>
</template>

<script setup>
import {reactive, defineProps, defineEmits, computed, defineExpose} from "vue"
import {useStore} from "vuex"

const props= defineProps({
    title: String
})



const emit= defineEmits(["sendMsg","getContent"]);

const handleMsg= ()=>{
  emit("sendMsg", "未来你好9999999")
  emit("getContent", "世界那么大，我想去看看");
}

const store= useStore();
// 箭头函数这种写法自动携带返回值，加{}需要return
let device= computed(()=> store.state.settings.device)
const getDevice=()=>{
   store.dispatch("settings/toggleDevice", "android")
}

const list=reactive([1, 2, 3,4])

defineExpose({
  list
})




</script>

<style>

</style>