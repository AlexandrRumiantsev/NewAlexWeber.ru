import React, { Component } from 'react'
export class Menu extends Component {
   constructor () {
        super(...arguments);
        /* 
          алгоритм необходимы для обновления компонента, 
          посли изменения состояния хранилища 
        */

        const { store } = this.props
        console.log(store);
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

        this.state = {display: false};

    }
  componentDidMount(){
    //alert('xx');
  }

  render() {
      return <div>
                <div class='index-container'>
                      <div onClick={()=>{
                      this.props.store.dispatch(
                            {
                              type: 'projects', 
                              val: 'projects'
                            }
                        )
                      }}
                      class='index-container__item'>
                      Проекты
                      </div>
                </div>

                <div class='index-container'>
                      <div onClick={()=>{
                      this.props.store.dispatch(
                            {
                              type: 'papers', 
                              val: 'papers'
                            }
                        )
                      }}
                      class='index-container__item'>
                      Статьи
                      </div>
                </div>

                <div onClick={()=>{
                        alert('sadasd');
                      this.props.store.dispatch(
                            {
                              type: 'comments', 
                              val: 'comments'
                            }
                        )
                      }}
                      class='index-container'>
                      <div class='index-container__item'>
                      Комментарии
                      </div>
                </div>

                 <Switcher store={this.props.store} page={this.props.store.getState().switcher.page}/>

            </div>
  }
}