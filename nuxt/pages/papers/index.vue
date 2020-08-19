<template>
  <div id="paper-page">
    <nuxt-link 
      v-for="n in this.papers"
     class='papers-container'
      :to="`/papers/${n._id}`"
      v-bind:key='n._id' 
      :style="`color:${n.link}`">
      <div 
        class='fon-paper'
        :style="
                'background: url(http://www.alexweber.ru/img/papers/'+n.link+'.jpg ) no-repeat;'
                "
      >
        <div class='fon-paper__container'>        
          <h2 class='fon-paper__title'>{{ n.title }} </h2>
          <h3 class='fon-paper__discr'>{{ n.discription }}</h3>
        </div> 
         
        <div :id="n.link"  class='paper-item'>
          <span id='close-btn'>
                <img src='http://localhost:8080/img/close-icon.png'>
          </span>
       </div>
      </div>
      <div class='paper-item__btn item-btn'>
          <i class="fa fa-comment" aria-hidden="true"></i> 
              <span class='item-btn__title'>
               {{ setCount(n.title)}}
              </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

export default {
  data() {
      return {
        papers: '',
        allComments: ''
      }
    },
  computed: {
    ...mapGetters([
      'featuredPapers',
      'featuredComments'
    ])
  },
  methods: {
    setCount(paper){
      let counter = '0';
      for(let i = 0 ; i < this.allComments.length ; i++){
         if(this.allComments[i].paper == paper)
            counter++
      }
      return counter;
    }
  },  
  mounted: function () {
      let component = this;
      let store = this.$store;
      store.getters.feathComments();
      this.allComments = store.state.comments.comments;
      store.getters.featuredPapers();
      this.papers = store.state.papers.papers;
      
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/body/papers/list.scss';
</style>
