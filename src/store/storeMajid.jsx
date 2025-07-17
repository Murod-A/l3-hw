import { create } from 'zustand'
let api = 'http://localhost:3008/data'
import axios from 'axios'

export const useCrudStore = create((set)=>({
    product:[],
    get:async()=>{
        try {
            let res = await axios.get(api)
            set({product:res.data})
        } catch (error) {
            console.error(error);
            
        }
    },
    deleteP:async(id)=>{
        try {
            let res = await axios.delete(`${api}/${id}`)
            set({product:res.data})
        } catch (error) {
            console.error(error);

        }
    },
    update : async(id,data)=>{
        try {
            let res = await axios.put(`${api}/${id}`,data)
            set({product:res.data})
        } catch (error) {
            console.error(error);
        }
    },
    changeStatus: async(user)=>{
        try {
            await fetch(`${api}/${user.id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({status:!user.status})
            })
            set({product:user.map(item=>item.id===user.id?{...item,status:!item.status}:item)})
        } catch (error) {
            console.error(error);
            
        }  
    }
}))