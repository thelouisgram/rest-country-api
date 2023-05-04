import { useSelector, useDispatch } from 'react-redux';
import color from '../style';
import { toggleDropDown } from '../store/filterDropDownSlice';
import { useState, useEffect } from 'react';
import { setRegion } from '../features/countries/countriesSlice';

const Filter = () => {
	const regions = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
	const [ filter, setFilter ] = useState('');
	const darkMode = useSelector((state) => state.theme.darkMode);
	const dropDown = useSelector((state) => state.dropDown.dropDown);
	const mode = darkMode ? color.dark : color.light;
	const dispatch = useDispatch();

	const handleDropDown = () => {
		dispatch(toggleDropDown());
	};

	useEffect(
		() => {
			if (filter !== '') {
				dispatch(setRegion(filter.toLowerCase()));
			}
		},
		[ filter, dispatch ]
	);

	return (
		<div>
			<div
				onClick={handleDropDown}
				className={`flex items-center ${mode.span} rounded-[5px] justify-between w-[195px] px-4 py-3 shadow-md
               text-[14px] font-[600] ${mode.elements} relative mb-1 cursor-pointer`}
			>
				<input
					type="text"
					readOnly
					placeholder="Filter by Region"
					value={filter}
					className={`bg-transparent w-[100px] outline-none cursor-pointer`}
				/>
				<i className="fa-solid fa-chevron-down" />
			</div>
			{dropDown && (
				<div
					className={`absolute ${mode.text} rounded-[5px] px-4 py-3 flex flex-col 
               gap-2 shadow-md w-[195px] z-[3] text-[14px] font-[600] ${mode.elements}`}
				>
					{regions.map((item, index) => {
						return (
							<p
								onClick={() => {
									setFilter(item), handleDropDown();
								}}
								className="cursor-pointer"
								key={index}
							>
								{item}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Filter;
