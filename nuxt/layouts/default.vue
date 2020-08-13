<template>
  <div id="app">
    <Menu v-bind:activePage="activePage" />
    <Menu__mobile v-bind:activePage="activePage" />
        <transition-group name="fade" tag="div">
          <div :key="2">
            <transition name="fade">
             <div  class="page page-1" v-if="show==1">  
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
          Object.keys(document.getElementsByClassName('shape')).forEach(
              function(index){
                  document.getElementsByClassName('shape')[index]
                    .classList.remove('active');
              }
          )
          document.getElementById(id).classList.add('active');
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
    if (process.client) {
      let page = window.location.href.split('/')[3];
      if(page)
        document.getElementById(page + '-rect').classList.add('active');
      else  document.getElementById('main-rect').classList.add('active');
    }
  },
  components: {
    Menu,
    Menu__mobile , 
    Projects
  }
}
</script>

<style>
@import '../assets/styles/header/menu.css';
</style>



