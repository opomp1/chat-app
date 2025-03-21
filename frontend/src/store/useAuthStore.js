import { create } from "zustand";
import { io } from "socket.io-client";

import { axiosInstanace } from "../lib/axios";
import toast from "react-hot-toast";
import handleApiError from "../utils/handleApiError";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLogginIn: false,
  isUpdatingProfile: false,
  onlineUsers: [],
  socket: null,

  isCheckingAuth: true,

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, { query: { userId: authUser._id } });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connect) get().socket.disconnect();
  },

  checkAuth: async () => {
    try {
      const res = await axiosInstanace.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
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

      set({ authUser: res.data });
      get().connectSocket();

      toast.success("Account created successfully");
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
      get().connectSocket();

      toast.success("Login successfully");
    } catch (error) {
      handleApiError(error);
    } finally {
      set({ isLogginIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstanace.post("/auth/logout");
      set({ authUser: null });
      get().disconnectSocket();

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
