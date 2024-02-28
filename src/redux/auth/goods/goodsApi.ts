import { baseApi } from "../../baseApi";

const goodsApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            goods:builder.query({
                  query:()=>({
                        url:"/goods",
                        method:"GET"
                  })
            }),
            singleGood:builder.query({
                  query:(id)=>({
                        url:`/goods/${id}`,
                        method:"GET"
                  })
            })
      })
})
export const {useGoodsQuery,useSingleGoodQuery}=goodsApi;