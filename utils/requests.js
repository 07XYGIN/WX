const BASEURL = 'http://127.0.0.1:8360/api'
const request = (option)=>{
    return new Promise((resolve,reject)=>{
      let header ={}
      let config = {
        url: BASEURL+option.url || '',
        data: option.data ||{},
        header: header,
        method: option.method?option.method.toUpperCase():'GET',
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          reject(err)
        },
        complete: (res) => {},
      }
  
      wx.request(config)
  
    })
  }
  
  module.exports = {
    request
  }
  
  