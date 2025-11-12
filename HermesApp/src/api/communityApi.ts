import apiClient from "./apiClient";

export type Community = {
  id: string;
  name: string;
  description?: string;
  owner_id?: string;
  created_at?: string;
};

export const apiListUserCommunities = async () => {
  const { data } = await apiClient.get(`/community/my`);
  return data;
};

export const apiCreateCommunity = async (name: string, description: string) => {
  const { data } = await apiClient.post("/community", { name, description });
  return data;
};

export const apiGetCommunity = async (communityId: string) => {
  const { data } = await apiClient.get(`/community/${communityId}`);
  return data;
};
