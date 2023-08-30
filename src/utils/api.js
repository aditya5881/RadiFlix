import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const RADIFLIX_TOKEN= import.meta.env.VITE_APP_RADIFLIX_TOKEN; 

const headers={
    Authorization: "bearer " + RADIFLIX_TOKEN,
};

export const fetchDataFromApi = async (url,params)=>{
     try{
            const {data} =await axios.get(BASE_URL + url,{
                headers,
                params
            })
            return data;
     } catch(err){
            console.log(err);
            return err;
     }
}