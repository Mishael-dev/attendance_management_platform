import { create } from "zustand";

const userStore = create((set) => ({
  user: {},
  add_user: (user, token) => {
    localStorage.setItem("userToken", token);
    set({ user });
  },
}));

export { userStore };
