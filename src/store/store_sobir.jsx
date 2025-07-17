import { create } from 'zustand'

let api = "http://localhost:3000/data"
export let useTodoSobirStore = create((set) => ({
    User: [],
    get: async () => {
        try {
            let res = await fetch(api)
            let data = await res.json()
            set(() => ({ User: data }))
        } catch (error) {
            console.error(error);

        }
    },
    DeletUser: async (id) => {
        try {
            await fetch(`${api}/${id}`, { method: "DELETE" })
            set((state) => ({ User: state.User.filter(el => el.id != id) }))
        } catch (error) {
            console.error(error);

        }
    },
    AddnewUser: async (newUser) => {
        try {
            await fetch(api, {
                method: "POST",
                headers: { "Conten-type": "application/json" },
                body: JSON.stringify(newUser)
            })
            set((state) => ({ User: [...state.User, newUser] }))
        } catch (error) {
            console.error(error);

        }
    },
    ChecUser: async (el) => {
        try {
            await fetch(`${api}/${el.id}`, {
                method: "PUT",
                headers: { "Conten-type": "application/json" },
                body: JSON.stringify({ ...el, status: !el.status })
            })
            set((state) => ({
                User: state.User.map(e => {
                    if (el.id == el.id) {
                        return {
                            ...el,
                            status: !el.status
                        }
                    }
                    return e
                })
            }))
        } catch (error) {
            console.error(error);

        }
    },
    EditUser: async (idx, Update) => {
        try {
            await fetch(`${api}/${idx}`, {
                method: "PUT",
                headers: { "Conten-type": "application/json" },
                body: JSON.stringify(Update)
            })
            set((state)=>({
                User:state.User.map(el=>{
                    if(el.id ==idx){
                        return {
                            ...el,
                            name:Update.name,
                            lorem:Update.lorem,
                            nameuser:Update.nameuser,
                            comp:Update.comp,
                            status:Update.status==true,
                            img:Update.img
                        }
                    }
                    return el
                })
            }))
        } catch (error) {
            console.error(error);

        }
    }
}))
