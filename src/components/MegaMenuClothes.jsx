import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { megaMenuClothesData } from '../constantMapData'
import { FAMILY } from '../Styles/ConstantStyle'

const MegaMenuClothes = () => {
    const [ data,setData]=useState(megaMenuClothesData)
    
  return (
    <>
        <Grid container sx={{justifyContent:"center"}}>
        {
            data.map((ele)=>{
                return(
                    <Grid  item lg={2.5} md={3} sx={{height: "100%" ,pt:"7px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                       <Box sx={{width:{lg:"262px",md:"240px"},cursor:"pointer",height: "100%" ,}}>
                         <Box sx={{}}>
                           <img src={ele.img} height="254px" width="100%"/>
                         </Box>
                         <Box >
                            <Typography align='center' sx={{fontSize:"15px",fontWeight:"800",fontFamily:FAMILY,mt:"8px"}}>
                            {ele.title}
                            </Typography>
                       </Box>
                       </Box>
                      
                    </Grid>
                )
            })
        }
           
        </Grid>
    </>
  )
}

export default MegaMenuClothes