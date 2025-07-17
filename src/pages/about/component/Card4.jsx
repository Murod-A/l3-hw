import React, { useEffect, useState } from 'react'
import { useTodoSobirStore } from '../../../store/store_sobir'
import { Button, Input, Modal } from 'antd';
import img1 from '../../../../public/img1 (1).png'

const Card4 = () => {
    let { User, get, DeletUser, AddnewUser, ChecUser, EditUser } = useTodoSobirStore()

    useEffect(() => {
        get()
    }, [])



    const [isModalOpen, setIsModalOpen] = useState(false);
    let [Addname, setAddname] = useState("")
    let [Addlorem, setAddlorem] = useState("")
    let [AddnameUser, setAddnameUser] = useState("")
    let [Addcomp, setAddcomp] = useState("")
    let [Addstatus, setAddstatus] = useState("true")

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        let newUser = {
            name: Addname,
            lorem: Addlorem,
            img: img1,
            nameuser: AddnameUser,
            comp: Addcomp,
            status: Addstatus == true,
            id: Date.now().toString()
        }
        AddnewUser(newUser)
        setIsModalOpen(false);
        setAddname("")
        setAddlorem("")
        setAddcomp("")
        setAddstatus("true")
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsModalEdit(false)
    };

    const [isModalEdit, setIsModalEdit] = useState(false);
    let [Editname, setEditname] = useState("")
    let [Editlorem, setEditlorem] = useState("")
    let [EditnameUser, setEditnameUser] = useState("")
    let [Editcomp, setEditcomp] = useState("")
    let [Editstatus, setEditstatus] = useState("true")
    let [Editimg, setEditimg] = useState("");
    let [idx, setidx] = useState(null)

    function OpenEdit(el) {
        setIsModalEdit(true)
        setEditname(el.name)
        setEditlorem(el.lorem)
        setEditnameUser(el.nameuser)
        setEditcomp(el.comp)
        setEditstatus(el.status)
        setEditimg(el.img);
        setidx(el.id)
    }

    function Updated() {
        let Editnew = {
            name: Editname,
            lorem: Editlorem,
            nameuser: EditnameUser,
            comp: Editcomp,
            status: Editstatus == true,
            img: Editimg 
        }
        EditUser(idx, Editnew)
        setIsModalEdit(false)
    }

    let [Search,setSearch]=useState("")

    return (
        <div className='w-[95%] mx-auto border-2 my-[30px] border-[#1A1A1A] p-[20px] rounded-2xl'>
            <div className='bg-[#1A1A1A] p-[30px] lg:flex grid gap-[20px] justify-between rounded-2xl'>
                <p className='font-black text-4xl'>Testimonials</p>
                <input className='lg:w-[60%] w-[100%] p-[10px] border rounded-[10px]' placeholder='Search...' type="text" value={Search} onChange={(e)=>setSearch(e.target.value)} />
                <div className='flex gap-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <Button type="primary" onClick={showModal}>
                        ADD NEW USERS
                    </Button>
                </div>
            </div>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input placeholder='Name....' value={Addname} onChange={(e) => setAddname(e.target.value)}></Input> <br /><br />
                <Input placeholder='Lorem...' value={Addlorem} onChange={(e) => setAddlorem(e.target.value)}></Input> <br /><br />
                <Input placeholder='NameUser...' value={AddnameUser} onChange={(e) => setAddnameUser(e.target.value)}></Input> <br /><br />
                <Input placeholder='Compani...' value={Addcomp} onChange={(e) => setAddcomp(e.target.value)}></Input> <br /><br />
                <select value={Addstatus} onChange={(e) => setAddstatus(e.target.value)}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </Modal>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalEdit}
                onOk={Updated}
                onCancel={handleCancel}
            >
                <Input placeholder='Name....' value={Editname} onChange={(e) => setEditname(e.target.value)}></Input> <br /><br />
                <Input placeholder='Lorem...' value={Editlorem} onChange={(e) => setEditlorem(e.target.value)}></Input> <br /><br />
                <Input placeholder='NameUser...' value={EditnameUser} onChange={(e) => setEditnameUser(e.target.value)}></Input> <br /><br />
                <Input placeholder='Compani...' value={Editcomp} onChange={(e) => setEditcomp(e.target.value)}></Input> <br /><br />
                <Input placeholder='Img...' value={Editimg} onChange={(e) => setEditimg(e.target.value)}></Input> <br /><br />
                <select value={Editstatus} onChange={(e) => setEditstatus(e.target.value)}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </Modal>
            <div className='flex-wrap flex gap-[20px] justify-between mt-[20px]'>
                {User.filter(el=>el.nameuser.toLowerCase().includes(Search.toLowerCase())).map(el => {
                    return (
                        <div className='bg-[#1A1A1A] lg:w-[23%] rounded-2xl'>
                            <p className='font-medium p-[20px] text-2xl'>{el.name}</p>
                            <p className='p-[20px]'>{el.lorem}</p>
                            <div className='bg-[#1F1F1F] flex gap-[20px] p-[20px] items-center'>
                                <img src={el.img} alt="" />
                                <div>
                                    <p className='font-black'>{el.nameuser}</p>
                                    <p>{el.comp}</p>
                                </div>
                            </div>
                            <div className='p-[10px] flex justify-around'>
                                <input type="checkbox" checked={el.status} onChange={() => ChecUser(el)} />
                                <button onClick={() => DeletUser(el.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                                <button onClick={() => OpenEdit(el)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card4