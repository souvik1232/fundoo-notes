import  Axios  from "./axiosservice";

const axiosService=new Axios()
export default class UserService {
    registration(data){
        console.log(data);
        return axiosService.Post('user/userSignUp',data)
    }
}
