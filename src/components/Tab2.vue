<template>
<div>
    <h2>Tab 2</h2>
    <input type='text' placeholder='this content will persist!'/>
</div>
</template>

<script>
export default {
    activated(){
        console.log("Tab2 activated");
    },
    deactivated(){
        console.log("Tab2 deactivated");
    }
}
</script>

<style>

</style>