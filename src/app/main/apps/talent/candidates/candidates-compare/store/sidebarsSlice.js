import { createSlice } from '@reduxjs/toolkit';

const sidebarsSlice = createSlice({
	name: 'chatApp/sidebars',
	initialState: {
		mobileChatsSidebarOpen: false,
		filterSidebarOpen: false,
		contactSidebarOpen: false
	},
	reducers: {
		openMobileChatsSidebar: (state, action) => {
			state.mobileChatsSidebarOpen = true;
		},
		closeMobileChatsSidebar: (state, action) => {
			state.mobileChatsSidebarOpen = false;
		},
		openFilterSidebar: (state, action) => {
			state.filterSidebarOpen = true;
		},
		closeFilterSidebar: (state, action) => {
			state.filterSidebarOpen = false;
		},
		openContactSidebar: (state, action) => {
			state.contactSidebarOpen = true;
		},
		closeContactSidebar: (state, action) => {
			state.contactSidebarOpen = false;
		}
	}
});

export const {
	openMobileChatsSidebar,
	closeMobileChatsSidebar,
	openFilterSidebar,
	closeFilterSidebar,
	openContactSidebar,
	closeContactSidebar
} = sidebarsSlice.actions;

export default sidebarsSlice.reducer;
