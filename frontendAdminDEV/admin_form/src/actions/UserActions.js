import { SET_YEAR } from '../constants/Main'
import Menu from '../components/Menu'
import axios from 'axios';
const ReactDOM = require('react-dom');
import React, { Component } from 'react'

export function getUser(state , data , store) {
    //console.log(data);
	axios.get('http://alexweber.ru:5000/login?login=' + data.log + '&password=' + data.pass)
          .then( response => {
            
            //console.log(response.data.length);
            if (response.data.length != 0){ 
            
             store.dispatch(
                            {
                              type : 'SetUser',
                              val : data
                            }
                        )
                    return state;
              
            }else{
                alert('Неверный логин или пароль');
            }   
          })
          .catch(error => {
              console.log(error)
          });
    return state;
  
  }