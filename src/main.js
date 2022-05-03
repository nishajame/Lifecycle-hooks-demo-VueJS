import { createApp } from 'vue'
import App from './App.vue'
import ComParent from './components/ComParent.vue'
import ComChild from './components/ComChild.vue'
import Parent from './components/Parent.vue'
import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'
import TemplateRef from './components/TemplateRef.vue'
import CustEventParent from './components/CustEventParent.vue'

const app = createApp(App)
app.component('ComParent',ComParent)
app.component('Parent',Parent)
app.component('Tab1',Tab1)
app.component('Tab2',Tab2)
app.component('TemplateRef',TemplateRef)
app.component('CustEventParent',CustEventParent)
app.component('ComChild', ComChild)


const custDetail = document.querySelector('#app')

console.log("custDetail", custDetail);
console.log("custnames", custDetail.dataset.custnames);


app.provide('custName', custDetail.dataset.custnames)

// var jsonObj = JSON.parse(custDetail.dataset.obj)
// app.provide('jsonObj', jsonObj.foo)

var json = custDetail.dataset.obj;

console.log("json",json); 

var data = JSON.parse(json);
app.provide('jsonObj', data.foo);

app.mount('#app')
