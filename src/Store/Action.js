import axios from "axios";

export const readAction = ()=> dispatch=>{
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
    .then(response=>{
        return dispatch({
            type:"READ",
            payload:response.data.results
        })
    })

}

export const findAction = (email)=> {
    return{
        type: 'FIND',
        payload:email
    }

}

