import modules from './modules'


<template>
  	<div id="paper-page">
      <div class='papers-container' v-for="n in papers" v-bind:key='papers.id'>
            <PapersTemplate :post-data="n"/>
      </div>
	  </div>
</template>

<style scoped>
#paper-page{
	height: 100vh;
 text-align: start;
}
#paper-page .papers-container{
	display: block;
    float: left;
    width: 50%;
    height: 50vh;
    overflow: hidden;
    cursor:pointer;
}
</style>


<script>
import Vue from 'vue'
import PapersTemplate from '../page/PapersPage.vue'

export default {
  name: 'MyPapers',
  data() {
    return {
      papers: null,
      visible: false,
      imgs: '' 
    };
  },
  mounted() {
  const axios = require('axios');
  
  var my = 'http://alexweber.ru:5000/data_papers';
    axios.get(my)
    .then(response => {
      // JSON responses are automatically parsed.
      this.papers = response.data;
      console.log(this.papers);
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
    PapersTemplate
  }
}  
</script>