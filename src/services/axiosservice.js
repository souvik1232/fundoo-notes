import  axios  from "axios";
const baseurl;
export default Post=(url,data)=>{
    axios.post(baseurl+url,data)
}