import  Axios  from "./axiosservice";

const axiosService=new Axios()
export default class UserService {
    registration(data){
        axiosService.Post('user/userSignUp',data)
    }
}
