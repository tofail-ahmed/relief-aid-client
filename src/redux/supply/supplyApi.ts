import { baseApi } from "../baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    supply: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
        
      }),
     providesTags:["supplies"]
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
      invalidatesTags:["supplies"]
    
    }),
    deleteSupply:builder.mutation({
      query:(id)=>({
        url:`/supplies/${id}`,
        method:"DELETE"
      }),
      invalidatesTags:["supplies"]
    })
  }),
});
export const {useSupplyQuery,useSingleSupplyQuery,useCreateSupplyMutation,useDeleteSupplyMutation}=supplyApi;