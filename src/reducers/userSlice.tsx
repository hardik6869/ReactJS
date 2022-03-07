import {configureStore} from '@reduxjs/toolkit';

import {api} from '../components/User/Data/usersAPI';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
