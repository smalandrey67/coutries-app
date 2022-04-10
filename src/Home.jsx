import { Header } from './components/Header/Header'
import { Controls } from './components/Controls/Controls'

import { Main } from './styleComponents/Basic/Main.styled'

export const Home = () => {
  return (
    <>
      <Header />
      <Main >
        <Controls />
      </Main>
    </>
  )
}
