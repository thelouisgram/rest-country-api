import { useSelector } from 'react-redux';
import color from "../style"

const Search = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const mode = darkMode ? color.dark : color.light;

  return (
    <div className={`flex items-center rounded-[5px] gap-4 px-6 py-3  w-[400px] font-Nunito shadow-md
         ${mode.elements}`}>
          <span className={`material-symbols-outlined ${mode.input}`}>
              search
          </span>
      <input 
              className={`bg-transparent text-[14px] font-[600] outline-none w-full ${mode.input}`}
        placeholder="Search for a country..."/>
    </div>
  )
}

export default Search
