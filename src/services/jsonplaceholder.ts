import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Comment, CommentDetail } from "../schemas";

export const JsonPlaceHolderApi = createApi({
	reducerPath: "jsonPlaceholderAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/", //base url
	}),
	endpoints: (builder) => ({
		getComments: builder.query<Comment[], void>({
			query: () => "comments", // fetch endpoint here
		}),
		getCommentById: builder.query<CommentDetail, number>({
			query: (id) => ({
				url: `comments/${id}`,
			}),
		}),
	}),
});

export const { useGetCommentsQuery, useGetCommentByIdQuery } = JsonPlaceHolderApi;
