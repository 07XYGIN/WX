import {request} from '../utils/requests.js'
module.exports = {
    Login:(data)=>{
        return request({
            url:'/auth/loginByWeixin',
            method:"POST",
            data
        })
    }
}