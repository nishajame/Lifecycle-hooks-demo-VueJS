<template>
<div>
    <h2>Tab 1</h2>
    <input type='text' placeholder='this content will persist!' ref="inputRef"/>
</div>
</template>

<script>
export default {
    mounted(){
        // this.$refs.inputRef.focus()
    },
    activated(){
        console.log("Tab1 activated");
        // console.log("Tab",this.$el);
    },
    deactivated(){
        console.log("Tab1 deactivated");
        // console.log("Tab",this.$el);
    },
    
}
</script>

<style>

</style>