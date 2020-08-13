<template>
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
</template>    

<script>
    import Vue from 'vue'

    export default {
        props: ['activePage'],
        name: 'Menu__mobile'
    }  
</script>