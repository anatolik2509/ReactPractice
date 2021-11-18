import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {
    pageList: [{ id: 0, name: 'fuck you', blocks: [{ id: 0, type: 'text', data: {}}, { id: 1, type: 'table', data: {}}] }]
}

export const pagesSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addPage: (state, action) => {
            state.pageList.push({id: state.pageList.length, name: action.payload});
        },
    }
});

export const { addPage } = pagesSlice.actions;

export const getPages = (state) => {
    return state.pages.pageList;
};

export const store = configureStore({
    reducer: {
        pages: pagesSlice.reducer
    }
});


