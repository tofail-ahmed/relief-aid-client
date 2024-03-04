import { baseApi } from "../baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    supply: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
    singleSupply:builder.query({
      query:(id)=>({
        url:`/supplies/${id}`,
        method:"GET"
      })
    })
  }),
});
export const {useSupplyQuery,useSingleSupplyQuery}=supplyApi;