import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FAMILY } from '../Styles/ConstantStyle';
import girl from '../assets/megaGirl.webp';
import { megaMenuAllData } from '../constantMapData';

const MegaMenuAll = () => {
    const [megatData, setMegaData] = useState(megaMenuAllData)
  return (
    <>
 <Grid container sx={{height:"100%"}}>
                                <Grid item lg={2} md={0} ></Grid>
                                <Grid item lg={2} md={3} sx={{}}>
                                    
                                        
                                        <Box sx={{ height:"400px",backgroundImage:`url(${girl})`,cursor: "pointer",display: "flex", alignItems: "center",justifyContent:"flex-end", flexDirection: "column", width: "100%",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat" }}>
                                            <Typography sx={{ color: "white", letterSpacing: "-1px", fontSize: "15px", fontWeight: "600", fontFamily: FAMILY }}>
                                                PERFECT YOURSELF STYLE
                                            </Typography>
                                            <Button sx={{ mt: "10px",mb:"20px", width: "130px", fontSize: "12px", letterSpacing: "-1px", fontWeight: "800", fontFamily: FAMILY, backgroundColor: "white", color: "black", "&:hover": { bgcolor: "white" } }}>
                                                SHOP COLLECTION
                                            </Button>
                                        
                                    </Box>
                                </Grid>
                                {
                                    megatData.map((ele) => {
                                        return (
                                            <Grid  item lg={2.5} sx={{ ml: "10px" }}>
                                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", pl: "20px" }}>
                                                    <Typography sx={{ fontSize: "17px", fontWeight: "700", fontFamily: FAMILY }}>{ele.mainHead}</Typography>
                                                    {
                                                        ele.listData.map((ele) => {
                                                            return (
                                                                <>
                                                                    <Typography sx={{ cursor: "pointer", fontSize: "13px", fontWeight: "500", fontFamily: FAMILY, color: "#54595F", mt: "5px" }}>{ele}</Typography>

                                                                </>

                                                            )
                                                        })
                                                    }

                                                    <Box sx={{ width: "100%", mt: "10px", bgcolor: "#e0e0e0", p: "15px", borderRadius: "3px", cursor: "pointer" }}>
                                                        <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "Center", fontSize: "12px", fontWeight: "600", fontFamily: FAMILY, letterSpacing: "-1px" }}><EmailOutlinedIcon sx={{ fontSize: "18px", mr: "5px" }} />EMAIL:INFO@THEVIBZZ.COM</Typography>
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

export default MegaMenuAll