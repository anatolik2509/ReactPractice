import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    pageList: [{ id: 0, name: 'fuck you', blocks: [{ id: 0, type: 'text', data: {}}, { id: 1, type: 'image', data: {}}] }]
}

export const pagesSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addPage: (state, action) => {
            state.pageList.push({id: state.pageList.length, name: action.payload});
        },
        addBlock: (state, action) => {
            const { pageId, type } = action.payload;
            const pages = state.pageList;
            const page = pages[pageId];
            page.blocks.push({ id: 3, type, data: {} })
        }
    }
});

export const { addPage, addBlock } = pagesSlice.actions;

export const getPages = (state) => {
    return state.pages.pageList;
};

export const store = configureStore({
    reducer: {
        pages: pagesSlice.reducer
    }
});


