import  Axios  from "./axiosservice";

const axiosService=new Axios()
export default class UserService {
    registration(data){
        console.log(data);
        return axiosService.Post('user/userSignUp',data)
    }
    login(data){
        console.log(data);
        return axiosService.Post('user/login',data)
    }
    forgotPassword(data){
        console.log(data);
        return axiosService.Post('user/reset',data)
    }
    reset(data,token){
        console.log(data);
        return axiosService.Post('user/reset-password',data,token)
    }
}
