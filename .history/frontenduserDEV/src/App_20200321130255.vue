<template>
  <div id="app">
    <header class='top-menu'>
    
        <!--
        <a v-on:click="menu(1)">Резюме</a>
        <a v-on:click="menu(2)">Портфолио</a>
        <button 
             class="btn btn-primary" 
             @click="show = !show">
                 Show
        </button>
        -->
        
        
        <div  @click="activePage(1)" class="svg-wrapper">
        
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" v-bind:class="{ active: isActiveOnePage }" height="60" width="320" />
          </svg>
           <div class="text">
                ГЛАВНАЯ
           </div>
        </div>
        
         <div   @click="activePage(2)" class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" v-bind:class="{ active: isActiveTwoPage }" height="60" width="320" />
          </svg>
           <a class="text">
                ПОРТФОЛИО
          </a>
        </div>
        
         <div   @click="activePage(3)" class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" v-bind:class="{ active: isActiveThreePage }" height="60" width="320" />
          </svg>
           <div class="text">
              КОНТАКТЫ
           </div>
        </div>
    </header>
    
    <main>
    <div  v-if="slider === 1" class='top-baner'>
         <transition-group name="fade" tag="div">
          <li :key="1" class="alert alert-info">
            <transition name="fade">
                <div class="main-page" v-if="show==1">
                     <!-- {{ n.msg }} -->
                    <div class='content'>
                       <h1 class='h1-main'>1Главная</h1>
                       <h2 class='title'>Заголовок 2</h2>
                       <div class='text-page'>Текст</div>
                    </div>
                </div>
            </transition>
            <transition name="fade2">
                <div class="portfolio-page" v-if="show==2">
                    <div class='content'>
                    
                       <div class='text-page'>
                          <MyProjects msg="Welcome to Your Vue.js App"/>                   
                       </div>
                    </div>
                </div>
            </transition>
            <transition name="fade3">
                <div class="contact-page" v-if="show==3">
                    <div class='content'>
                       <h1 class='h1-main'>Контакты</h1>
                       <h2 class='title'>Заголовок 2</h2>
                       <div class='text-page'>Текст</div>
                    </div>
                </div>
            </transition>
          </li> 
         </transition-group>
       </div>
    <div v-if="slider === 2" class='top-baner two-slider'>
       ПОРТФОЛИО
    </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import MyProjects from './components/MyProjects.vue'

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
          }
  } , 
  components: {
    MyProjects
  }
}
</script>

<style>
.portfolio-page .content{
  top:0;
}
.portfolio-page .content .text-page{
  top:15%;
}
.text-page{
position: absolute;
    top: 25%;
    margin: 0 auto;
    width: 100%;
}
.title{
}
.text:focus{
   color:red !important;
}
.h1-main{
    position: absolute;
    top: 5%;
    width: 100%;
    height: 100%;
}
.top-menu{
color:white;
}
.title{
display:inline;
width:100%;
position:absolute;
top: 15%;
}
.none{
  display:none;
}
.svg-wrapper {
 display: inline-block;
    cursor: pointer;
    height: 60px;
 
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 320px;
    
}
.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  stroke: white;
}
.shape.active{
    stroke: #19f6e8;
    fill: none;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-width: 1px;
}
.text {
  color: #fff;
  font-family: 'Roboto Condensed';
  font-size: 22px;
  letter-spacing: 8px;
  line-height: 32px;
  position: relative;
  top: -48px;
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
}

.svg-wrapper:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}



    

  .fade-enter{
        transform: translate(100%, 0);
    }
.fade-enter-to {
  transform: translate(0, 0);
}
    .fade-enter-active{
        transition: 1s;
    }
    .fade-leave{
      transform: translate(0, 0);
    }
    .fade-leave-active{
         transition: 1s;
    }
    .fade-leave-to{
       transform: translate(-100%, 0);
    }
    
      .fade2-enter{
        transform: translate(100%, 0);
    }
.fade2-enter-to {
  transform: translate(0, 0);
}
    .fade2-enter-active{
        transition: 1s;
    }
     
     
     .fade2-leave{
      transform: translate(0, 0);
    }
    .fade2-leave-active{
         transition: 1s;
    }
    .fade2-leave-to{
       transform: translate(-100%, 0);
    }
    
    
          .fade3-enter{
        transform: translate(100%, 0);
    }
.fade3-enter-to {
  transform: translate(0, 0);
}
    .fade3-enter-active{
        transition: 1s;
    }
    .fade3-leave{
      transform: translate(-100%, 0);
    }
    .fade3-leave-active{
         transition: 1s;
    }
    .fade3-leave-to{
       transform: translate(-200%, 0);
    }


.alert-info{
padding: 0;
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
   
    position: absolute;
    width: 100%;
    left: 0;
    height: 100%;
}
.alert-info .main-page, .alert-info .contact-page , .alert-info .portfolio-page{
    position: absolute;
    /* z-index: 99999999; */
    width: 100%;
    height: 100%;
    margin: auto;
    background: white;
    color: black;
}
html .alert-info .main-page{
  height: 100vh;
  background: linear-gradient(45deg, rgba(103, 0, 31, .8), rgba(34, 101, 163, .5)), url(https://www.at-kom.ru/wp-content/uploads/2019/04/the_project_website.jpg); 
  background-size: cover;
}

.img-rez , .text-rez{
  display:inline-block;
}
.img-rez{
top: 50px;
}
.text-rez{
  top:90px;
text-align: left;
}
.text-rez *{
  margin-top:15px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.top-menu{
height: 15%;
    background: black;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
}
.top-menu a{
padding: 10px;
    margin: 10px;
}
.top-baner{
position:absolute;
height: 100%;
    width: 100%;
    background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
}
.info-baner{
display: inline-block;
    position: absolute;
    top: 15%;
    left: 45%;
    text-align: left;
}
.img-baner{
border-radius:200px;
    width: 400px;
}
.info-personal{
margin-top:75px;
}
.info-personal p{
padding:0;
margin:1px;
}
.content{
display:flex;
height: 100%;
 top: 15%;
    position: relative;
}

</style>
