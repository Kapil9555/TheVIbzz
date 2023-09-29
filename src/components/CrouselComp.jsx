import { Box } from '@mui/material'
import React from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import hero1 from '../assets/heroCrousel1.jpg'
import hero2 from '../assets/heroCrousel2.jpg'
import hero3 from '../assets/heroCrousel3.jpg'


const CrouselComp = () => {

    const images=[{
        silde:hero1,
        caption:"Slide 1"
    },
    {
        silde:hero2,
        caption:"Slide 2"
    },
    {
        silde:hero3,
        caption:"Slide 3"
    },
  

]

    const proprietes = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: true,
        
        
    }
    
  return (
    <>
        <Box sx={{}}>
        <Slide {...proprietes}>
          {
            images.map((ele,index)=>(
                <Box key={index}>
                  <Box sx={{backgroundImage:`url(${ele.silde})`,display:"flex",alignItems:"center",justifyContent:"center",height:{lg:"550px",md:"400px",sm:"350px",xs:"270px"},backgroundSize:"100% 100%"}}>
                     
                  </Box>
                </Box>
            ))
          }
         
       </Slide>
        </Box>
    </>
  )
}

export default CrouselComp