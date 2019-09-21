import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

class Body extends React.Component {
  componentWillMount(){
  }
  
  render() {
    return <div>{this.props.tmp.map(n => <div key={n._id}>{n.name}</div>)}</div>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<AdminPanel />, rootElement);