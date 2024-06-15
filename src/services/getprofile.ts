import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../schemas";

export const getprofile = createApi({
	reducerPath: "getprofile",
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}`, 
		headers: {
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			"Content-Type": "application/json",
		},
	}),
	endpoints: (builder) => ({
		getProfile: builder.query<User, void>({
			query: () => "/user/v.1/profile", // fetch endpoint here
		}),
		// getCommentById: builder.query<CommentDetail, number>({
		// 	query: (id) => ({
		// 		url: `comments/${id}`,
		// 	}),
		// }),
	}),
});

export const { useGetProfileQuery } = getprofile;
