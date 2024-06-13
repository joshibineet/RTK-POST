import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bookService } from '../services/bookService';

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            [bookService.reducerPath]: bookService.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(bookService.middleware),
    });

    setupListeners(store.dispatch);

    return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
