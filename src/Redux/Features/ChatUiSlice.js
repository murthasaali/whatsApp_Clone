import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../Datas/dummyChatLists';

const chatuiSlice = createSlice({
  name: 'chatui',
  initialState: {
    sidebarButton: "chats",
    chatUiContent:{},
    theme:"dark",
  },
  reducers: {
    updateSidebarButton: (state, action) => {
      state.sidebarButton = action.payload;
    },
    updateChatUiContent:(state,action) => {
        state.chatUiContent = action.payload
    },
    updateTheme: (state,action)=>{
      state.theme = action.payload
    }
  },
});

export const { updateSidebarButton,updateChatUiContent,updateTheme } = chatuiSlice.actions;
export default chatuiSlice.reducer;