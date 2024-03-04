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
    }),
    createSupply:builder.mutation({
      query:(body)=>({
        url:"/supplies",
        method:"POST",
        body
      }),
     
    })
  }),
});
export const {useSupplyQuery,useSingleSupplyQuery,useCreateSupplyMutation}=supplyApi;