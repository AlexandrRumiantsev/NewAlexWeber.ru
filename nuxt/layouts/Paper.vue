import modules from './modules'

<template>
  	<div  v-on:click="detail(postData.link)" class='fon-paper' :style="
                  'background: url(http://www.alexweber.ru/img/papers/'+postData.link+'.jpg ) no-repeat;'
                ">
        <div class='fon-paper__container'>        
          <h2 class='fon-paper__title'>{{ postData.title }} </h2>
          <h3 class='fon-paper__discr'>{{ postData.discription }}</h3>
        </div> 
         
	  </div>
</template>

<style>
@import '../static/scss/paper/item.scss';
</style>

<script>
export default {
  name: 'Paper',
  props: ['postData'],
  methods: {
    detail(link) {
      document.getElementById(link).classList.toggle("active");
    }
  }
}  
</script>