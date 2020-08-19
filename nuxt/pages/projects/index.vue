<template>
  <div class="projects-list">
      <div class='project-box' v-for="n in this.projects" v-bind:key='n._id'>
        <nuxt-link :text="n.name" :to="`/projects/${n._id}`"  class='project-container'
        :style="'background: url(http://www.alexweber.ru/img/'+ n.image + ');'"">
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
      let store = this.$store;
      store.getters.featuredProjects();
      this.projects = store.state.projects.projects;
  }
};
</script>

<style>
    @import '../../assets/styles/body/projects/list.scss';
</style>
