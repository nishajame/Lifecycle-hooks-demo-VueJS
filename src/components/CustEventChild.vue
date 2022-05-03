<template>
  <div>Hello {{ fullName}}</div>
  <button @click="sendEvent">Click me</button>
</template>

<script>
import { computed } from 'vue'
export default {
    name:'CustEventChild',
    props:['fName','lName'],
    emits:["clickMe"],
    setup(props,context){
        const fullName = computed (()=>{
            return `${props.fName}  ${props.lName}`
        })

        function sendEvent() {
            context.emit('clickMe', fullName.value)
        }
        // console.log("emit", context.emit);
        return{
            fullName,
            sendEvent
        }
    }
}
</script>

<style>

</style>