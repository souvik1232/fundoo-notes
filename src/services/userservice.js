import  Post  from "./axiosservice";

export default registration=(data)=>{
    Post('user/signUp',data)
}