import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';


    

class Header extends React.Component{
    render(){
        return (
            <div className='HeaderMenu'>
                {this.props.data.title}
            </div>
        )
    }
}

class Body extends React.Component{
    
    constructor(props) {
    super(props);
   
    this.state = {
      dataAxios: ''
    };
    
    }
    
    componentWillUnmount() {
        
    }
    render(){
        
        return (
             <div className='Body'>
                <ul>
                  {this.props.projects}
                </ul>         
                <div className='menu-in-body'>
                    <div className='Item-menu'>проект 1 </div>
                    <div className='Item-menu'>проект 2 </div>
                    <div className='Item-menu'>проект 3 </div>
                    <div className='Item-menu'>проект 4 </div>
                </div>    
             </div>
        )
    }
}

class Footer extends React.Component{
    render(){
        return (
             <div className='Footer'>{this.props.data.title}</div>
        )
    }
}

class AdminPanel extends React.Component{
    
    getAxos(){
        var result = [];
        var i = 0
         axios.get(`http://alexweber.ru:5000/data`)
          .then(res => {
            var i = 0;  
            const projects = res.data;
            console.log(projects[0]["name"]);
            const posts = projects[0]["name"];
            
            projects.forEach( () => {
                
              this.setState({
              body: {
                  json:{
                      data: projects[i]["name"]
                  }
              }
                });
            i++;
            });
           
           
          })
        return 'result';
        }
    constructor(props){
        super(props);
        
        this.state = {
            header: {
                data: {
                    title: 'Заголовок для шапки'
                }
            },
            body: {
                json: {
                    data:  this.getAxos()
                },
                data: {
                    title: 'Список проектов'
                }
            },
            footer: {
                data: {
                    title: 'Заголовок для подвала'
                }
            },
        }
    }
    render(){
        return (
            <div>
                 <Header data={this.state.header.data} /> 
                 <Body data={this.state.body.data} projects={this.state.body.json.data}/>
                 <Footer data={this.state.footer.data} />
            </div>
            )
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