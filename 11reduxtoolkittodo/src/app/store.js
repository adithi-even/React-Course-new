import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

// /and the store doesn't take the values from anyone and get updated ,  coz its an restricted store and it will only update the value if the store is aware of the reducers if its not aware of the reducers then the store cannot able to maintain itself and store also says that whichever the reducers get registered inside of the store , it only updates those reducers value . that is the reason the store wants the list of all the reducers(so we import all the reducers into the store file )

export const store = configureStore({
    reducer: todoReducer
})

