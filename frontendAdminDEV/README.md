# Сторонний библиотеки:

| Название модуля       | краткое описание                | команда |
| ------------- |:------------------:| -----:|
| material-ui/core  | это набор компонентов React, который реализует Google Material Design (material-ui недавно выпустили v1 библиотеки). | npm install @material-ui/core  |
| material-ui/icons    | Более 10000 иконок React Material готовы к использованию с официального сайта. |   npm install @material-ui/icons |
| material-ui-dropzone  | Эти компоненты предоставляют либо зону сброса загрузки файла, либо зону сброса загрузки файла внутри диалога. |    npm install --save material-ui-dropzone |
| axios | | npm i axios |
| REDUX  |  Redux является предсказуемым контейнером состояния для JavaScript приложений. | npm install react-redux
| redux-logger | Mидлвар (middleware) - это предлагаемый способ расширения Redux с помощью настраиваемых функций. Mидлвар позволяет вам обернуть метод стора dispatch для пользы и дела. Ключевой особенностью мидлвара является то, что они компонуемы. Несколько мидлваров можно объединить вместе, где каждый мидлвар не должен знать, что происходит до или после него в цепочке. | npm install react-redux |
| JEST | Тестирование React-компонентов аналогично тестированию любого другого JavaScript-кода. |  npm install --save-dev jest|

# Файловая структура.

Все файлы приложения находятся в папке src

```
<div class='title'> actions </div> 
	> ApiActions.js - тестовый экшн
	> CommentsActions.js - тестовый экшн
	> PapersActions.js - тестовый экшн
	> ProjectsActions.js - тестовый экшн
	> UserActions.js - тестовый экшн
-components
	> Comments.js
	> Main.js
	> Menu.js
	> Papers.js
	> Projects.js
	> User.js
-constants
	> Api.js
	> Comments.js
	> Main.js
	> Papers.js
	> Projects.js
-containers
	> App.js
	> Authorization.js
	> Menu.js
-lib
	> file
		>> index.js
	> form
		>> EditPaper.js
		>> EditProject.js
		>> index.js
	> material
		>> index.js
		>> paperAddPopupp.js
	> index.js
-reducers
	> comments.js
	> index.js
	> main.js
	> papers.js
	> projects.js
	> switcher.js
	> user.js
-store
	> configStore.js
-styles
	> body
		>> comments
			>>> item.scss
			>>> list.scss
		>> papers
			>>> item.scss
			>>> list.scss
		>> projects
			>>> item.scss
			>>> list.scss
		>> menu.scss
	> footer
	> header
		>login.scss
	> app.scss
-tests
	> В разработке
	
```
# Макеты экранов приложения.

<h2>Главный экран</h2>
<img src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/1.png" data-canonical-src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/1.png"  height="400" /> 
<h2>Проекты</h2>
<img src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/2.png" data-canonical-src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/2.png"  height="400" />  
<h2>Редактирование проекта</h2>
<img src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/3.png" data-canonical-src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/3.png"  height="400" /> 
<h2>Страница стататей</h2>
<img src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/4.png" data-canonical-src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/4.png"  height="400" />
<h2>Добавление стататей</h2>
<img src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/6.png" data-canonical-src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/4.png"  height="400" />  
<h2>Страница комментариев</h2>
<img src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/5.png" data-canonical-src="https://github.com/AlexandrRumiantsev/NewAlexWeber.ru/blob/master/frontendAdminDEV/docs/5.png"  height="400" /> 
