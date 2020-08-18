<template>
  <div :id='this.item._id' 
        class='projects__detail detail'
        :style="'background: url(http://www.alexweber.ru/img/'+ this.item.imageFull + ');'"
        >
    <div class='loader'></div>    
    <h1>{{ this.item.name }}</h1>

    
    <div class='detail__img'>
      <img :src="'http://www.alexweber.ru/img/'+ this.item.imageFull" />
    </div>
    <div class='detail__box'>
      <div class='detail__discription'>
        {{ this.item.discription }}
      </div>
      <a target='_blank' rel='nofollow' :href='this.item.link'>
        Перейти
      </a>
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
      this.$store.getters.featuredProjects(
          function(data){
              let id = window.location.href.split('/')[4];

              data.filter(function(el){
                  if(JSON.parse(el)._id == id) component.item = JSON.parse(el);
              })
          }
      )
  }
};
</script>

<style>
    @import '../../assets/styles/body/projects/item.scss';
</style>
