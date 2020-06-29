import modules from './modules'

<template>
  	<div  v-on:click="detail(postData.link)" class='fon-paper' :style="
                  'background: url(http://www.alexweber.ru/img/papers/'+postData.link+'.jpg ) no-repeat;'
                ">
        <div class='fon-paper__container'>        
          <h2 class='fon-paper__title'>{{ postData.title }} </h2>
          <h3 class='fon-paper__discr'>{{ postData.discription }}</h3>
        </div> 
         
        <div :id="postData.link"  class='paper-item'>
          <span id='close-btn'>
                <img src='http://localhost:8080/img/close-icon.png'>
          </span>
         <iframe :src="'http://localhost:8080/papers/' + postData.link + '.html'">
         </iframe>
       </div>
	  </div>
</template>

<style>
@import '../styles/body/papers/item/style.css';
</style>

<script>
export default {
  name: 'PapersTemplate',
  props: ['postData'],
  methods: {
    detail(link) {
      document.getElementById(link).classList.toggle("active");
    }
  }
}  
</script>