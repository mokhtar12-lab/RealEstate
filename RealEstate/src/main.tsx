import { createRoot } from 'react-dom/client'
import RouteApp from './Tools/Router/RouteApp'

import { persistorsStore } from "./Tools/Store/Store" 
import { store } from "./Tools/Store/Store"

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


import "./tailwind.css"
createRoot(document.getElementById('root')!).render(
    // <RouteApp />
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistorsStore}>
            <RouteApp />
        </PersistGate>
    </Provider>
)
