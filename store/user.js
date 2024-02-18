import { create } from "zustand";

const userStore = create((set) => ({
  user: {},
  add_user: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userToken", token);
  },
}));

export { userStore };
