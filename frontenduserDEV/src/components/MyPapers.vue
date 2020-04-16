import modules from './modules'

<template>
  	<div id="paper-page">
      <div class='papers-container' v-for="n in allPapers" v-bind:key='n.id'>
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

import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'MyPapers',
  data() {
    return {
      papers: null,
      visible: false,
      imgs: '' 
    };
  },
  computed: mapGetters(['allPapers']),
  created(){
      this.feathPapers();
  },
  methods: {
    ...mapActions(['feathPapers']),
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