import axios from 'axios'
const fetchApi = async (route , body={} , method)=>{
    console.log('Routes' , route);
    console.log('body' , body);
    console.log('method' , method);
    // axios({
    //     method : method,
    //     body:
    // })
    try{
        const res = await axios[method](`https://e09fa7e3.ngrok.io/api${route}` , body )
        return res
    }
    catch(e){
        if(e.response && e.response.data && e.response.data.errorMessage && e.response.data.errorMessage.errors && e.response.data.errorMessage.errors.userName){
            throw e.response.data.errorMessage.errors.userName.message
         }
         throw e.response.data.errorMessage
    }
}
    

export default {
    fetchApi
}