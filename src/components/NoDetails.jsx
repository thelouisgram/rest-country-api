import theme from '../style';
import { useSelector } from 'react-redux';

const NoDetails = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);
	const mode = darkMode ? theme.dark : theme.light;
	return (
		<div className="flex flex-col w-full h-full justify-center items-center">
			<h3 className={`${mode.text} text-[18px] tracking-[0.05rem] uppercase font-[800] mb-[-20px]`}>
				No Details Found!
			</h3>
			<h1 className={`${mode.input} text-[72px] font-[800]`}>404</h1>
			<p className={`${mode.text} tracking-[0.05em] mt-[-20px] text-[14px] md:text-[16px]`}>Bad Request</p>
		</div>
	);
};

export default NoDetails;
