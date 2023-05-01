import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../store/themeSlice';
import color from '../style';
import { Outlet } from "react-router-dom"

const Header = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);
	const dispatch = useDispatch();
	const mode = darkMode ? color.dark : color.light;

	const handleToggle = () => {
		dispatch(toggleDarkMode());
	};
	return (
		<>
		<header
			className={`w-full ${mode.elements} flex justify-between shadow-md md:px-20 md:py-5 items-center 
        	font-Nunito ${mode.text}`}>
			<div className={`font-[800] text-[22px]`}>Where in the world?</div>
            <div onClick={handleToggle} className='flex items-center gap-1 cursor-pointer text-[15px]'>
                {darkMode ? <i className="fa-regular fa-moon"></i> : <i className="fa-solid fa-moon"></i> }
				<p className="font-[600]">{darkMode ? 'Light' : 'Dark'} Mode</p>
			</div>
		</header>
		<Outlet />
		</>
	);
};

export default Header;
