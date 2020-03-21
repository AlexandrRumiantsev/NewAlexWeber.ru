# Техническое задание

## Аннотация

Кратко (в нескольких предложениях, желательно в одном абзаце) раскрывается тип документа (в данном случае технического задания!)

## Содержание:
* О программе	
* Документы, на основании которых ведется проектирование и инструменты.	
* Назначение разработки	
* Список функциональных характеристик	
* Требования к исходным кодам и языкам программирования	
* Список дополнительных программным ресурсов, используемые программой	
* Список инструментов для разработки	
* Стадии и этапы разработки
* Виды испытаний	
* Приложение А – Список используемых терминов с их расшифровкой	
* Приложение Б – Схема базы данных	
* Приложение В – Диаграмма 	
* Приложение Г – Макеты экранных форм	
* Список источников	


## Назначение разработки.

Проект tableware, предназначен для изучения технологии разработки приложений с использованием фреймворка React. 

## Документы, на основании которых ведется проектирование.

* https://metanit.com/web/react/5.1.php
* http://security-corp.org/programming/vebdev/38944-arhitektura-modulnyh-react-redux-prilozheniy.html
* https://habr.com/ru/post/246959/
* https://maxfarseer.gitbooks.io/redux-course-ru/
* https://github.com/maxfarseer/redux-ru-tutorial

Основные инструменты для реализации архитектуры проекта:
* flexbox
* flux
* BEM

## Список функциональных характеристик.
* Вывод списка товаров из БД.
* Детализация товвара в отдельном попапе.
* Регистрация, авторизация и аутентификация пользователя в системе.
* Добавление товара из административной панели.

## Требования к исходным кодам и языкам программирования.
Язык программирования - JavaScript. Версия - ES6. Node.js - для серверной части. React.js - для разработки интерфейса. Документирование кода - JSDoc. Тесты - Jest.

## Список дополнительных модулей, используемые программой.

| Название модуля       | краткое описание                | команда |
| ------------- |:------------------:| -----:|
| express     | представляет собой среду веб-приложений для Node.js , выпущенную в виде бесплатного программного обеспечения с открытым исходным кодом под лицензией MIT.    | npm install express --save |
| querystring    | строка запроса является частью унифицированного указателя ресурса (URL) , который присваивает значения указанных параметров. |   npm install query-string |
| cors  | Это механизм, позволяющий запрашивать ограниченные ресурсы на веб-странице из другого домена за пределами домена, из которого обслуживался первый ресурс.         |    npm i cors |
| http  | модуль node для запуска веб сервера         |    npm install http-server -g  |
| mysql  | примодуль для работы с БД        |    npm i mysql |
| react-dom  | библиотека react         |    npm i react-dom |
| react-redux  | библиотека redux         |    npm install --save react-redux |
| axios  | библиотека axios, для отправки запросов         |    npm install axios |
| scss  | библиотека для компиляцмм стилей в css         |    npm install -g sass |
| WebPack-DEV-сервер  | Используйте веб-пакет с сервером разработки, который обеспечивает перезагрузку в реальном времени. Это следует использовать только для разработки .         |    npm i --save-dev webpack webpack-dev-server webpack-cli |
| babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin  | набор библиотек для разработки        |    npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin |
| redux ,  react-redux | библиотека для  redux ,  react-redux   |    npm i redux react-redux --save |
| prop-types  | Модуль   react     |    npm install --save prop-types |
| sass-loader   | Модули для работы со стилями |    npm install sass-loader node-sass webpack --save-dev |
| autoprefixer | Модули для работы со стилями | npm install autoprefixer |
| webpack-plugin | Модули для работы с webpack |    npm install --save-dev npm-install-webpack-plugin |
redux-logger | производственный инструмент журналирования Redux, который позволяет воспроизводить проблемы, как если бы они возникали в вашем браузере. | npm i --save redux-logger |
| webpack-plugin | Модули для работы с webpack |    npm install --save-dev npm-install-webpack-plugin |
| redux-thunk --save | Redux | npm install redux-thunk --save |
| body-parser --save |  Node  | npm install body-parser --save | 
| axios |  асинхронные запросы | npm install axios |




## Список инструментов для разработки.

* vscode
* phpmyadmin
* ispmanager
* React dev tools
* webpack

## Стадии и этапы разработки.

* Разработка ТЗ.
* Создание шаблона для разработки.

## Виды испытаний.

выбрать тесты

## Приложение А – Список используемых терминов с их расшифровкой.
## Приложение Б – Схема базы данных.
## Приложение В – Диаграмма.
## Приложение Г – Макеты экранных форм.


## Список источников.

1) С 0 до 1. Разбираемся с Redux
https://habr.com/ru/post/269831/
2) Использование Babel и Webpack для настройки React-проекта с нуля
https://habr.com/ru/company/ruvds/blog/436886/
3) Правила оформления кода на React
https://netology-university.bitbucket.io/codestyle/react/
https://learn-reactjs.ru/home
4) Ссылки ref и DOM
https://learn-reactjs.ru/core/refs-and-the-dom
5) redux-ducks рефакторинг
https://www.youtube.com/watch?reload=9&v=JtbSOJKRJAI
6) Refs
https://metanit.com/web/react/3.2.php
7) Webpack 
https://webdevblog.ru/raz...ack-dlya-ljubogo-proekta/
7.1) React & Webpack 4 From Scratch - No CLI
https://www.youtube.com/watch?v=deyxI-6C2u4
8) Руководство по созданию React шаблона с нуля
https://vanillaweb.ru/create-react-boilerplate/
9) Архитектура
9.1) https://metanit.com/web/react/5.1.php
9.2) http://security-corp.org/...ct-redux-prilozheniy.html
9.3) https://habr.com/ru/post/246959/
9.4) https://maxfarseer.gitbooks.io/redux-course-ru
9.5) https://github.com/maxfarseer/redux-ru-tutorial
9.6) https://tproger.ru/translations/wtf-is-ecmascript/

10) Разное
10.1) https://code.tutsplus.com/ru/tutorials/creating-a-blogging-app-using-react-user-sign-in--cms-28568