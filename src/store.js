import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // [userApiSlice.reducerPath]: userApiSlice.reducer,
        // user: userReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([
            // userApiSlice.middleware,
        ]);
    },
});
