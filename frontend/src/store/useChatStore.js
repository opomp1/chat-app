import { create } from "zustand";

import { axiosInstanace } from "../lib/axios";
import handleApiError from "../utils/handleApiError";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessageLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });

    try {
      const res = await axiosInstanace.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      handleApiError(error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const res = await axiosInstanace.get(`messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      handleApiError(error);
    } finally {
      set({ isMessageLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstanace.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      handleApiError(error);
    }
  },

  //   todo:optimize later
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
