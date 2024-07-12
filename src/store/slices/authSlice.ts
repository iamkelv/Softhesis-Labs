import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    phone: '+2348060684357',
  },
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state) {
      state.isLogged = true;
    },
    setLogout(state) {
      state.isLogged = false;
    },
    setUser(state, { payload }) {
      state.userProfile.firstName = payload?.firstName;
      state.userProfile.lastName = payload?.lastName;
      state.userProfile.email = payload?.email;
      state.userProfile.phone = payload?.phone;
    },
  },
});

export const { setLogin, setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
