import { apiSlice } from "../api/apiSlice";

export const feedbackApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFeedbacks: builder.query({
			query: (id) => `/feedbacks?photoId_like=${id}`,
		}),
		postFeedback: builder.mutation({
			query: ({id, data}) => ({
				url: `/feedbacks`,
				method: "POST",
				body: data,
			}),
			async onQueryStarted (arg, {queryFulfilled, dispatch}) {
				try{
					const newFeedback = await queryFulfilled;

					if(newFeedback?.data?.id) {
						dispatch(
							apiSlice.util.updateQueryData(
								"getFeedbacks",
								arg.id,
								(draft) => {
									draft.push(newFeedback?.data)
								} 
							)
						)
					}
				} catch(e){}
			}
		}),
	}),
});

export const { usePostFeedbackMutation, useGetFeedbacksQuery } = feedbackApi;
