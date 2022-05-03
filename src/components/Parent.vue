<template>
  <div>
      Parent component
      <div>
          <button @click="showChild = !showChild">Toggle Child</button>
          <Child v-if="showChild" />
      </div>
    <div>
        <button @click='tabName = "Tab1"'>Tab 1 </button>
        <button @click='tabName = "Tab2"'>Tab 2</button>
        <keep-alive>
            <component :is='tabName' class='tab-area'/>
        </keep-alive>
    </div>
      <!-- <keep-alive >
        <div>
            <button @click="showChild = !showChild">Toggle Child</button>
            <Child v-if="showChild" />
        </div>
          
      </keep-alive> -->
      <!-- <div>
            <button @click="showInput = !showInput">Toggle Input</button>
            <input type="text" v-model="value" v-if="showInput">
          </div> -->
          
  </div>
</template>

<script>
import Child from './Child'
// import Tab1 from './Tab1.vue'
// import Tab2 from './Tab2.vue'
export default {
    name: 'Parent',
    components:{
        Child,
        // Tab1,
        // Tab2
    },
    data(){
        return{
            showChild: true,
            showInput: true,
            value: '',
            tabName: 'Tab1'
        }
    },
    beforeCreate(){
        console.log("tabName",this.tabName);
        console.log("Parent beforeCreate()");
    },
    created(){
        console.log("tabName",this.tabName);
        console.log("Parent created()");
    },
    beforeMount(){
        console.log("Parent beforeMount()");
    },
    mounted(){
        console.log("Parent mounted()");
    },
    beforeUpdate(){
        console.log("Parent beforeUpdate()");
    },
    updated(){
        console.log("Parent updated()");
    },
    activated(){
        console.log("Parent activated() - tabName -",this.tabName);

    },
    deactivated(){
        console.log("Parent deactivated()- tabName -",this.tabName);
    },
    renderTracked(){
        console.log("Parent renderTracked()- tabName -",this.tabName);
    },
    renderTriggered(){
        console.log("Parent renderTriggered()- tabName -",this.tabName);
    },
    
}
</script>

<style>

</style>