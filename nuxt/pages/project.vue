<template>
  <div>ПРОЕКТ
   {{ this.info.name }}
  </div>
   
</template>
<script>

  import global from '../mixins.js/global.js'
  import { mapGetters , mapActions } from 'vuex'
  
  export default {
    layout: 'menu',
    mixins: [global] ,
    data: function () {
      return {
        info: ''
      }
    },
    methods: {
      ...mapActions(['feathProjects'])
    },
    mounted() {
      let id = window.location.href.split('/')[4];
      let result = JSON.parse(
        localStorage.getItem('projects')
      ).find(item => item._id == id);
      this.info = result;
    },
    head() {
      return {
        title: this.info.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'description'
          }
        ]
      }
    }
  }

  
</script>