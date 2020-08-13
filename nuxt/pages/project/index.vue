<template>
  <div class='project'>
    <div class='project-container' v-for="n in this.projects" v-bind:key='n._id'>
         {{ n._id }}
         <nuxt-link :to="`/project/${n._id}`">
             page
         </nuxt-link>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

export default {
  data() {
      return {
        projects: ''
      }
    },
  computed: {
    ...mapGetters([
      'featuredProjects',
    ])
  },
  mounted: function () {
      let component = this;
      this.$store.getters.featuredProjects(
          function(data){
              component.projects = data;
          }
      )
  }
};
</script>

<style lang="scss" scoped>
/*
.project{
    animation-name: slideRight;
    -webkit-animation-name: slideRight; 
 
    animation-duration: 4s; 
    -webkit-animation-duration: 4s;
 
    animation-timing-function: ease-in-out; 
    -webkit-animation-timing-function: ease-in-out;     
 
    visibility: visible !important; 
}
@keyframes slideRight {
    0% {
        transform: translateX(-150%);
    }
    50%{
        transform: translateX(-120%);
    }
    65%{
        transform: translateX(-100%);
    }
    80%{
        transform: translateX(-80%);
    }
    95%{
        transform: translateX(-40%);
    }           
    100% {
        transform: translateX(0%);
    }   
}*/
</style>
