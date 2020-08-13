<template>
<header class='top-menu'>
        <nuxt-link :to="`/`">
          <div @click="activePage(1 , 'main-rect')" class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect id='main-rect' class="shape" height="60" width="320" />
            </svg>
            <div class="text">
                  ГЛАВНАЯ
            </div>
          </div>
        </nuxt-link> 
         <nuxt-link :to="`/project`">
            <div @click="activePage(2 , 'project-rect')" class="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect id='project-rect' class="shape" height="60" width="320" />
              </svg>
              <div class="text">
                    ПОРТФОЛИО
              </div>
            </div> 
         </nuxt-link>
         <nuxt-link :to="`/`">
          <div @click="activePage(3 , 'paper-rect')" class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect id='paper-rect' class="shape" height="60" width="320" />
            </svg>
            <div class="text">
                СТАТЬИ
            </div>
          </div>
        </nuxt-link>
    </header>
    </template>

<script>
    import Vue from 'vue'
    import Menu from '../components/Menu.vue';
    import Menu__mobile from '../components/Menu__mobile.vue';
    
    export default {
        props: ['activePage'],
        name: 'Menu',
        mounted: function () {
          console.log(this);
        }
    }  
</script>