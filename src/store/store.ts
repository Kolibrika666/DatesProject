import { configureStore } from "@reduxjs/toolkit"
import { datesReducer } from "../HistoricDates/datesSlice";

export const store = configureStore({
    reducer: {
        date: datesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true, serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
