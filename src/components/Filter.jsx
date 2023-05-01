import { useSelector, useDispatch } from 'react-redux';
import color from "../style"
import { toggleFilter } from '../store/filterSlice';

const Filter = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const filter = useSelector((state) => state.filter.filter);
    const mode = darkMode ? color.dark : color.light;
    const dispatch = useDispatch()

    const handleFilter = () => {
        dispatch(toggleFilter())
    }

  return (
    <div>
          <div 
               onClick={handleFilter} 
               className={`flex items-center ${mode.text} rounded-[5px] justify-between w-[175px] px-4 py-3 shadow-md
               text-[14px] font-[600] ${mode.elements} relative mb-1 cursor-pointer`}>
            <p>Filter by Region</p>
            <span className="material-symbols-outlined">
            expand_more
            </span>
        </div>
        {filter && 
              <div className={`absolute ${mode.text} rounded-[5px] px-4 py-3 flex flex-col 
               gap-2 shadow-md w-[175px] z-[3] text-[14px] font-[600] ${mode.elements}`}>
                  <p data-value="Asia">Asia</p>
                  <p data-value="Africa">Africa</p>
                  <p data-value="Oceania">Oceania</p>
                  <p data-value="Americas">Americas</p>
                  <p data-value="Europe">Europe</p>
        </div>}
    
    </div>
  )
}

export default Filter
