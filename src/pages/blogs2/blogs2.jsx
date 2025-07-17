import React, { useEffect } from 'react'
import ArticleHeader from './components/art'

import { useCrudStore } from './storeMajid'
import {Checkbox,Modal} from 'antd'
import { useState } from 'react'
import ContactStats from './components/contactState'
import ContactForm from './components/contactForm'

const Blogs2 = () => {
  const {product,get,deleteP,update,changeStatus} = useCrudStore()

  useEffect(()=>{
    get()
  },[])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditModal(false)
  };



  //edit
  let [editTitle,setEditTitle] = useState('')
  let [editDesc,setEditDesc] = useState('')
  let [editImg,setEditImg] = useState('')
  let [editId,setEditId] = useState(null)
  let [editModal,setEditModal] = useState(false)

  function handleEdit() {
    update(editId,{title:editTitle,desc:editDesc,image:editImg})
  }

  function editPro(e) {
    setEditModal(true)
    setEditTitle(e.title)
    setEditDesc(e.desc)
    setEditImg(e.image)
    setEditId(e.id)
  }

  return (
    <div>
      <section className='max-w-5/6 m-auto p-5'>
       <main>

      <ArticleHeader/>
       </main>

       <section className='mt-10'>
        <img src="/imagesM/imgM2.svg" alt="" />
       </section>

       <section className='mt-10 flex gap-8 '>
        <article className='flex flex-col gap-6 text-2xl text-[#CE7D63]'>
          <i className='fa-brands bg-[#1F1F1F] w-10 h-10 rounded-xl text-center flex justify-between items-center p-2 fa-twitter'></i>
          <i className="fa-brands bg-[#1F1F1F] w-10 h-10 rounded-xl text-center flex justify-between items-center p-2 fa-reddit-alien"></i>
          <i className="fa-brands bg-[#1F1F1F] w-10 h-10 rounded-xl text-center flex justify-between items-center p-2 fa-facebook"></i>
        </article>
        <article className='bg-[#1A1A1A] rounded-xl p-5 w-[850px] flex flex-col gap-5'>
          <h2 className='text-4xl '>The Essence of Minimalism in Design</h2>
          <p className='pl-4'>In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful.

As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.

At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.</p>
         <h2 className='text-4xl '>Minimalism Beyond Aesthetics</h2>
         <p className='pl-4'>
          Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.

Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric.

         </p>
         <h2 className='text-4xl '>Practical Tips for Mastering Minimalistic Design</h2>
         <p className='pl-4'>
          The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.

Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.

Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.
         </p>
        </article>
        <article>
          <div className='w-[350px] bg-[#1A1A1A] p-3 rounded-xl flex flex-col gap-6 items-center'>
            <div className='flex gap-3 items-center'>
              <img src="/imagesM/kjn1.png" alt="" />
              <div>
                <h3>Wade Warren</h3>
                <span className='text-[#81807E]'>Art Director</span>
              </div>
            </div>
            <p>Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.</p>
            <div className='flex gap-[7rem] p-3 rounded-xl bg-[#1F1F1F] items-center'>
              <div className='flex  items-center gap-6'>

              <i className='fa-brands text-[#CE7D63] fa-twitter'></i>
              <p>@wadewarren</p>
              </div>
              <i className="fa-solid rotate-45 text-[#E7BEB1] fa-arrow-up-long"></i>
            </div>
          </div>
          <div className='bg-[#1A1A1A] mt-8 p-3 rounded-xl flex flex-col gap-6 items-center'>
            <div className='flex items-center gap-4'>
              <i className="fa-solid bg-[#1F1F1F] text-red-500 w-14 h-14 rounded-xl text-center text-xl flex justify-between items-center p-5 fa-heart"></i>
              <div className='flex bg-[#1F1F1F] p-4 rounded-xl items-center gap-8'>
                <p className=' '>Liked By</p>
                <div className='flex gap-4'>
                  <p className='border-r-2 pr-3 border-gray-400'>2.6 K</p>
                  <p className='text-gray-400'>USERS</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <i className="fa-solid bg-[#1F1F1F] text-[#DA9E8B] w-14 h-14 rounded-xl text-center text-xl flex justify-between items-center p-5 fa-share-nodes"></i>
              <div className='flex bg-[#1F1F1F] p-4 rounded-xl items-center gap-8'>
                <p className=' '>Shared BY</p>
                <div className='flex gap-4'>
                  <p className='border-r-2 pr-3 border-gray-400'>120</p>
                  <p className='text-gray-400'>USERS</p>
                </div>
              </div>
            </div>
          </div>
        </article>
       </section>

       <section className='border border-gray-500 p-2 rounded-lg mt-10'>
        <article className='flex bg-[#1A1A1A] py-8 px-8 rounded-xl  justify-between gap-6 items-center'>
          <h2>Related Blogs</h2>
          <div className='flex gap-6 items-center'>
            <div className='border border-[#E7BEB1] p-3 flex justify-center items-center rounded-full w-10 h-10'><i className="fa-solid rotate-45 text-[#E7BEB1] fa-arrow-up-long"></i></div>
            <p>ALL Blogs</p>
          </div>
        </article>

        <article className='flex  mt-8 justify-between'>
            {
              product.map((e)=>{
                return (
                  <div key={e.id} className='bg-[#1A1A1A] w-[370px] p-2 rounded-lg justify-between items-center flex flex-col gap-3'>
                    <img className='w-[350px]' src={e.image} alt="" />
                    <h2>{e.title}</h2>
                    <p><span className={e.status?'bg-green-500 text-white text-sm font-semibold p-2 rounded-full':'bg-red-500 text-white text-sm font-semibold p-2 rounded-full'}>{e.status?'In Stock':'Out of Stock'}</span></p>
                    <p className='text-sm text-gray-500'>{e.desc}</p>
                    <div className='flex gap-10 text-2xl'>
                      <button onClick={()=>deleteP(e.id)}><i className='fa-solid fa-trash'></i></button>
                      <button onClick={()=>editPro(e)}><i className='fa-solid fa-pen'></i></button>
                      <Checkbox checked={e.status} onChange={()=>changeStatus(e)}/>
                    </div>
                  </div>
                )
              })
            }
        </article>
       </section>

       
      </section>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={editModal}
        onOk={handleEdit}
        onCancel={handleCancel}
      >
        <input className='border m-2 p-2 rounded-md w-full' type="text" placeholder='Title' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
        <input className='border m-2 p-2 rounded-md w-full' type="text" placeholder='Description' value={editDesc} onChange={(e)=>setEditDesc(e.target.value)}/>
        <input className='border m-2 p-2 rounded-md w-full' type="text" placeholder='Image' value={editImg} onChange={(e)=>setEditImg(e.target.value)}/>
      </Modal>
    </div>
  )
}

export default Blogs2