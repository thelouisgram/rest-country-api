import color from "../style"
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../features/countries/countriesSlice';

const Search = () => {
  const {searchTerm} = useSelector((state) => state.country)
    const darkMode = useSelector((state) => state.theme.darkMode);
    const mode = darkMode ? color.dark : color.light;
    const dispatch = useDispatch()

    const handleInputValueChange = (e) => {
      dispatch(setSearchTerm(e.target.value.toLowerCase()))
    }

  return (
    <div className={`flex items-center rounded-[5px] gap-4 px-6 py-3 w-full ss:w-[400px] font-Nunito shadow-md
         ${mode.elements}`}>
          <span className={`material-symbols-outlined ${mode.text}`}>
              search
          </span>
      <input 
              className={`bg-transparent text-[14px] font-[600] outline-none w-full ${mode.text}`}
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleInputValueChange}/>
    </div>
  )
}

export default Search
