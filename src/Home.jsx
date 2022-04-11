import { useState } from 'react'

import { Header } from './components/Header/Header'
import { Controls } from './components/Controls/Controls'
import { Countries } from './components/Countries/Countries'

import { Main } from './styleComponents/Basic/Main.styled'


export const Home = () => {
  const [term, setTerm] = useState('')


  return (
    <>
      <Header />
      <Main >
        <Controls setTerm={setTerm}/>
        <Countries term={term}/> 
      </Main>
    </>
  )
}
