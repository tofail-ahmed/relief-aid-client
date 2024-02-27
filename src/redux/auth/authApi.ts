import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (info) => ({
        url: "/register",
        method: "POST",
        body: info
      })
    }),
    login: builder.mutation({
      query: (info) => ({
        url: "/login",
        method: "POST",
        body: info
      })
    })
  })
});
export const {useLoginMutation,useRegisterMutation}=authApi;