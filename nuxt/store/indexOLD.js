import axios from "axios";

export const state = () => ({
  project_data: ()=>{
    axios.get(url)
    .then(response => {
      return response.data;
    })
  },
  comments: ""
});

let url = "http://alexweber.ru:5000/";

const get = function(){
  axios.get(url)
    .then(response => {
      console.log(response.data)
      state.project_data = response.data;

  })
}


export const getters = {
  featuredComments: state => function(callback){
    axios.get(url + 'get_all_comments')
      .then(response => {
        callback(response.data)
    })
  },
  featuredProjects: state => function(callback){
    axios.get(url + 'data')
      .then(response => {
        callback(response.data)
    })
  },
  featuredPapers: state => function(callback){
    axios.get(url + 'data_papers')
      .then(response => {
        callback(response.data)
    })
  },
  featuredProducts: state => state.storedata,
};

export const mutations = {
  
};

export const actions = {
  async addComments(obj ,data ){
    let send = function(){
      axios.post('http://alexweber.ru:5000/comment_add',data);
      alert('Комментарий отправлен');
      data.callbak(data);
    }
    const response = await send();
  },
  refrashComments: function(obj , data){
    let insertData = {
      _id: 9999,
      title: data.comment,
      user: data.name,
      paper: data.paper,
      __v: 999
    }
    console.log(obj);
    obj.state.comments.push(insertData);
  }
};
