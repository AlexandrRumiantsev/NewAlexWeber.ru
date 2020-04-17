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
          <span id='close-btn'>
                <img src='http://localhost:8080/img/close-icon.png'>
          </span>
         <iframe :src="'http://localhost:8080/papers/' + postData.link + '.html'">
         </iframe>
       </div>
	  </div>
</template>

<style>
.paper-item__btm{
  position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    background: black;
    padding: 10px;
}
#close-btn img{
      width: 35px;
     margin:10px;
}
.content h1{
   padding:10px;
}
iframe{
    z-index: 9;
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
    position: absolute;
    top: 0;
    right: 0;
    color: black;
    z-index: 99;
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