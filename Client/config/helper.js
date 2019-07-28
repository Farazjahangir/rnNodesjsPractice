import axios from 'axios'
const fetchApi = (route , body={} , method)=>{
    console.log('Routes' , route);
    console.log('body' , body);
    console.log('method' , method);
    
    axios[method](`https://0f574937.ngrok.io/api${route}` , body )
        .then((res)=>{
            console.log('Response' , res.data.data);
        })
        .catch((e)=>{
            console.log('Error' , e.message);
            
        })
}
    

export default {
    fetchApi
}