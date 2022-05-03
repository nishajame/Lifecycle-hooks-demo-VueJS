<template>
  <div>
      <h3>Child component</h3> 
      <div @click="sub">
        <h3 >{{ result }}</h3>
      </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from '@vue/runtime-core';
export default {
    name:'ComChild',
    setup(){
        console.log("Composition Child Created...");
        onBeforeMount(() =>{
            console.log("Composition Child onBeforeMount()");
        })
        onMounted(()=>{
            console.log("Composition Child onMounted()");
        })
        onBeforeUpdate(()=>{
            console.log("Composition Child onBeforeUpdate()");
        })
        onUpdated(()=>{
            console.log("Composition Child onUpdated()");
        })
        onBeforeUnmount(()=>{
            console.log("Composition Child onBeforeUnmount()");
        })
        onUnmounted(()=>{
            console.log("Composition Child onUnmounted()");
        })

        const result = ref(0)
        const sub = (()=>{
            result.value = 10-5
        })

        return{
            sub,
            result
        }
    }
}
</script>

<style>

</style>