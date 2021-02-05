import  axios  from "axios";
const baseurl="http://fundoonotes.incubation.bridgelabz.com/api/";

export default class Axios{
    Post(url,data){
        return axios.post(baseurl+url,data)
    }
}
   
