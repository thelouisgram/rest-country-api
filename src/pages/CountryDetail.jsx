import color from '../style';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { searchByCode } from '../features/countries/countriesAction';
import { reset } from '../features/countries/countriesSlice'
import Loading from '../components/Loading'

const CountryDetail = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? color.dark : color.light;
  const {loading, countrySearched } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  const item = countrySearched[0];

  useEffect(() => {
    dispatch(reset());

    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }
  }, [dispatch, code]);

  return (
    <section className={`h-screen-16 ${mode.background} font-Nunito ${mode.text}`}>
      <div className={`${mode.background} h-auto`}>
      <div className={`w-[1180px]  mx-auto py-12`}>
        <Link
          to="/"
          className={`flex gap-2 justify-center py-1 ${mode.elements} rounded-[5px] w-[125px]
          shadow-md`}
        >
          <span className="material-symbols-outlined">keyboard_backspace</span>
          <p>Back</p>
        </Link>
        <div className="pt-12">
          {loading ? (
            <Loading /> 
          ) : countrySearched.length > 0 ?
            (<div className="flex items-center">
              <div className="w-[600px] flex justify-start">
                <img src={item.flags.svg} className="w-[500px] h-auto object-cover shadow-md" />
              </div>
              <div className="flex flex-1 flex-col">
                <h1 className="font-[600] text-[24px] mb-6">{item.name.common}</h1>
                <div className="flex justify-between gap-3 mb-8">
                  <div className="flex flex-col gap-2">
                    <p className="font-[600] text-[16px]">
                      Official Name:{' '}
                      <span className="text-[16px] font-[300]">{item.name.official}</span>
                    </p>
                    <p className="font-[600] text-[16px]">
                      Population:{' '}
                      <span className="text-[16px] font-[300]">
                        {item.population.toLocaleString()}
                      </span>
                    </p>
                    <p className="font-[600] text-[16px]">
                      Region: <span className="text-[16px] font-[300]">{item.region}</span>
                    </p>
                    <p className="font-[600] text-[16px]">
                      Sub Region: <span className="text-[16px] font-[300]">{item.subregion}</span>
                    </p>
                    <p className="font-[600] text-[16px]">
                      Capital: <span className="text-[16px] font-[300]">{item.capital}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-[600] text-[16px]">
                      Top Level Domain: <span className="text-[16px] font-[300]">{item.tld}</span>
                    </p>
                    <p className="font-[600] text-[16px]">
                      Currencies:{' '}
                      <span className="text-[16px] font-[300]">
                        {Object.values(item.currencies)
                          .map((currency) => {
                            return currency.name;
                          })
                          .join(', ')}
                      </span>
                    </p>
                    <p className="font-[600] text-[16px]">
                      Languages:{' '}
                      <span className="text-[16px] font-[300]">
                        {Object.values(item.languages)
                          .map((lang) => {
                            return lang;
                          })
                          .join(', ')}
                      </span>
                    </p>
                  </div>
                </div>
                  <div className='flex gap-2 flex-wrap items-center w-full'>
                  <p className="font-[600] text-[16px] ">
                    Bordering Countries:
                  </p>
                  {Object.values(item.borders).map((border, index) => (
                    <Link key={index} to={`/${border}`} className={`py-1 px-4 shadow-md font-[600] rounded-[5px] ${mode.elements}`}>
                      <p>{border}</p>
                    </Link>
                  ))}
                </div>
                </div>
              </div>)
              : (
              <div>No Details Found</div>
              )}
        </div>
      </div>
      </div>
    </section>
  );
};

export default CountryDetail;
