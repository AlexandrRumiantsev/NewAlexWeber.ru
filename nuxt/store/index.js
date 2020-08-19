import axios from "axios";


import data from "~/static/storedata.json";





export const state = () => ({
  project_data: ()=>{
    axios.get(url)
    .then(response => {
      return response.data;
    })
  },
  cartUIStatus: "idle",
  storedata: data,
  cart: [],
  clientSecret: "",
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
  women: state => state.storedata.filter(el => el.gender === "Female"),
  men: state => state.storedata.filter(el => el.gender === "Male"),
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
  },
  cartItems: state => {
    if (!state.cart.length) return [];
    return state.cart.map(item => {
      return {
        id: item.id,
        quantity: item.quantity
      };
    });
  },
  clientSecret: state => state.clientSecret
};

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    //this clears the cart
    (state.cart = []), (state.cartUIStatus = "idle");
  },
  addToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id);
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload)
  },
   setClientSecret: (state, payload) => {
    state.clientSecret = payload;
   },
  addOneToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id)
    itemfound ? itemfound.quantity++ : state.cart.push(payload)
  },
  removeOneFromCart: (state, payload) => {
    let index = state.cart.findIndex(el => el.id === payload.id)
    state.cart[index].quantity
      ? state.cart[index].quantity--
      : state.cart.splice(index, 1)
  },
  removeAllFromCart: (state, payload) => {
    state.cart = state.cart.filter(el => el.id !== payload.id)
  }
};

export const actions = {
  async addComments(obj ,data ){
    let sendData = {
      'paper':data.paper,
      'title':data.title,
      'user':data.user,
    }
    console.log(sendData);
    let send = function(){
      axios.post('http://alexweber.ru:5000/comment_add',sendData);
      alert('Комментарий отправлен');
      data.callbak(sendData);
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
  },
  async createPaymentIntent({ getters, commit }) {
    try {
      // Create a PaymentIntent with the information about the order
      const result = await axios.post(
        "https://ecommerce-netlify.netlify.app/.netlify/functions/create-payment-intent",
        {
          items: getters.cartItems
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (result.data.clientSecret) {
        // Store a reference to the client secret created by the PaymentIntent
        // This secret will be used to finalize the payment from the client
        commit("setClientSecret", result.data.clientSecret);
      }
    } catch (e) {
      console.log("error", e);
    }
  }
};
