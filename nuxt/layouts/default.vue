<template>
  <div id="app">
    <Menu v-bind:activePage="activePage" />
    <Menu__mobile v-bind:activePage="activePage" />
        <transition-group name="fade" tag="div">
          <div :key="2">
            <transition name="fade">
             <div class="page page-1" v-if="show==1">  
                 <nuxt/>
             </div>   
            </transition>
            <transition name="fade2">
                <div class="page page-2" v-if="show==2">                  
                  <nuxt/>                      
                </div>
            </transition>
            <transition name="fade3">
                <div class="page page-3" v-if="show==3">
                    <nuxt/>  
                </div>
            </transition>
          </div>
         </transition-group>
         
      </div>
      
  </div>
</template>


<script>
import Projects from '../components/Projects.vue';
import Menu from '../components/Menu.vue';
import Menu__mobile from '../components/Menu__mobile.vue';


export default {
  name: 'app',
  data: function() {
      return {
        show : 1
      };
    },
  methods: {
      activePage: function (page , id) {  
        this.show = page;
      }
  },
  computed: {
      evenList: function () {
            return this.list.filter(function (item) {
              return item
            })
          },
      message(){
        return store.getters.message;
      }    
  },
  beforeCreate() {
   /* add before create */
  },
  components: {
    Menu,
    Menu__mobile , 
    Projects
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap'
      }
    ]
  }
}
</script>

<style>
@import '../assets/styles/header/menu.css';
</style>



