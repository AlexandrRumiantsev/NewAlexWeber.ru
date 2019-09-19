import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Price extends React.Component{
    render(){
        return (
            <button>{this.props.price} руб.</button>
        )
    }
}

class Course extends React.Component{
    render(){
        return (
            <div className='course-item'>
                <h2>{this.props.courseName}</h2>
                <p>
                    <Price price={this.props.coursePrice} />
                </p>
            </div>
        )
    }
}

class Counter extends React.Component{
    render(){
        return (
            <div>{this.props.num}</div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            // courses:[
            //     {
            //         name: 'React',
            //         price: 19900
            //     },
            //     {
            //         name: 'Web-dev',
            //         price: 17900
            //     }
            // ]
        }
    }
    countChange(){
        this.setState({num: this.state.num+1});
    }
    renderCourse(name){
        return (
            <Course courseName={name}/>
        );
    }
    handlerClick(){
        alert('Это клик из функции');
    }
    makeRed(){
        setTimeout(()=>{
            document.body.style.backgroundColor = 'red';
        }, 1000);
    }
    render(){
        return (
            <div>
                <div className='nodic'>Hello, world</div>
                <button onClick={()=>{
                        this.handlerClick()
                    }   
                }>
                    Кликни на меня
                </button>
                <button onClick={()=>{
                    this.makeRed();
                }}>
                    Покрась Body в красный
                </button>
                <div className='course-box'>
                    <Course courseName={'React'} coursePrice={4000}/>
                </div>
                <Counter num={this.state.num} />
                <button onClick={()=>{this.countChange()}}>Кликни на меня</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

/*
function App() {
  return (
    <div className="App">
      <header className="Admin-panel">
            <img src={logo} className="App-logo" alt="logo" />
            <span className='Title-span'>Административная панель</span>
            <span className='Menu-item'>Проекты</span>
      </header>
    </div>
  );
}

export default App;
*/
