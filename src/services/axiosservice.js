import  axios  from "axios";
const baseurl="http://fundoonotes.incubation.bridgelabz.com/api/";

export default class Axios{
    Post(url,data,token){
        console.log(token);
        return axios.post(baseurl+url,data,{
            headers: {
                'Authorization': token,
                
            }
        })
    }
}
   
