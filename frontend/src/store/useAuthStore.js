import { create } from "zustand";
import { axiosInstanace } from "../lib/axios";
import toast from "react-hot-toast";
import handleApiError from "../utils/handleApiError";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLogginIn: false,
  isUpdatingProfile: false,
  onlineUsers: [],

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstanace.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth: ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstanace.post("/auth/signup", data);
      toast.success("Account created successfully");
      set({ authUser: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLogginIn: true });
    try {
      const res = await axiosInstanace.post("/auth/login", data);

      set({ authUser: res.data });
      toast.success("Login successfully");
    } catch (error) {
      handleApiError(error);
    } finally {
      set({ isLogginIn: false });
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstanace.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out sucessfully!");
    } catch (error) {
      handleApiError(error);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstanace.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully!");
    } catch (error) {
      handleApiError(error);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
