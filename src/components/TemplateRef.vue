<template>
  <div @click="clickme">
    <input type="text" ref="inputRef">
  </div>
</template>

<script>
//eslint-disable-next-line no-unused-vars
import { onMounted, ref, reactive, onBeforeUpdate, onBeforeMount } from 'vue'
export default {
    setup(){
        const inputRef = ref(null)
        
        onBeforeMount(()=>{
            console.log("onBeforeMount",inputRef.value);
        })
        onMounted(()=>{
            inputRef.value.focus()
            console.log("onMounted",inputRef.value);
        })

        function clickme() {
            alert("click me...")
        } 
        // const focusInput = () =>{
        //     inputRef.value.focus()
        // }
        return{
            inputRef,
            // focusInput
            clickme
        }
    }

    // mounted(){
    //     this.$refs.inputRef.focus()
    //     console.log("mounted",this.$refs.inputRef);
    // },
    // beforeMount(){
    //     console.log("beforeMount",this.$refs.inputRef);
    // }
}
</script>

<style>

</style>