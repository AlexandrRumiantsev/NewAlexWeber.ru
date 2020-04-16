import modules from './modules'
import Vue from 'vue'

<template>
  	<div class='container-comment'>
  	     <button @click="close"> Закрыть </button>
  		 комменты к статье
  		{{postData}}
	</div>
</template>

<style scoped>
.container-comment{
	color: black;
    background: #edeef0;
    width: 100%;
    z-index: 99999;
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
}	
</style>


<script>
export default {
  name: 'PaperComments',
  props: ['postData'],
  methods: {
    close(){
       console.log(this.$el.style.cssText = '');
    }
  }
}  
</script>