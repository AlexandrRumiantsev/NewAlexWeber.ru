<template>
    
<div>
         <div @click="showSingle('http://alexweber.ru/img/' + postData.imageFull)" class='box-img' style='position:relative; width: 100%; max-height:300px;'> 
              <div class='sloy'></div>
              <img  class='box-img__img' :src="'http://alexweber.ru/img/' + postData.image" />
         </div>

         <div class='block-info-project'>
           <div class='link-project'> 
                 <a target="_blank" :href="postData.link" >{{ postData.name }}</a>
           </div>
           <div class='title-projects'> {{ postData.title }} </div>
           <div class='discription-projects'> {{ postData.discription }} </div>
         </div>  
         
       
         <router-link to="/project/"   exact>asdsada</router-link>
         <nuxt-link :to="{
                            name: 'project', 
                            params: { data:postData , id: postData._id }  
                          }"
          >
                            nuxt
                        </nuxt-link>

</div>
       

</template>
<style scoped>
@import '../static/scss/project/item.scss';
</style>

<script>
import Vue from 'vue'
export default {
  name: 'Project',
  props: ['postData'],
  methods: {
    showSingle(img) {
      alert('ащ');
    }
  },
  mounted() {
        console.log('asdasd');
      }
} 

</script>