import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

/* Пример REDUX */
import {createStore} from 'redux';

const reducer = (state = {data: 'Hi'}, action) => {
    switch (action.type) {
        case 'SAY OK': return {data: 'OK'};
        case 'HEADER': return {
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
 form(arr){
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
                
            </section>
 }  
 constructor(props) {
    super(props);

    this.state = {
      headerArr: this.takeData()
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
  render() {
    return <div className='main-container'>
              
              <h1>{this.state.data}</h1>
              <h2 onClick={this.sayOK.bind(this)}>Скажи ОК</h2>
              
              {this.props.tmp.map(n =>
                    <div className='project' key={n._id}>
                        <main className='project-container'>
                            <img  className='project-container__img' src={'http://alexweber.ru/img/'+n.image} /> 
                            <a className='project-container__del' target='_blank' href={n.link}> {n.name} </a>
                            <a className='project-container__del' target='_blank' href={'http://alexweber.ru:5000/delete?name=' + n.name} > УДАЛИТЬ </a>
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
        <Body tmp={this.state.jsonAPI} />
      </div>
    );
  }
}


    
class Authorization extends React.Component{
    onClick(){
      
       let log = document.getElementById('log').value;
       let pass = document.getElementById('pass').value;

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
    constructor(props) {
        super(props);
    
        this.state = {
          autoriz: []
        };
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
                    <span onClick={ this.onClick }>
                         <div className='sbm'>Залогиниться</div>
                    </span>
             </div>
        )
    }
}

function Response(props) {

    const isSuccess = props.isSuccess;
    /**
     * REDUX
     **/ 
    return isSuccess ? <AdminPanel data={props.data} /> : <Authorization/>

  }

ReactDOM.render(<Response isSuccess={false} />,  document.getElementById('root')); 