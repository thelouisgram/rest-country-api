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
		<header id="header"
			className={`w-full ${mode.elements} flex h-[72px] justify-between shadow-md px-4 md:px-20  items-center 
        	font-Nunito ${mode.text}`}>
			<div className={`font-[800] text-[16px] md:text-[22px]`}>Where in the world?</div>
            <div onClick={handleToggle} className='flex items-center gap-1 cursor-pointer text-[13px] md:text-[15px]'>
                {darkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-moon"></i> }
				<p className="font-[600]">{darkMode ? 'Dark' : 'Light'} Mode</p>
			</div>
		</header>
		<Outlet />
		</>
	);
};

export default Header;
