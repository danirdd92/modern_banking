import { Feature } from '../constants/types';

interface Props {
	feature: Feature;
}

const FeatureCard = ({ feature }: Props) => {
	const { id, icon, title, content } = feature;

	return (
		<div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
			<div className='w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue'>
				<img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
			</div>
			<div className='flex-1 fle flex-col ml-3'>
				<h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
				<p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
