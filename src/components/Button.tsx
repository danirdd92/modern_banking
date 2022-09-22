interface Props {
	styles?: string;
}

const Button = ({ styles }: Props) => {
	return (
		<button
			type='button'
			className={`py-4 px-6 border bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
			Get Started
		</button>
	);
};

export default Button;
