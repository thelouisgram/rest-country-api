import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import Error from './pages/Error'

const App = () => {
  return (
   <main>
      <Routes>
        <Route exact path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/:code' element={<CountryDetail />} />
          <Route path='/*' element={<Error />}/>
        </Route>
      </Routes>
  </main>
  )
}

export default App
