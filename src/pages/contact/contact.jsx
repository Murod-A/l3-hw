import React from 'react'
import ContactStats from '../../components/contactState'
import ContactForm from '../../components/contactForm'

const Contact = () => {
	return (
		<div>
			<section className='mt-10'>
				<ContactStats />
			</section>

			<section className='mt-10'>
				<ContactForm />
			</section>
		</div>
	)
}

export default Contact
