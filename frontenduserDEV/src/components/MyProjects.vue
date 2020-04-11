import modules from './modules'

<template>
  <div class="projects-list">
      <div class='project-container' v-for="n in info" v-bind:key='info.id'>
        <ProjectsTemplate :post-data="n"/>
      </div>
  </div>
</template>


<script>

import Vue from 'vue'
import ProjectsTemplate from '../page/ProjectsPage.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
Vue.use(VueEasyLightbox)

export default {
  components: { VueEasyLightbox },
  name: 'MyProjects',
  data() {
    return {
      info: null,
      visible: false,
      imgs: '' 
    };
  },
  mounted() {
  const axios = require('axios');
  
  var my = 'http://alexweber.ru:5000/data';
  
        

    axios.get(my)
    .then(response => {
      // JSON responses are automatically parsed.
      this.info = response.data;
      
      //this.info.blob =  window.URL.createObjectURL( this.info.image)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    showSingle(img) {
      this.imgs = img
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
  components: {
    ProjectsTemplate
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.discription-projects{
    margin-top: 25px;
    padding: 15px;
    border-radius: 5px;
    background: #f5f5f5;
}
.block-info-project{
padding: 50px 30px 0 30px;
}
.project-container:hover{
transform: translateY(-30px); 
box-shadow: 20px -10px 30px rgba(0,0,0,0.5);

}
.sloy{
 background: rgba( 255, 0, 0, 0.5);
}
.box-img:hover sloy{
height:100%;
}
a {
    line-height: 1;
    display: inline-block;
    color:red;
    text-decoration:none;
    cursor: pointer;
}
a:after {
    display: block;
    content: "";
    height: 1px;
    width: 0%;
    background-color: red;
    transition: width .3s ease-in-out;
}
a:hover:after,
a:focus:after {
    width: 100%;
}

.box-img{
height: 300px;
    width: 100%;
    position: relative;
}
.box-img img{
top:0;
position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
}

.sloy{
 transition: height .3s ease-in-out;
 height: 0;
}
.box-img:hover .sloy{
cursor:pointer;
    position: absolute;
    height: 100%;
    z-index: 100;
    background: rgba( 255, 0, 0, 0.5);
    width: 100%;
    }
    
.projects-list{
   margin-top: 150px;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
}
html .project-container{
transition: 0.5s;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
background: white;
    word-wrap: break-word;
    padding: 30px;
    position: relative;
    margin: 15px;
    width: 45%;
    display: inline-block;
    color:black;
}
.hidden-info{
   display:none;
}




</style>