import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PURGE, FLUSH, PAUSE, PERSIST, REHYDRATE } from 'redux-persist'
import storage from'redux-persist/lib/storage'

import TeamsCompanySlice from "./TeamsCompanySlice/TeamsCompanySlice"
import PropertiesSlice from "./PropertiseSlice/PropertiseSlice"
import AuthSlice from "./AuthSlice/AuthSlice"

const persistRootConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}

const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ["user", "accessToken"]
}

const rootReducer = combineReducers({
    teamGrope: TeamsCompanySlice,
    properties: PropertiesSlice,
    auth : persistReducer(persistAuthConfig, AuthSlice)
})

const persistorsReducer = persistReducer(persistRootConfig, rootReducer)


export const store = configureStore({
    reducer: persistorsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
        }
    })
})


export const persistorsStore = persistStore(store)



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch