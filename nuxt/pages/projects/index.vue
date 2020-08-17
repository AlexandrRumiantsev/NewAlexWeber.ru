<template>
  <div class="projects-list">
      <div class='project-box' v-for="n in this.projects" v-bind:key='JSON.parse(n)._id'>
        <nuxt-link :text="JSON.parse(n).name" :to="`/projects/${JSON.parse(n)._id}`"  class='project-container'
        :style="'background: url(http://www.alexweber.ru/img/'+ JSON.parse(n).image + ');'"">
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
              console.log(component.projects);
          }
      )
  }
};
</script>

<style>
    @import '../../assets/styles/body/projects/list.scss';
</style>
