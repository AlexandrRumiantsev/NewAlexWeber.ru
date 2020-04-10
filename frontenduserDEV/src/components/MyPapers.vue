import modules from './modules'

<template>
  	<div id="paper-page">
		<div class='papers-container' v-for="n in papers" v-bind:key='papers.id'>
        	<a target="_blank" :href="n.link" >
			 	{{ n.name }}
			</a>
        </div>  
	</div>
</template>


<script>
import Vue from 'vue'
export default {
  name: 'ContactPage',
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paper-page{
	height: 100vh;
}
#paper-page div{
	display:inline-block;
	width:50%;
	height:45vh;
	border:1px solid black;
}
</style>


<script>

import Vue from 'vue'


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