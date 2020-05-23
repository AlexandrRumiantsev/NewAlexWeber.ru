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

<table>
    <thead>
        <tr>
            <th colspan="9">Alexweber repo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>actions</td>
            <td>components</td>
            <td>constants</td>
            <td>containers</td>
            <td>lib</td>
            <td>reducers</td>
            <td>store</td>
            <td>styles</td>
            <td>tests</td>
        </tr>
        <tr>
            <td>
            	<div>ApiActions.js</div>
            	<div>CommentsActions.js</div>
            	<div>PapersActions.js</div>
            	<div>ProjectsActions.js</div>
            	<div>UserActions.js</div>
            </td>
            <td>
            	<div>Comments.js</div>
            	<div>Main.js</div>
            	<div>Menu.js</div>
            	<div>Papers.js</div>
            	<div>User.js</div>
            </td>
            <td>
            	<div>Api.js</div>
            	<div>Comments.js</div>
            	<div>Main.js</div>
            	<div>Papers.js</div>
            	<div>Projects.js</div>   	
            </td>
            <td>
            	<div>App.js</div>
            	<div>Authorization.js</div>
            	<div>Menu.js</div>
            </td>
            <td>
            	<pre>
            		file
            	</pre>
            	<pre>
            		form
            	</pre>
            	<pre>
            		material
            	</pre>
            	<div>index.js</div>
            </td>
            <td>
            	<div>ApiActions.js</div>
            	<div>CommentsActions.js</div>
            	<div>PapersActions.js</div>
            	<div>ProjectsActions.js</div>
            	<div>UserActions.js</div>
            </td>
            <td>
            	<div>ApiActions.js</div>
            	<div>CommentsActions.js</div>
            	<div>PapersActions.js</div>
            	<div>ProjectsActions.js</div>
            	<div>UserActions.js</div>
            </td>
            <td>
            	<div>ApiActions.js</div>
            	<div>CommentsActions.js</div>
            	<div>PapersActions.js</div>
            	<div>ProjectsActions.js</div>
            	<div>UserActions.js</div>
            </td>
            <td>
            	<div>ApiActions.js</div>
            	<div>CommentsActions.js</div>
            	<div>PapersActions.js</div>
            	<div>ProjectsActions.js</div>
            	<div>UserActions.js</div>
            </td>
        </tr>
    </tbody>
</table>



``
lib
	file
		index.js
	form
		EditPaper.js
		EditProject.js
		index.js
	material
		index.js
		paperAddPopupp.js
	index.js
reducers
	comments.js
	index.js
	main.js
	papers.js
	projects.js
	switcher.js
	user.js
store
	configStore.js
styles
	body
		comments
			item.scss
			list.scss
		papers
			item.scss
			list.scss
		projects
			tem.scss
			list.scss
		menu.scss
	footer
	header
		login.scss
	app.scss
-tests
	В разработке
``

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
