import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className='flex justify-between items-center w-full py-6 navbar'>
			<img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
							index === navLinks.length ? 'mr-0' : 'mr-10'
						}`}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={isOpen ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain'
					onClick={() => setIsOpen((state) => !state)}
				/>

				<menu
					className={`${
						isOpen ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
									index === navLinks.length ? 'mb-0' : 'mb-4'
								}`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</menu>
			</div>
		</nav>
	);
};

export default NavBar;
