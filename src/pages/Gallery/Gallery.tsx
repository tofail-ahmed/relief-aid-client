

import Container from '../../components/ui/Containert'
import GalleryCard, { IImg } from './GalleryCard'
import { useGalleryQuery } from '../../redux/gallery/galleryApi'
const Gallery = () => {
      const {data,isLoading}=useGalleryQuery("");
      console.log(data)
if(isLoading){
      return <div>Loading...</div>
}
  return (
  <div className='galleryBg'>
        <Container className='grid lg:grid-cols-5 grid-cols-2 gap-2 '>
     {
      data?.data.map((img:IImg)=>
      ( <GalleryCard img={img}></GalleryCard>))
     }
      
    </Container>
  </div>
  )
}

export default Gallery