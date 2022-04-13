import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { CatchError } from './hoc/catchError'

import { MainPage } from './pages/Main/Main'
import { DetailsPage } from './pages/Details/Details'
import { NotFoundPage } from './pages/NotFound/NotFound'

export const Home = () => {

  return (
    <CatchError>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/country/:name' element={<DetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </CatchError>
  )
}
