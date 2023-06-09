import theme from '../style';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/countries/countriesSlice';

const Search = () => {
	const { searchTerm } = useSelector((state) => state.country);
	const darkMode = useSelector((state) => state.theme.darkMode);
	const mode = darkMode ? theme.dark : theme.light;
	const dispatch = useDispatch();

	const handleInputValueChange = (e) => {
		dispatch(setSearchTerm(e.target.value.toLowerCase()));
	};

	return (
		<div
			className={`flex items-center rounded-[5px] gap-4 px-6 py-3 w-full ss:w-[400px] font-Nunito shadow-md
         ${mode.elements} ${mode.span}`}
		>
			<i className="fa-solid fa-magnifying-glass" />
			<input
				className={`bg-transparent text-[14px] font-[600] outline-none w-full `}
				placeholder="Search for a country..."
				value={searchTerm}
				onChange={handleInputValueChange}
			/>
		</div>
	);
};

export default Search;
