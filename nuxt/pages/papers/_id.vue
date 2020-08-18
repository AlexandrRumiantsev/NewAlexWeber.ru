<template>
  <div>
    <iframe :src="'http://alexweber.ru/papers/' + this.item.link + '.html'"></iframe>
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
      'featuredPapers',
    ])
  },
  mounted: function () {
      let component = this;
      this.$store.getters.featuredPapers(
          function(data){
              let id = window.location.href.split('/')[4];
              data.filter(function(el){
                   if(JSON.parse(el)._id == id) component.item = JSON.parse(el);
              })
          }
      )
  },
  head() {
    return {
        title: this.item.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
  }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/body/papers/item.scss';
</style>
