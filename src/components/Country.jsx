import color from "../style"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react"
import { searchByRegion, showAllCountries } from "../features/countries/countriesAction";
import { Link } from 'react-router-dom';
import Loading from "./Loading";


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
    <section className={`flex flex-wrap gap-x-[60px] py-12 h-auto`}>
      {loading ? <Loading /> :
        (data.length > 0 &&
          data.map((item, index) => {
            return (
              <Link to={`/${item.cioc}`}
                key={index}
                className={` w-[250px] rounded-[5px] ${mode.elements} mb-12 overflow-hidden shadow-md cursor-pointer`}>
                <img src={item.flags.svg} className="h-[150px] w-full object-cover shadow-sm"
                  alt={item.flag.alt} />
                <div className={` px-6 pt-8 pb-10 ${mode.text}`}>
                  <h3 className="font-[800] text-[18px] mb-4 ">{item.name.common}</h3>
                  <p className="font-[600] text-[16px]">
                    Population:{' '}
                    <span className="text-[16px] font-[300]">
                      {item.population.toLocaleString()}
                    </span>
                  </p>

                  <p className="font-[600] text-[16px]">Region: <span className='text-[16px] font-[300]'>{item.region}</span></p>
                  <p className="font-[600] text-[16px]">Capital: <span className='text-[16px] font-[300]'>{item.capital}</span></p>
                </div>
              </Link>
            )
          })
        )}

    </section>
  )
}

export default Country
