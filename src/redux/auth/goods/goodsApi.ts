import { baseApi } from "../../baseApi";

const goodsApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            goods:builder.query({
                  query:()=>({
                        url:"/goods",
                        method:"GET"
                  })
            })
      })
})
export const {useGoodsQuery}=goodsApi;