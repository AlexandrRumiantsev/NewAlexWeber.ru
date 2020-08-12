<template>
  <div id="app">
    <header class='top-menu'>
        <div  @click="activePage(1)" class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" v-bind:class="{ active: isActiveOnePage }" height="60" width="320" />
          </svg>
           <div class="text">
                ГЛАВНАЯ
           </div>
        </div>
         <div @click="activePage(2)" class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" v-bind:class="{ active: isActiveTwoPage }" height="60" width="320" />
          </svg>
           <div class="text">
                ПОРТФОЛИО
           </div>
        </div> 
         <div   @click="activePage(3)" class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" v-bind:class="{ active: isActiveThreePage }" height="60" width="320" />
          </svg>
           <div class="text">
              СТАТЬИ
           </div>
        </div>
    </header>
    <header class='top-menu__mobile'> 
      <nav class="nav">
      <input type="checkbox" class="nav__cb" id="menu-cb"/>
      <div class="nav__content">
        <ul class="nav__items">
          <li class="nav__item">
            <span @click="activePage(1)" class="nav__item-text">
              <a>Главная</a>
            </span>
          </li>
          <li class="nav__item">
            <span @click="activePage(2)" class="nav__item-text">
             <a>Портфолио</a>
            </span>
          </li>
          <li class="nav__item">
            <span @click="activePage(3)" class="nav__item-text">
             <a> Статьи</a>
            </span>
          </li>
        </ul>
      </div>
      <label class="nav__btn" for="menu-cb"></label>
    </nav>
    </header>
        <transition-group name="fade" tag="div">
          <div :key="2">
            <transition name="fade">
             <div  v-if="show==1">  
                <MainPage />
             </div>   
            </transition>
            <transition name="fade2">
                <div class="portfolio-page" v-if="show==2">                  
                    <MyProjects />                         
                </div>
            </transition>
            <transition name="fade3">
                <div class="contact-page" v-if="show==3">
                     <MyPapers />   
                </div>
            </transition>
          </div>
         </transition-group>
      </div>
  </div>
</template>


<script>
//import MyPapers from './components/MyPapers.vue'
//import MainPage from './page/MainPage.vue'
//import MyProjects from './components/MyProjects.vue'
export default {
  name: 'app',
  data: function() {
      return {
        isActiveOnePage: true,
        isActiveTwoPage: false,
        isActiveThreePage: false,
        active: 1,
        slider: 1 ,
        show : 1,
        list: [
          { msg: 'Первая страница', id: 1 },
          { msg: 'Вторая страница', id: 2  },
          { msg: '1Третья страница', id: 3  }
          
        ]
      };
    },
  methods: {
        activePage: function (page) {
        
        if(page==1){
            this.isActiveOnePage = true;
            
            this.isActiveTwoPage= false;
            this.isActiveThreePage= false;
            }
        if(page==2){
           this.isActiveTwoPage= true;
        
           this.isActiveOnePage = false;
            this.isActiveThreePage= false;
            }
        if(page==3){
            this.isActiveThreePage= true;
            
            this.isActiveOnePage = false;
            this.isActiveTwoPage= false;
            }    
    
          
          this.show = page
        },
        menu: function (page) {
          this.slider = page;
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
  } 
}
</script>

<style>
@import '../assets/styles/header/menu.css';
</style>
