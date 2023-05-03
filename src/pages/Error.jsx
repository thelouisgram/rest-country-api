import { Link } from 'react-router-dom';
import color from '../style';
import { useSelector } from 'react-redux'

const Error = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const mode = darkMode ? color.dark : color.light;
  return (
    <section className={`h-screen-16 ${mode.background} font-Nunito ${mode.text}`}>
      <div className={`w-[1180px] mx-auto pt-12`}>
        <Link
          to="/"
          className={`flex gap-2 justify-center py-1 ${mode.elements} rounded-[5px] w-[125px]
          shadow-md`}
        >
          <span className="material-symbols-outlined">keyboard_backspace</span>
          <p>Back</p>
        </Link>
        </div>
        </section>
  )
}

export default Error
