import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cont:'',
    mr:"",
    bz:"",
    xz:"",
    by:"",
    bn:"",
    xx:null
  },
  mutations: {
    getcont(state,val){
      state.cont = val
    },
    getmr(state,val){
      state.mr = val
    },
    getbz(state,val){
      state.bz = val
    },
    getxz(state,val){
      state.xz = val
    },
    getby(state,val){
      state.by = val
    },
    getbn(state,val){
      state.bn = val
    },
    getxx(state,val){
      state.xx = val
    }
  },
  actions: {
    get(x,y){
      axios.get('/api/constellation/getAll?consName='+y+'&type=today&key=0db4a6757ed64712b97d60238e8c6bf1')
          .then((cont) =>{
            console.log(JSON.parse(cont.request.responseText))
            //   console.log(cont.request.responseText)
            this.commit('getcont',cont)
          })

          axios.get('/api/constellation/getAll?consName='+y+'&type=tomorrow&key=0db4a6757ed64712b97d60238e8c6bf1')
              .then((mr) =>{
                console.log(JSON.parse(mr.request.responseText))
                //   console.log(cont.request.responseText)
                this.commit('getmr',mr)
              }),

          axios.get('/api/constellation/getAll?consName='+y+'&type=week&key=0db4a6757ed64712b97d60238e8c6bf1')
              .then((bz) =>{
                console.log(JSON.parse(bz.request.responseText))
                //   console.log(cont.request.responseText)
                this.commit('getbz',bz)
              }),

          axios.get('/api/constellation/getAll?consName='+y+'&type=nextweek&key=0db4a6757ed64712b97d60238e8c6bf1')
              .then((xz) =>{
                console.log(JSON.parse(xz.request.responseText))
                //   console.log(cont.request.responseText)
                this.commit('getxz',xz)
              }),

          axios.get('/api/constellation/getAll?consName='+y+'&type=month&key=0db4a6757ed64712b97d60238e8c6bf1')
              .then((by) =>{
                console.log(JSON.parse(by.request.responseText))
                //   console.log(cont.request.responseText)
                this.commit('getby',by)
              }),

          axios.get('/api/constellation/getAll?consName='+y+'&type=year&key=0db4a6757ed64712b97d60238e8c6bf1')
              .then((bn) =>{
                console.log(JSON.parse(bn.request.responseText))
                //   console.log(cont.request.responseText)
                this.commit('getbn',bn)
              })

    },

    fun(){
        axios.get('/static/home.json')
            .then((res) =>{
                this.commit('getxx',res.data.data)
                console.log(res)
                // 将接收到的数据传递到data的数据中
            }).catch(function (res) {
            console.log(res);
        });
    }
  }
})
