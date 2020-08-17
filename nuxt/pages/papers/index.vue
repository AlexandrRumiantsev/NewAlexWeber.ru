<template>
  <div class='project'>
    <div class='project-container' v-for="n in this.papers" v-bind:key='JSON.parse(n)._id'>
         {{ JSON.parse(n)._id }}
         <nuxt-link :to="`/papers/${JSON.parse(n)._id}`">
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

</style>
