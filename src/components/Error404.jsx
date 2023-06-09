import theme from '../style';
import { useSelector } from 'react-redux';

const Error404 = () => {
	// imported darkMode state from themeSlice
	const darkMode = useSelector((state) => state.theme.darkMode);
	// Ternary to switch between dark and light theme
	const mode = darkMode ? theme.dark : theme.light;

	return (
		<div className="flex flex-col w-full h-full px-4 md:px-4 justify-center items-center">
			<h3 className={`${mode.text} text-[18px]  tracking-[0.05rem] font-[800] mb-[-20px]`}>ERROR</h3>
			<h1 className={`${mode.input} text-[60px] md:text-[72px] font-[800]`}>404</h1>
			<p className={`${mode.text} tracking-[0.05em] mt-[-20px] text-[14px] md:text-[16px]`}>
				Network Error or Bad Request
			</p>
		</div>
	);
};

export default Error404;
