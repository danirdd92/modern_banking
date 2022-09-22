import { features } from '../constants';
import Button from './Button';
import FeatureCard from './FeatureCard';

const Business = () => {
	return (
		<section id='features' className='section'>
			<div className='sectionInfo'>
				<h2 className='heading2'>
					You do the business,
					<br className='sm:block hidden' /> we'll handle the money.
				</h2>

				<p className='paragraph max-w-[470px] mt-5'>
					With the right credit card, you can improve your financial life by building credit, earning rewards and saving
					money. But with hundreds of credit cards on the market.
				</p>

				<Button styles='mt-10' />
			</div>

			<div className='sectionImg flex-col [&>*]:mb-6 last:mb-0'>
				{features.map((feature, index) => (
					<FeatureCard key={feature.id} feature={feature} />
				))}
			</div>
		</section>
	);
};

export default Business;
