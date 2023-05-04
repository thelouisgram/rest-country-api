import theme from '../style';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// imported actions from countriesAction
import { searchByRegion, showAllCountries } from '../features/countries/countriesAction';
import { Link } from 'react-router-dom';
// imported components
import Loading from './Loading';
import NotFound from './NotFound';
import Error404 from './Error404';
// imported Reducer from CountriesSlice
import { reset } from '../features/countries/countriesSlice';

const Country = () => {
	// imported darkMode state from themeSlice
	const darkMode = useSelector((state) => state.theme.darkMode);
	// Ternary to switch between dark and light theme
	const mode = darkMode ? theme.dark : theme.light;
	// importing individual state from countriesSlice initialState
	const { success, error, loading, countriesData, region, searchTerm } = useSelector((state) => state.country);
	const dispatch = useDispatch();

	useEffect(
		() => {
			// Runs showAllCountries, when any of the dependencies change
			dispatch(showAllCountries());
			// Runs searchByRegion(region) instead of showAllCountries if region === true
			if (region) {
				dispatch(searchByRegion(region.toLowerCase()));
			}
			// Reset certain states when the dependencies change
			dispatch(reset());
		},
		[dispatch, error, success, region, searchTerm]
	);

	// Filter the countriesData array to create a new array called data, which only includes items whose name.common property contains the searchTerm value (case-insensitive).
	const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm));

	return (
		// Country's content
		<section
			className={`flex flex-col items-center ss:justify-center md:justify-start  w-full ss:px-4 
    		md:px-0 ss:flex-row ss:flex-wrap ss:gap-x-[60px] py-12 h-auto`}
		>
			{/* if loading is true; display <loading />, if loading is false and error is true; display <Error />, if success is true, map through data and display content, if data.length is less than 1; display <NotFound />*/}
			{loading ? (
				<Loading />
			) : error ? (
				<Error404 />
			) : success && data.length > 0 ? (
				data.map((item, index) => (
					// Rendered country
					<Link
						to={`/${item.cioc}`}
						key={index}
						className={`w-[250px] rounded-[5px] ${mode.elements} mb-12 overflow-hidden shadow-md cursor-pointer`}
					>
						{/* Country's image */}
						<img
							src={item.flags.svg}
							className="md:h-[150px] w-[250px] object-cover shadow-sm"
							alt={item.flag.alt}
						/>
						{/* Country's info */}
						<div className={` px-6 pt-8 pb-10 ${mode.text}`}>
							<h3 className="font-[800] text-[18px] mb-4 ">{item.name.common}</h3>
							<p className="font-[600] text-[16px]">
								Population:{' '}
								<span className={`text-[16px] font-[600] ${mode.span}`}>
									{/* .toLocaleString: adds commas between the numbers */}
									{item.population.toLocaleString()}
								</span>
							</p>
							<p className="font-[600] text-[16px]">
								Region: <span className={`text-[16px] font-[600] ${mode.span}`}>{item.region}</span>
							</p>
							<p className="font-[600] text-[16px]">
								Capital: <span className={`text-[16px] font-[600] ${mode.span}`}>{item.capital}</span>
							</p>
						</div>
					</Link>
				))
			) : success && data.length === 0 ? (
				<NotFound />
			) : null}
		</section>
	);
};

export default Country;
