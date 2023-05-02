import Country from "../components/Country";
import Filter from "../components/Filter"
import Search from "../components/Search"
import color from "../style"
import { useSelector } from 'react-redux';


const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? color.dark : color.light;

  return (
    <>
    <section className={`h-screen-16 ${mode.background} font-Nunito`}>
      <div className={`${mode.background} h-auto`}>
      <div className={`w-[1180px] mx-auto pt-12`}>
        <div className="flex justify-between items-start">
          <Search />
          <Filter />
        </div>
        <Country />
      </div>
        </div>
    </section>
    </>
  )
}

export default Home
