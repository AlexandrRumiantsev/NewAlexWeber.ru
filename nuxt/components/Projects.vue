<template>
  <div class="projects-list">
      <div class='project-container' v-for="n in allProjects" v-bind:key='n.id'>
        <Project :post-data="n"/>
      </div>
  </div> 
</template>


<script>
import Vue from 'vue'
import Project from '../layouts/Project.vue'

import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'Projects',
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
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
  components: {
    Project
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../static/scss/project/list.scss';
</style>