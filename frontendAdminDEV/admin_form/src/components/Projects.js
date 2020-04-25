import React, {
  Component
} from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

const formItem = function (data, i) {
  console.log(data);
  let ProjectContainer = document.createElement('div');
  ProjectContainer.className = 'ProjectContainer';
  let id = data[i]._id;
  let group = data[i].id_group;

  ProjectContainer.id = id;
  ProjectContainer.dataset.id_group = group;

  let ProjectImg = document.createElement('div');
  ProjectImg.className = 'ProjectImg';
  let image = document.createElement('div');
  image.innerText = data[i].image;
  let imageFull = document.createElement('div');
  imageFull.innerText = data[i].imageFull;
  ProjectImg.appendChild(image);
  ProjectImg.appendChild(imageFull);

  let ProjectInfo = document.createElement('div');
  ProjectInfo.className = 'ProjectInfo';

  let name = document.createElement('div');
  let link = document.createElement('div');
  let discription = document.createElement('div');
  name.className = 'ProjectInfo__name';
  link.className = 'ProjectInfo__link';
  discription.className = 'ProjectInfo__discr';

  name.innerText = data[i].name;
  link.innerText = data[i].link;
  discription.innerText = data[i].discription;

  ProjectInfo.appendChild(name);
  ProjectInfo.appendChild(link);
  ProjectInfo.appendChild(discription);
  ProjectContainer.appendChild(ProjectImg);
  ProjectContainer.appendChild(ProjectInfo);
  return ProjectContainer;
}

export default class Projects extends Component {
  constructor() {
    super(...arguments);
    /* 
      алгоритм необходимы для обновления компонента, 
      посли изменения состояния хранилища 
    */
    const {
      store
    } = this.props
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

  }
  componentDidMount() {
    const {
      store
    } = this.props

    store.dispatch({
      type: 'setProjectsAll',
      val: 'setProjectsAll'
    })

    this.setState({
      isFetching: true
    })

  }
  insertAllProjects(data) {
    const btn = document.getElementsByClassName('all_projects_btn')[0];

    if (btn.className != 'all_projects_btn active') {
      btn.classList.add("active");
      const content = document.getElementById('content');
      for (let i = 0; i < data.length; i++) {
        content.appendChild(
          formItem(data, i)
        )
      }
      console.log(content);
    }
  }
  render() {
    const {
      store
    } = this.props

    return <div >
      <div class = 'index-container' >
      <div onClick = {
          () => {
            store.dispatch({
              type: 'index',
              val: 'index'
            })
          }
        }
      class = 'index-container__item' >
        Закрыть 
      </div> 
    </div> 
    <span 
    class = 'all_projects_btn'
    onClick = {
        () => {
          this.insertAllProjects(store.getState().projects.data)
        }
      } >
      Все проекты 
    </span> 
    <div>
      Добавить 
    </div> 
      <div id = 'content' > < /div> 
    </div>
  }
}