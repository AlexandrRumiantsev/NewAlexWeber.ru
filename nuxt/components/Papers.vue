<template>
  	<div id="paper-page">
      <section class='papers-container' v-for="n in allPapers" v-bind:key='n.id'>
            <PapersTemplate :post-data="n"/>
            <div @click="showComment(n.title)" class='paper-item__btn item-btn'>
              <i class="fa fa-comment" aria-hidden="true"></i> 
              <span class='item-btn__title'>{{ setCount(n.title)}}</span>
            </div>
            <PaperComments class='papers-container__comments' :id='n.title' :post-data="n.title"/>
      </section>
	  </div>
</template>

<style scoped>
@import '../static/scss/paper/list.scss'
</style>


<script>
import Vue from 'vue'
import PapersTemplate from '../layouts/Paper.vue'
import PaperComments from './Comments.vue'
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