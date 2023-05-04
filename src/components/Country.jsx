import color from "../style"
import { useSelector, useDispatch } from 'react-redux';    
import { useEffect } from "react"
import { searchByRegion, showAllCountries } from "../features/countries/countriesAction";
import { Link } from 'react-router-dom';
import Loading from "./Loading";
import NotFound from "./NotFound";
import Error404 from "./Error404"



const Country = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? color.dark : color.light;
  const { success, error, loading, countriesData, region, searchTerm } = useSelector((state) => state.country)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showAllCountries())

    if (region) {
      dispatch(searchByRegion(region.toLowerCase()))
    }

  }, [dispatch, error, success, region, searchTerm])

  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm))

  return (
    <section className={`flex flex-col items-center ss:justify-center md:justify-start  w-full ss:px-4 
    md:px-0 ss:flex-row ss:flex-wrap ss:gap-x-[60px] py-12 h-auto`}>
      { loading ? (
        <Loading />
      ) : error ? (
        <Error404 />
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <Link
            to={`/${item.cioc}`}
            key={index}
            className={`w-[250px] rounded-[5px] ${mode.elements} mb-12 overflow-hidden shadow-md cursor-pointer`}
          >
            <img
              src={item.flags.svg}
              className="md:h-[150px] w-full object-cover shadow-sm"
              alt={item.flag.alt}
            />
            <div className={`px-6 pt-8 pb-10 ${mode.text}`}>
              <h3 className="font-bold text-lg mb-4">{item.name.common}</h3>
              <p className="font-semibold text-base">
                Population:{' '}
                <span className="text-gray-500">
                  {item.population.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold text-base">
                Region:{' '}
                <span className="text-gray-500">{item.region}</span>
              </p>
              <p className="font-semibold text-base">
                Capital:{' '}
                <span className="text-gray-500">{item.capital}</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <NotFound />
      )}


    </section>
  )
}

export default Country
