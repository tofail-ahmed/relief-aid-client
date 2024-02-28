import React from 'react'
import img1 from '../../assets/banner-2.jpg'
import img2 from '../../assets/banner-4.jpg'
import img3 from '../../assets/banner-5.jpg'
import Container from '../../components/ui/Containert'
import GalleryCard from './GalleryCard'
const Gallery = () => {
  return (
    <Container className='grid grid-cols-3'>
      <GalleryCard img={img1}></GalleryCard>
      <GalleryCard img={img2}></GalleryCard>
      <GalleryCard img={img3}></GalleryCard>
    </Container>
  )
}

export default Gallery