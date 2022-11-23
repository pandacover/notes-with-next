type SpinnerPropsType = {
	className: string;
};

const Spinner = ({ className }: SpinnerPropsType) => (
	<div className='w-full h-full absolute left-0 top-0 flex justify-center items-center'>
		<div className={`animate-spin rounded-full ${className}`} />
	</div>
);

export default Spinner;
