import { PRODUDCT_LIST,PRODUCT_INFO } from './mutation-types'
import { getProduct,getProductInfo } from '@/api/product'

const product = {
  state: {
    productList: null,
    productInfo: null
  },

  mutations: {
    [PRODUDCT_LIST]:(state,data)=>{
      state.productList = data
    },
    [PRODUCT_INFO]: (state,data)=>{
      state.productInfo = data
    }
  },

  actions: {
    getProductList({ commit }){
      return new Promise((resolve,reject)=>{
        getProduct().then(response =>{
          //console.log(response)
          const data = response.data.productList
          if(data!=null){
            commit(PRODUDCT_LIST,data)
            resolve(response)
          }else{
            reject('信息获取失败请稍后重试')
          }
        })
      })
    },
    getProductInfoList({ commit },id){
      return new Promise((resolve,reject)=>{
        getProductInfo(id).then(response=>{
         // console.log(response)
          const data = response.data.data
          if(data!=null){
            commit(PRODUCT_INFO,data)
            resolve(response)
          }else{
            reject('没有请求到数据请稍后再试')
          }
        })
      })
    }      
  }
}

export default product