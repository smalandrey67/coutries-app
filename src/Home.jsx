import { Header } from './components/Header/Header'

import { MainPage } from './pages/MainPage'
import { DetailsPage } from './pages/DetailsPage'
import { NotFound } from './pages/NotFoundPage'


export const Home = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}
