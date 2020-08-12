<template>
  <div>
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
.item-contain {
  margin-left: 8%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;
}

.product-options {
  display: flex;
}

input,
select {
  width: 60px;
  font-size: 25px;
  margin: 0 5px;
  padding: 5px 10px;
}

.update-num {
  background: black;
  border-color: black;
  color: white;
  font-size: 20px;
  width: 45px;
}

.size {
  margin-left: 10px;
}

.size-picker {
  width: 130px;
  font-size: 20px;
  height: 100%;
  border: 0;
  background-color: white;
  outline: 1px solid #ccc;
  outline-offset: -1px;
}

.quantity {
  display: flex;
}

.size-required-message {
  color: red;
}

@media screen and (max-width: 650px) {
  .img img {
    width: 100%;
  }

  .item-contain {
    margin-left: 0 !important;
    width: 95% !important;
  }

  .review {
    width: 90%;
    margin-left: 4%;
  }
}
</style>
