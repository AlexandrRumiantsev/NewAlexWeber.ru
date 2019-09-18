<template>
  <div class="projects-list">
    <!-- <div class='hidden-info'>{{ info }}</div> -->
     <span class='project-container' v-for="n in info" v-bind:key='info.id'>
       <div @click="showSingle(n.image)" class='box-img'> 
            <img  :src="n.image" />
       </div>
           <div> {{ n.name }} </div>
           <div> {{ n.title }} </div>
           <div> {{ n.discription }} </div>
       <div>
  <div>
    <VueEasyLightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></VueEasyLightbox>
  </div>
      </div>    
    </span>
  </div>
</template>


<script>

import Vue from 'vue'

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
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-container:hover{
background:#19f6e8;
cursor:pointer;
color:white;
}
.box-img{
height: 300px;
    width: 100%;
    position: relative;
}
.box-img img{
position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
}
.projects-list{
width:100%;
position: relative;
   background: white;
    top:25%;
}
html .project-container{
box-shadow: 0 0 10px rgba(0,0,0,0.5);
background: white;
    word-wrap: break-word;
    padding: 30px;
    position: relative;
    top: 25%;
    margin: 15px;
    width: 30%;
    display: inline-block;
    color:black;
}
.hidden-info{
   display:none;
}

</style>