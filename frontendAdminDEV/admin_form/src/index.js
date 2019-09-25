import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

/* Пример REDUX */
import {createStore} from 'redux';
const reducer = (state = {say: 'Hi'}, action) => {
    switch (action.type) {
        case 'SAY OK': return {say: 'OK'};
        default: return state;
    }
}
const store = createStore(reducer);
/* END REDUX */

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
           
              <h1>{this.state.say}</h1>
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
  get(){
     var projects = [];
     axios.get(`http://alexweber.ru:5000/data`)
          .then(res => {
            projects = res.data;
            this.setState({
              jsonAPI: projects
            })
          }) 
          
    return this.state.jsonAPI;      
  }
  constructor(props) {
    super(props);

    this.state = {
      jsonAPI: []
    };
  }
  render() {
    return (
      <div>
        <Body tmp={this.get()} />
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
    return isSuccess ? <AdminPanel/> : <Authorization/>

  }

ReactDOM.render(<Response isSuccess={false} />,  document.getElementById('root')); 