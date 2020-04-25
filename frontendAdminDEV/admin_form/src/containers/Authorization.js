import React, {
  Component
} from 'react'
import {
  Menu
} from './Menu.js'

export class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoriz: [],
      checkbox: 'false'
    };
    const {
      store
    } = this.props
    console.log(store);
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  check(item) {
    console.log('check');
    let log = document.getElementById('log').value;
    let pass = document.getElementById('pass').value;

    if (item == 'true') {
      cookies.set('login', log, {
        path: '/'
      });
      cookies.set('password', pass, {
        path: '/'
      });
    }
    if (item == 'false') {
      cookies.set('login', '', {
        path: '/'
      });
      cookies.set('password', '', {
        path: '/'
      });
    }
    this.onClick(log, pass);
  }
  onClick(log, pass) {
    console.log('onClick');
    let storeState = this.props.store;

    let data = this.props.store.dispatch({
      type: 'LoginUser',
      val: {
        'log': log,
        'pass': pass,
        'callback': function (val) {
          console.log('1callback!');
        }
      },
      store: this.props.store
    })
  }
  render() {
    if (this.props.store.getState().user.User['log'] != undefined)
      return <Menu store = {
        this.props.store
      }
    />
    else {
      return ( <div>

        <div className = "box Authorization" >
        <h1> Авторизация пользователя </h1> 
        <form>
        <div className = "inputbox">
        <input 
          required id = "log"
          type = "text"
          name = "login" 
        />
        <label> Username </label> 
        </div> 
        <div className="inputbox">
        <input required 
          id = "pass"
          type = "password"
          name = "password" 
        />
        <label> 
          Password 
        </label> 
        </div>

        <div className='box__btn'>
        <div onClick = {
          () => {
            this.check(this.state.checkbox)
          }
        }
        className = 'sbm'> 
          Войти 
        </div> 
        <span className = 'span_save'
        onClick = {
          () => {

            if (this.state.checkbox == 'false') {
              this.setState({
                checkbox: 'true'
              })
            }
            if (this.state.checkbox == 'true') {
              this.setState({
                checkbox: 'false'
              })
            }

          }
        } >
        <input type = 'checkbox'
               name = 'check'
               id = 'check' / >
        Запомнить 
        </span> 
        </div>       
        </form>              
        </div> 
        </div>
      )
    }
  }
}
