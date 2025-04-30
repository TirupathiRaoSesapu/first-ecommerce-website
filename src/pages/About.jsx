import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const About = () => {
    return (
    	<div>
			<div className='text-2xl text-center pt-8  border-t'>
				<Title text1={'ABOUT'} text2={'US'} />
			</div>
			
			<div className='my-10 flex flex-col md:flex-row gap-16'>
				<img className='w-full max-w-[450px] ' src={assets.about_img} alt="" />
				<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut dolores quas mollitia odit explicabo voluptate maiores, ipsa labore vitae quasi reiciendis officiis id cupiditate pariatur. Maiores at nesciunt itaque!</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime provident quo modi. Asperiores debitis ipsam, non porro labore, ut veritatis eius nobis blanditiis repudiandae vel illum ullam. Odio, odit aspernatur.</p>
					<b className='text-gray-800'>Our Mission</b>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto provident sed fugit architecto necessitatibus quisquam porro inventore! Officia id architecto mollitia corrupti laborum error vel, maxime officiis rem enim animi.</p>
				</div>
			</div>

			<div className='text-2xl py-4'>
				<Title text1={'WHY'} text2={'CHOOSE US'}/>
			</div>

			<div className='flex flex-col md:flex-row text-sm mb-20'>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Quality Assurace:</b>
					<p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia nam possimus. Minima neque, ex quis dignissimos at optio quia error nobis esse perspiciatis inventore, numquam quas ut temporibus officiis!</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Convenience:</b>
					<p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia nam possimus. Minima neque, ex quis dignissimos at optio quia error nobis esse perspiciatis inventore, numquam quas ut temporibus officiis!</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Exeptional Customer Service:</b>
					<p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia nam possimus. Minima neque, ex quis dignissimos at optio quia error nobis esse perspiciatis inventore, numquam quas ut temporibus officiis!</p>
				</div>
			</div>

			<NewletterBox/> 
      	</div>
    )
}

export default About
