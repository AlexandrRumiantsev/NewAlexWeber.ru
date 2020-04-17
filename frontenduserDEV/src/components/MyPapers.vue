import modules from './modules'

<template>
  	<div id="paper-page">
      <div class='papers-container' v-for="n in allPapers" v-bind:key='n.id'>
            <PapersTemplate :post-data="n"/>
            <div @click="showComment(n.title)" class='paper-item__btn'> 
              Комментарии  <span>({{ setCount(n.title)}})</span>
            </div>

            <PaperComments class='papers-container__comments' :id='n.title' :post-data="n.title"/>
             
      </div>

      

	  </div>
</template>

<style scoped>
.papers-container__comments{
  display:none;
}
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
.paper-item__btn{
    display: flex;
    bottom: 0;
    right: 0;
    color: white;
    background: black;
    padding: 10px;
    position: -webkit-sticky;
    position: sticky;
    max-width: 140px;
}

    
</style>


<script>
import Vue from 'vue'
import PapersTemplate from '../page/PapersPage.vue'
import PaperComments from '../page/PaperComments.vue'


import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'MyPapers',
  data() {
    return {
      papers: null,
      imgs: '',
      count:0
    };
  },
  computed: mapGetters(['allPapers' , 'allComments']),
  created(){
      this.feathPapers();
  },
  methods: {
    ...mapActions(['feathPapers']),
    showSingle(img) {
      this.imgs = img
      this.show()
    },
    setCount(paper){
      let counter = '0';
      for(let i = 0 ; i < this.allComments.length ; i++){
         if(this.allComments[i].paper == paper)
            counter++
      }
      return counter;
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    showComment(title){
       document.getElementById(title).style = "display:flex;";
    }
  },
  components: {
    PapersTemplate,
    PaperComments
  }
}  
</script>