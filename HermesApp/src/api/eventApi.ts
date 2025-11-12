import apiClient from "./apiClient";

export type Event = {
  id: string;
  title: string;
  description?: string;
  date_time_start?: string;
  date_time_end?: string;
  location?: string;
  event_img_url?: string;
  owner_id?: string;
  community_id?: string;
};

export const apiCreateEvent = async (payload: Partial<Event>) => {
  const { data } = await apiClient.post("/event/", payload);
  return data;
};

export const apiDeleteEvent = async (eventId: string) => {
  const { data } = await apiClient.delete(`/event/${eventId}`);
  return data;
};

export const apiApplyForEvent = async (eventId: string) => {
  const { data } = await apiClient.post(`/event/${eventId}/apply`);
  return data;
};

export const apiCancelApplication = async (eventId: string) => {
  const { data } = await apiClient.delete(`/event/${eventId}/apply`);
  return data;
};

export const apiGetUserEvents = async () => {
  const { data } = await apiClient.get(`/events/my`);
  return data;
};

export const apiGetCommunityEvents = async (communityId: string) => {
  const { data } = await apiClient.get(`/events/community/${communityId}`);
  return data;
};
