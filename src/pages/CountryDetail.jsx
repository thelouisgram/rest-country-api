import color from '../style';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { searchByCode } from '../features/countries/countriesAction';
import Loading from '../components/Loading'
import NoDetails from '../components/NoDetails'
import {reset} from '../features/countries/countriesSlice'

const CountryDetail = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? color.dark : color.light;
  const { loading, countrySearched } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  const item = countrySearched[0];

  useEffect(() => {
    dispatch(reset())
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }
  }, [dispatch, code]);

  return (
    <section className={`h-screen-16 ${mode.background} font-Nunito ${mode.text}`}>
      <div className={`${mode.background} h-auto`}>
        <div className={`w-full md:w-[1180px] px-6 ss:px-10 md:px-0 mx-auto py-12`}>
          <Link
            to="/"
            className={`flex gap-2 justify-center py-1 ${mode.elements} ${mode.text} rounded-[5px] w-[125px]
          shadow-md items-center`}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <p>Back</p>
          </Link>
          <div className="pt-12">
            {loading ? (
              <Loading />
            ) : countrySearched.length > 0 ?
              (<div className="flex flex-col md:flex-row md:items-center">
                <div className="ss:w-[600px] flex justify-start">
                  <img src={item.flags.svg} className="w-full mb-10 md:mb-0 ss:w-[500px] h-auto object-cover shadow-md" />
                </div>
                <div className="flex flex-1 flex-col">
                  <h1 className="font-[600] text-[24px] mb-6">{item.name.common}</h1>
                  <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-3 mb-10">
                    <div className="flex flex-col gap-2">
                      <p className="font-[600] text-[16px]">
                        Official Name:{' '}
                        <span className={`text-[16px] font-[600] ${mode.span}`}>{item.name.official}</span>
                      </p>
                      <p className="font-[600] text-[16px]">
                        Population:{' '}
                        <span className={`text-[16px] font-[600] ${mode.span}`}>
                          {item.population.toLocaleString()}
                        </span>
                      </p>
                      <p className="font-[600] text-[16px]">
                        Region: <span className={`text-[16px] font-[600] ${mode.span}`}>{item.region}</span>
                      </p>
                      <p className="font-[600] text-[16px]">
                        Sub Region: <span className={`text-[16px] font-[600] ${mode.span}`}>{item.subregion}</span>
                      </p>
                      <p className="font-[600] text-[16px]">
                        Capital: <span className={`text-[16px] font-[600] ${mode.span}`}>{item.capital}</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-[600] text-[16px]">
                        Top Level Domain: <span className={`text-[16px] font-[600] ${mode.span}`}>{item.tld}</span>
                      </p>
                      <p className="font-[600] text-[16px]">
                        Currencies:{' '}
                        <span className={`text-[16px] font-[600] ${mode.span}`}>
                          {Object.values(item.currencies)
                            .map((currency) => {
                              return currency.name;
                            })
                            .join(', ')}
                        </span>
                      </p>
                      <p className="font-[600] text-[16px]">
                        Languages:{' '}
                        <span className={`text-[16px] font-[600] ${mode.span}`}>
                          {Object.values(item.languages)
                            .map((lang) => {
                              return lang;
                            })
                            .join(', ')}
                        </span>
                      </p>
                    </div>
                  </div>
                  {item.borders ? (
                    <div className='flex gap-2 flex-wrap items-center w-full'>
                      <p className="font-[600] text-[16px] ">
                        Bordering Countries:
                      </p>
                      {item.borders.map((border, index) => (
                        <Link key={index} to={`/${border}`} className={`py-1 px-4 shadow-md font-[600] rounded-[5px] ${mode.elements}`}>
                          <p>{border}</p>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>)
              : (
                <NoDetails />
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
