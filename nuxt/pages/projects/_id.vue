<template>
  <div :id='this.item._id' 
        class='projects__detail detail'
        >
        
    <img class='detail-img' :src="'http://www.alexweber.ru/img/'+ this.item.imageFull">    
    <div class='loader'>
      <h1>{{ this.item.name }}</h1>
    </div>    
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

export default {
  data() {
      return {
        item: ''
      }
    },
  computed: {
    ...mapGetters([
      'featuredProjects',
    ])
  },
  mounted: function () {
      let component = this;
      let id = window.location.href.split('/')[4];
      this.$store.getters.featuredProjects();
      this.$store.state.projects.projects.filter(function(el){
          if(el._id == id) component.item = el;
      })
  }
};
</script>

<style>
    @import '../../assets/styles/body/projects/item.scss';
</style>
