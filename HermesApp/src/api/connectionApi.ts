import apiClient from "./apiClient";

export const apiListConnections = async (page = 1, limit = 20) => {
  const { data } = await apiClient.get(
    `/user/connections?page=${page}&limit=${limit}`
  );
  return data;
};

export const apiSendConnectionRequest = async (receiverId: string) => {
  const { data } = await apiClient.post("/user/connections/request", {
    receiverId,
  });
  return data;
};

export const apiRemoveConnection = async (targetUserId: string) => {
  const { data } = await apiClient.delete("/user/connections/remove", {
    data: { targetUserId },
  });
  return data;
};
