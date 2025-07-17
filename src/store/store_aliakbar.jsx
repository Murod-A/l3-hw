import { create } from 'zustand'

let API = "http://localhost:3000/data"

export let useTodoStore = create((set) => ({
  users: [],
  get: async() => {
    try {
      let respnose = await fetch(API)
      let data = await respnose.json()
      set(() => ({users: data}))
    } catch (error) {
      console.error(error);
    }
  },
  deleteUser:async(id) => {
    try {
      await fetch(`${API}/${id}`, {method: "DELETE"})
      set((state) => ({users:state.users.filter((e) => e.id != id)}))
    } catch (error) {
      console.error(error);
    }
  },
  addUser:async(newUser) => {
    try {
      await fetch(API, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newUser)
      })
      set((state) => ({users:[...state.users, newUser]}))
    } catch (error) {
      console.error(error);
    }
  },

  editUser:async(user, editName) => {
    try {
      await fetch(`${API}/${user.id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({...user, name: editName})
      })
      set((state) => ({users:state.users.map((e) => {
        if(e.id == user.id){
          return {
            ...user,
            name: editName
          }
        }
        return e
      })}))
    } catch (error) {
      console.error(error);
    }
  },
}))