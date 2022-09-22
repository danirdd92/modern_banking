import { card } from '../assets';
import Button from './Button';

const CardDeal = () => (
	<section className='section'>
		<div className='sectionInfo'>
			<h2 className='heading2'>
				Find a better card deal <br className='sm:block hidden' /> in few easy steps.
			</h2>
			<p className='paragraph max-w-[470px] mt-5'>
				Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. c Aliquet
				ultrices ac, ametau.
			</p>
			<Button styles='mt-10' />
		</div>

		<div className='sectionImg'>
			<img src={card} alt='card' className='w-full h-full' />
		</div>
	</section>
);

export default CardDeal;
