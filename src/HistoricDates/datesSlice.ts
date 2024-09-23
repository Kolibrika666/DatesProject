import { asyncThunkCreator, buildCreateSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
    isActive: boolean;
};

const initialState: IState = {
    isActive: false,
};

export const buildAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

export const datesSlice = buildAppSlice({
    name: 'date',
    initialState,
    reducers: creator => ({
        setIsActive: creator.reducer((state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        }), 
    }),
    selectors: {
        isActive: state => state.isActive,
    }
});

export const datesReducer = datesSlice.reducer;
export const datesActions = datesSlice.actions;
export const datesSelectors = datesSlice.selectors;