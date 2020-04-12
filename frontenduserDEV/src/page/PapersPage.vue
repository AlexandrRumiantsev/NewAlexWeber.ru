import modules from './modules'


<template>

   
  	<div  v-on:click="detail(postData.link)" class='fon-paper' :style="
                  'background: url(http://www.alexweber.ru/img/papers/'+postData.link+'.jpg ) no-repeat;'
                ">
        <div class='fon-paper__container'>        
          <div class='fon-paper__title'>{{ postData.title }} </div>
          <div class='fon-paper__discr'>{{ postData.discription }}</div>
        </div> 
       <DetailTemplate :post-data="postData.link" v-if="visible" />
	  </div>
</template>

<style>
.fon-paper__container{
  background:black;
  padding:30px;
  WIDTH:50%;
}
.fon-paper{
 background-size: cover !important;
 HEIGHT: 100%;
WIDTH: 100%;
position:relative;
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
import DetailTemplate from './DetailTemplate.vue';
export default {
  name: 'PapersTemplate',
  data: function () {
    return {
      visible: 0
    }
  },
  props: ['postData'],
  methods: {
    detail(link) {
      //alert(link);
      this.visible = 1;
    }
  },
  components: {
    DetailTemplate
  }
}  
</script>