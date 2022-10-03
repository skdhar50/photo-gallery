import { apiSlice } from "../api/apiSlice";

export const photoApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPhotos: builder.query({
			query: () => "/photos",
		}),
		getPhoto: builder.query({
			query: (id) => `/photos/${id}`,
		}),
	}),
});

export const { useGetPhotosQuery, useGetPhotoQuery } = photoApi;
