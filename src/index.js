import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home'

import { Global } from "./styleComponents/Global/Global.styled"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Global />
        <Home />
    </>
)



