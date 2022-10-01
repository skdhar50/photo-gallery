import { apiSlice } from "../api/apiSlice";

export const photoApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPhotos: builder.query({
			query: () => "/photos",
		}),
	}),
});

export const { useGetPhotosQuery } = photoApi;
