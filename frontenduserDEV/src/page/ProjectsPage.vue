import modules from './modules'

<template>
    
<div>
         <div @click="showSingle('http://alexweber.ru/img/' + postData.imageFull)" class='box-img'> 
              <div class='sloy'></div>
              <img  :src="'http://alexweber.ru/img/' + postData.image" />
         </div>

         <div class='block-info-project'>
           <div class='link-project'> 
                 <a target="_blank" :href="postData.link" >{{ postData.name }}</a>
           </div>
           <div class='title-projects'> {{ postData.title }} </div>
           <div class='discription-projects'> {{ postData.discription }} </div>
         </div>  
         
       
       <div>
        <VueEasyLightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
        ></VueEasyLightbox>
      </div>

</div>
       

</template>


<style>
    .box-img img{
    width:100%;
    height:400px;
    overflow:hidden;
    }
    .block-info-project{
        padding: 25px;
        margin: 25px;
        background: #F4F7F8;
    }
</style>

<script>

import Vue from 'vue'

export default {
  name: 'ProjectsTemplate',
  props: ['postData'],
}  
</script>