import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Home } from './Home'
import { Global } from "./styleComponents/Global/Global.styled"

import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Global />
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>
)



