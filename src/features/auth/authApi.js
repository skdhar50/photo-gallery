import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;

					localStorage.setItem(
						"auth",
						JSON.stringify({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);

					dispatch(
						userLoggedIn({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);
				} catch (e) {}
			},
		}),
		register: builder.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;

					localStorage.setItem(
						"auth",
						JSON.stringify({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);

					dispatch(
						userLoggedIn({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);
				} catch (e) {
					// Some error occurred
				}
			},
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
