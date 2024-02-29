import { baseApi } from "../baseApi";

const testimonialApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            testimonial:builder.query({
                  query:()=>({
                        url:'/testimonials',
                        method:"GET"
                  })
            })
      })
})

export const {useTestimonialQuery}=testimonialApi;