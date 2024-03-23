

import Container from '../../components/ui/Containert'
import GalleryCard, { IImg } from '../Gallery/GalleryCard'
import { useGalleryQuery } from '../../redux/gallery/galleryApi'
import { NavLink } from 'react-router-dom'
import { scrollToTop } from '../../utils/utils'
import SectionHeader from '../../utils/SectionHeader'
const HomeGallery = () => {
      const {data,isLoading}=useGalleryQuery("");
      // console.log(data)
if(isLoading){
      return <div>Loading...</div>
}
  return (
  <div className=' py-10'>
<SectionHeader text='SNAPS from our ACTIVITIES' className='text-center py-4'/>
        <Container className='galleryBg grid lg:grid-cols-5 grid-cols-2 gap-2 '>

     {
      data?.data.slice(0,10).map((img:IImg)=>
      ( <GalleryCard className="rounded-ss-lg rounded-ee-lg" img={img}></GalleryCard>))
     }
      
    </Container>
    <div className="flex justify-center">
        <NavLink
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-slate-500 text-lg text-black  hover:text-white rounded-md px-2 py-1 my-4 duration-500"
          to={"/gallery"}
        >
          See All
        </NavLink>
      </div>
  </div>
  )
}

export default HomeGallery