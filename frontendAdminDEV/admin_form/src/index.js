import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

class Body extends React.Component {
  componentWillMount(){
  }
  
  render() {
    return <div>
              {this.props.tmp.map(n => 
                    <div key={n._id}>
                    <main>
                        {n.name}
                        {n.image}
                        {n.imageFull}
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

       if( document.querySelector('#log').value === 'admin' && 
           document.querySelector('#pass').value === 'qwe') {
               ReactDOM.render(<Response isSuccess={true} />,  document.getElementById('root'));
           }else{
               alert('Неверный логин или пароль');
               ReactDOM.render(<Response isSuccess={false} />,  document.getElementById('root'));
           }

    }
    componentDidMount() {

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