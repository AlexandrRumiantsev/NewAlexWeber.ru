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
         <nuxt-link :to="`/projects`">
            <div @click="activePage(2 , 'projects-rect')" class="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect id='projects-rect' class="shape" height="60" width="320" />
              </svg>
              <div class="text">
                    ПОРТФОЛИО
              </div>
            </div> 
         </nuxt-link>
         <nuxt-link :to="`/papers`">
          <div @click="activePage(3 , 'papers-rect')" class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect id='papers-rect' class="shape" height="60" width="320" />
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
        }
    }  
</script>