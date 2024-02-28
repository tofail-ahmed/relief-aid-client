import { baseApi } from "../baseApi";

const galleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
      gallery:builder.query({
            query:()=>({
                  url:"/galleries",
                  method:"GET"
            })
      })
  })
});
export const {useGalleryQuery}=galleryApi;
