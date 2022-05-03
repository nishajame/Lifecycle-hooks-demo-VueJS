<template>
  <div>
      <!-- <h3>Composition API</h3> -->
     <h2>Parent component</h2> 
      <div>
          <button @click="showChild = !showChild">Toggle Child</button>
          <ComChild v-if="showChild" />
      </div>

      <div>
        <button @click='tabName = "Tab1"'>Tab 1 </button>
        <button @click='tabName = "Tab2"'>Tab 2</button>
        <keep-alive>
            <component :is='tabName' class='tab-area' />
        </keep-alive>
    </div>
    <div>
        <h3>Data from .Net -- {{ data }}</h3>
        <h4> Object -- {{ objData }}</h4>
    </div>
    <!-- <div>
        <h3>{{ fullName.name}}</h3>
        <button @click="changeName">Change Name</button>
    </div> -->

    </div>
</template>

<script>

//eslint-disable-next-line no-unused-vars
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onActivated, onDeactivated, onRenderTracked, onRenderTriggered, onErrorCaptured, reactive, inject } from '@vue/runtime-core'

export default {
    name:'ComParent',
    props:{
        msg: String
    },
    setup(){
        const data = inject('custName')
        const objData = inject('jsonObj')

        const showChild = ref(true)
        let tabName = ref('Tab1')
        const result = ref(0)
        const fullName = reactive({name:'Tom Jerry'})

        console.log("Composition Parent Created...");
        // console.log("tabName",tabName);

        onBeforeMount(() =>{
            // console.log("this",this);
            console.log("Composition Parent onBeforeMount()");
        })
        onMounted(()=>{
            console.log("Composition Parent onMounted()");
        })

        onBeforeUpdate(()=>{
            console.log("Composition Parent onBeforeUpdate()");
        })

        onUpdated(()=>{
            console.log("Composition Parent onUpdated()");
        })

        // onActivated(()=>{
        //     console.log("Composition Parent onActivated()");
        // })

        // onDeactivated(()=>{
        //     console.log("Composition Parent onDeactivated()");
        //     // console.log("tab",tab.value);
        // })

        //eslint-disable-next-line no-unused-vars
        // onRenderTracked((e)=>{
        //     console.log("Composition Parent onRenderTracked()");
        //     console.log(e);
            
        // })

        //eslint-disable-next-line no-unused-vars
        // onRenderTriggered((e)=>{
        //     console.log("Composition Parent onRenderTriggered()");
        //     console.log(e);
            
        // })

        // onErrorCaptured((e )=>{
        //     console.log("Composition Parent onErrorCaptured()",e);
        // })

        const changeName = (()=>{
            fullName.name = 'Tom'
        })
        
        return{
            showChild,
            tabName,
            result,
            fullName,
            changeName,
            data,
            objData
        }
    }
}
</script>

<style>

</style>