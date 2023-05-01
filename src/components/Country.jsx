import color from "../style"
import { useSelector, useDispatch } from 'react-redux'; 
import { useState, useEffect } from "react"
import { showAllCountries } from "../features/countries/countriesAction";
import { Link } from 'react-router-dom';


const Country = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const mode = darkMode ? color.dark : color.light;
    const {success, error, loading, countriesData} = useSelector((state) => state.country)
    const dispatch = useDispatch()
    const [countryData, setCountryData] = useState([])

    useEffect(()=>{
      dispatch(showAllCountries())

        if (success){
          setCountryData(countriesData)
        }

        if (error){
          console.log(error)
        }
    }, [dispatch, error, success])

  return (
    <section className={`flex flex-wrap justify-between py-12 ${mode.background} h-auto`}>
      {loading ? <h1 className={`${mode.text} text-[16px]`}>Loading...</h1> :
        ( countryData.length > 0 && 
          countryData.map((item, index)=>{
            return(
              <div 
              key={index}
              className={` w-[250px] rounded-[5px] ${mode.elements} mb-12 overflow-hidden shadow-md cursor-pointer`}>
                <img src={item.flags.svg} className="h-[150px] w-full object-cover shadow-sm" 
                alt={item.flag.alt}/>
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
              </div>
            )
          })
      )}
        
    </section>
  )
}

export default Country
