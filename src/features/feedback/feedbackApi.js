import { apiSlice } from "../api/apiSlice";

export const feedbackApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		postFeedback: builder.mutation({
			query: (data) => ({
				url: `/feedbacks`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { usePostFeedbackMutation } = feedbackApi;
