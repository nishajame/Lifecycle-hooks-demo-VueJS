<template>
  <div>
      <input type="text" placeholder="First Name" v-model="fName">
      <input type="text" placeholder="Last Name" v-model="lName">
  </div>
  <CustEventChild :fName="fName" :lName="lName" @clickMe="callMe"/>
</template>

<script>
import { ref } from 'vue'
import CustEventChild from './CustEventChild.vue'
export default {
    name:'CustEventParent',
    components:{
        CustEventChild
    },
    setup(){
        const fName = ref('')
        const lName = ref('')

        function callMe(fullName) {
            alert(`My name is ${fullName}`)
        }
        return{
            fName,
            lName,
            callMe
        }
    }
}
</script>

<style>

</style>