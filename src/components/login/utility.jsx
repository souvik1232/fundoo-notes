const emailpattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const passwordpattern= /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/;
module.exports = {
    isemailValid(email){
        if(email.trim().length===0){
            return false;
        }
        let regex = new RegExp(emailpattern);
        return regex.test(email)
    },
    ispasswordValid(password){
        let regex = new RegExp(passwordpattern);
        return regex.test(password)
    }
}