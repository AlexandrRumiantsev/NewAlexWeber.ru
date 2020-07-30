<template>
   <div>
   <header class='top-menu'>
       <router-link to="/" exact>
            <div class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
               <rect 
                  height="60" 
                  width="320" 
                  class="shape active"
               >
               </rect>
            </svg> 
               <div class="text">
                  ГЛАВНАЯ
               </div>
            </div>
       </router-link>     
   </header>
   <nuxt /> 
   </div> 
</template>      

<style>
@import '../static/scss/menu.scss';

.top-menu{
   text-align: center;
}
</style>

import Vue from 'vue'
export default {
  name: 'Menu'
  methods: {
    showSingle(img) {
      alert('ащ');
    }
  }
}  