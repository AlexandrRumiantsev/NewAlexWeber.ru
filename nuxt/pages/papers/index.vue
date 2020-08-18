<template>
  <div id="paper-page">
    <nuxt-link 
      v-for="n in this.papers"
     class='papers-container'
      :to="`/papers/${JSON.parse(n)._id}`"
      v-bind:key='JSON.parse(n)._id' 
      :style="`color:${JSON.parse(n).link}`">
      <div 
        class='fon-paper'
        :style="
                'background: url(http://www.alexweber.ru/img/papers/'+JSON.parse(n).link+'.jpg ) no-repeat;'
                "
      >
        <div class='fon-paper__container'>        
          <h2 class='fon-paper__title'>{{ JSON.parse(n).title }} </h2>
          <h3 class='fon-paper__discr'>{{ JSON.parse(n).discription }}</h3>
        </div> 
         
        <div :id="JSON.parse(n).link"  class='paper-item'>
          <span id='close-btn'>
                <img src='http://localhost:8080/img/close-icon.png'>
          </span>
       </div>
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
        papers: ''
      }
    },
  computed: {
    ...mapGetters([
      'featuredPapers',
    ])
  },
  mounted: function () {
      let component = this;
      this.$store.getters.featuredPapers(
          function(data){
            console.log(data);
              component.papers = data;
          }
      )
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/body/papers/list.scss';
</style>
