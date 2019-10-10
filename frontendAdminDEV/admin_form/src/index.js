import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';
/* Пример REDUX */
import {createStore} from 'redux';

import Cookies from 'universal-cookie';
 
const cookies = new Cookies();




const reducer = (state = {data: 'Hi'}, action) => {
    switch (action.type) {
        case 'SAY OK': return {data: 'OK'};
        case 'body': return {
            data: <h1>HEADER</h1>
        };
        default: return state;
    }
}


const store = createStore(reducer);

class Header extends React.Component {
    
 takeData(){
    store.dispatch({type: 'HEADER'});
 }
 img(img){
     
     switch(img){
         case 'default':{
             return <div className='section-header__img__default-img'> </div>
         }
     }
     
 } 
 addProject(){
    
      axios.post('http://alexweber.ru:5000/save', {
            id_group: '1' ,
            name: document.getElementById("name_project").value ,
            link: document.getElementById("url_project").value ,
            discription: document.getElementById("discr_project").value ,
            image: document.getElementById("image_project").value ,
            imageFull: document.getElementById("image_full_project").value ,
        })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
      
      /*
      Exempl render html from function in component
      
      const element = 
        `<h1>Проект успешно добавлен</h1>;`;
      
      ReactDOM.render(element, document.getElementById('root'));
      */
    
}
     
 showProjectAddForm(){
     return <div id='pop-app'>
             <div>
                <input id='name_project' type='text'/>
             </div>
             <div>
                <input id='discr_project' type='text'/>
             </div>
             <div>
                <input id='url_project' type='text'/>
             </div>
             <div>
                <input id='id_group_project' type='text'/>
             </div>
             <div>
                <input id='image_project' type='text'/>
             </div>
             <div>
                <input id='image_full_project' type='text'/>
             </div>
             <div>
                <span onClick={  () => this.addProject() } >Добавить проект </span>
             </div>
          </div>;
 }     
exitProfile(){
     cookies.set('login', '', { path: '/' });
     cookies.set('password', '', { path: '/' });
     window.location.reload();
}
 form(arr){
     let stateForm = 0 ;
     return <section className='section-header'>
     
                <header className='section-header__img'>
                    { (arr[0].img === undefined) ? this.img('default') : this.img(arr[0].img) }
                </header>
                
                <main className='section-header__name'>
                    Имя: { arr[0].name }
                </main>
                
                <footer className='section-header__login'>
                    Логин: { arr[0].login }
                </footer>
                
                <div className='section-header__exit-profile'>
                   <button onClick={ () => { this.exitProfile() } }>Выйти</button>
                </div>
                
                <div className='section-header__add-project'>
                   <button onClick={ () => { this.setState({project_form: 1}); } }>Добавить проект</button>
                </div>
                <div>{ (this.state.project_form == 1) ? this.showProjectAddForm() : '' }</div>
            </section>
 }  
 constructor(props) {
    super(props);

    this.state = {
      headerArr: this.takeData() , 
      project_form: 0
    };
  }
  componentWillMount(){
     this.takeData();
     console.log(this.state.headerArr);
  }
  render() {
       return <div className='Header'> { this.form(this.props.dataHeader) } </div>
  }
  
}

class Body extends React.Component {
  //Пример REDUX    
  constructor () {
        super(...arguments);
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }
  sayOK () {
        store.dispatch({type: 'SAY OK'});
  }
  //END REDUX
  delButton (user, project_name) {
      if(user[0].login === 'Admin'){
          return  <button onClick={ () => this.delFunc( project_name ) } className='project-container__del'> 
                      Удалить
                  </button>
      }
  }
  delFunc(name ){
      axios.get('http://alexweber.ru:5000/delete?name=' + name)
          .then( console.log('Delete ' + name) );
  }
  render() {
    return <div className='main-container'>
              
              <h1>{this.state.data}</h1>
              <h2 onClick={this.sayOK.bind(this)}>Скажи ОК</h2>
              
              {this.props.tmp.map(n =>
                    <div className='project' key={n._id}>
                        <main className='project-container'>
                            <img  className='project-container__img' src={'http://alexweber.ru/img/'+n.image} /> 
                            <a className='project-container__del' target='_blank' href={n.link}> {n.name} </a>
                            { this.delButton(this.props.user , n.name  ) }
                        </main>     
                    </div>
                )
              }</div>
  }
}

class AdminPanel extends React.Component {
  uppgrade(flag){
      if(flag===0){
        this.get();
        this.uppgrade(1);
      }else{
          setInterval(()=>{ 
              this.get(); 
          }, 30000);
      }
  }
  get(){
      
    let projects = [];
    
        new Promise( ()=>
             axios.get(`http://alexweber.ru:5000/data`)
                  .then(res => {
                    projects = res.data;
                    console.log(projects);
                    this.setState({
                      jsonAPI: projects
                    })
                  }) 
         ).then(() => {
            throw new Error('Где-то произошла ошибка');
        });     
    
    return this.state.jsonAPI;      
  }
  constructor(props) {
    super(props);

    this.state = {
      jsonAPI: []
    };
  }
  componentWillMount(){
     this.uppgrade(0);
  }
  render() {
    return (
      <div>
        <Header dataHeader={this.props.data}/>
        <Body user={this.props.data} tmp={this.state.jsonAPI} />
      </div>
    );
  }
}


    
class Authorization extends React.Component{
    
    state = {
          autoriz: [],
          checkbox: 'false'
        };
        
    constructor(props) {
        super(props);
    }
    check(item){
        
        let log = document.getElementById('log').value;
        let pass = document.getElementById('pass').value;
        
        if(item == 'true'){
            cookies.set('login', log, { path: '/' });
            cookies.set('password', pass, { path: '/' });
        }
        if(item == 'false'){
            cookies.set('login', '', { path: '/' });
            cookies.set('password', '', { path: '/' });
        }
        this.onClick(log , pass);
    }
    onClick(log , pass){

       axios.get('http://alexweber.ru:5000/login?login=' + log + '&password=' + pass)
          .then( response => {
            if (response.data.length != 0) 
                ReactDOM.render(<Response data={response.data} isSuccess={true} />,  document.getElementById('root'))
            else{
                alert('Неверный логин или пароль');
                ReactDOM.render(<Response isSuccess={false} />,  document.getElementById('root'));
            }   
          });
          
    }
    render(){
        return (
             <div className='Authorization'>
                <h1>Авторизация пользователя</h1>
                    <div className='line'>
                        <div className='row'>Логин:</div> <div className='row'><input id='log'/></div>
                    </div>
                    <div className='line'>
                        <div className='row'> Пароль:</div>  <div className='row'><input id='pass'/></div>
                    </div>
                    <span>
                         <div onClick={ ()=>{ this.check(this.state.checkbox) } } className='sbm'>Войти</div>
                         <span onClick={ 
                            ()=>{ 
                               
                                if(this.state.checkbox=='false'){
                                     this.setState({
                                      checkbox: 'true'
                                    })
                                }
                                if(this.state.checkbox=='true'){
                                     this.setState({
                                      checkbox: 'false'
                                    })
                                }    

                            }
                         }> 
                            <input type='checkbox' name='check' id='check'/>
                             Запомнить
                         </span>
                    </span>
             </div>
        )
    }
}

function Response(props) {

    const isSuccess = props.isSuccess;
    
    if(cookies.get('login') != '' && cookies.get('password') !=''){
        
        axios.get('http://alexweber.ru:5000/login?login=' + cookies.get('login') + '&password=' + cookies.get('password'))
          .then( response => {
            if (response.data.length != 0) 
                ReactDOM.render(<Response data={response.data} isSuccess={true} />,  document.getElementById('root'))
            else{
                ReactDOM.render(<Response isSuccess={false} />,  document.getElementById('root'));
            }   
          });
          
    }
    
    return isSuccess ? <AdminPanel data={props.data} /> : <Authorization/>

  }

ReactDOM.render(<Response isSuccess={false} />,  document.getElementById('root')); 