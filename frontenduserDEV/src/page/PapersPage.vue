import modules from './modules'


<template>
  	<div  v-on:click="detail(postData.link)" class='fon-paper' :style="
                  'background: url(http://www.alexweber.ru/img/papers/'+postData.link+'.jpg ) no-repeat;'
                ">
        <div class='fon-paper__container'>        
          <div class='fon-paper__title'>{{ postData.title }} </div>
          <div class='fon-paper__discr'>{{ postData.discription }}</div>
        </div> 
         
        <div :id="postData.link"  class='paper-item'>
          <span 
                id='close-btn'>
                Закрыть статью
          </span>
         <iframe :src="'http://localhost:8080/papers/' + postData.link + '.html'">
         </iframe>
       </div>
	  </div>
</template>

<style>
iframe{
  top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    background:white;
}
.paper-item{
  display:none;
}
.paper-item.active{
  display:block;
}

#close-btn{
  z-index: 99999999;
  position:fixed;
  top:0;
  right:0;
  background:black;
  color:white;
  padding:10px;
}
.fon-paper__container{
  background:black;
  padding:30px;
  WIDTH:50%;
}
.fon-paper{
 background-size: cover !important;
 HEIGHT: 100%;
WIDTH: 100%;

display:flex;
justify-content: center;
    align-items: center;
 transition: WIDTH .5s ease-in-out;
}
.fon-paper:hover{
   WIDTH: 120%;
}
.fon-paper__title{
  color:white;
  font-size:24px;
}
.fon-paper__discr{
  color:white;
  font-size:18px;
}
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