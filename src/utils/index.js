import axios from 'axios'

const env = process.env.NODE_ENV;  //再生产环境的时候，将会被设置为production   可参考config/prod.env.js
                                    //在开发环境的时候将会被设置为development    可参考config/dev.env.js

let baseURL = env === 'development' ? '/api':'/';
const instance = axios.create({
  baseURL,
  timeout:15000
});

const xhr = {
  get(url,data,config){
    return new Promise((resolve,reject) => {
      instance.get(url,{params:data},config).then( res => {
        resolve(res.data)
        }).catch(err => {
          reject(err)
      });
    })
  },
  fatch(url,data,config,methods){
    return new Promise((resolve,reject) => {
      instance[methods](url,data,config).then( res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url,data,config){
    return this.fatch(url,data,config,'post')
  }
};


export default  xhr



