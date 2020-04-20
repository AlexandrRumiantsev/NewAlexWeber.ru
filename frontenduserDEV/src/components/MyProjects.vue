import modules from './modules'

<template>
  <div class="projects-list">
      <div class='project-container' v-for="n in allProjects" v-bind:key='n.id'>
        <ProjectsTemplate :post-data="n"/>
      </div>
  </div> 
</template>


<script>

import Vue from 'vue'
import ProjectsTemplate from '../page/ProjectsPage.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
Vue.use(VueEasyLightbox)

import { mapGetters , mapActions } from 'vuex'

export default {
  components: { VueEasyLightbox },
  name: 'MyProjects',
  data() {
    return {
      info: null,
      visible: false,
      imgs: '' 
    };
  },
  computed: mapGetters(['allProjects']),
  created(){
      this.feathProjects();
  },
  methods: {
    ...mapActions(['feathProjects']),
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
    ProjectsTemplate
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../styles/body/projects/list/style.css';
</style>