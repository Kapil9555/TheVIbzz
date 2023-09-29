
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { globalContext } from './Global/VibzContext';
import { FAMILY, GRAY_TYPO, SALE_COLOR, THEME_COLOR } from './Styles/ConstantStyle';
import Header from './components/Header';
import MegaMenu from './components/MegaMenu';
import CrouselComp from './components/CrouselComp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { MW, MensFormalShirt, WomensHalfSleeves, coupleData, megaMenuList, newArrivalProducts } from './constantMapData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './HomePage.css'
import b6 from './assets/b1-1.png'
import b3 from './assets/b3-scaled.jpg'
import b5 from './assets/b5-scaled.jpg'
import Footer from './components/Footer';





const HomePage = () => {
    const [newArrival, setNewArrival] = useState(newArrivalProducts)
    const [couplesData, setCouplesData] = useState(coupleData)
    const [woHalf, setWoHalf] = useState(WomensHalfSleeves)
    const [menFormalShirt, setMenFormalShirt] = useState(MensFormalShirt)
    const [menWo, setMenWo] = useState(MW)

    const [cardShow, setCardShow] = useState("")


   

    const handleNewArrivalCardShow = (ele) => {
        setCardShow(ele)
    }

    const handleNewArrivalCardRemove = () => {
        setCardShow("")
    }


    const proprietes = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: true,
    }

    // console.log(MW)

    return (
        <>
            <Container maxWidth={'xl'} disableGutters>
                <Grid Container>
                    <Grid  item xs={12} sx={{}}>
                        <Header />
                    </Grid>
                    
                    <Grid item xs={12} sx={{mt:"165px" }}>
                        <CrouselComp />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "100%", xs: "100%" } }}>
                            <Box>
                                <Typography sx={{ ml: "15px", fontSize: "20px", fontWeight: "900", color: "#6EC1E4", fontFamily: FAMILY }}>
                                    Mens,s Half sleeve
                                </Typography>
                                <Typography sx={{ ml: "15px", color: GRAY_TYPO, fontFamily: FAMILY, fontSize: "15px" }}>
                                    New Arrivals – Check out our latest products!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>



                    {/* NEW ARRIVAL  SECTION */}

                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                            {
                                newArrival.map((ele) => {
                                    return (
                                        <Box sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" } }} onMouseEnter={() => { handleNewArrivalCardShow(ele.title) }} onMouseLeave={handleNewArrivalCardRemove}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px" } }}>

                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "270px", xs: "230px" }, position: "relative", backgroundImage: `url(${ele.image})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", width: "100%", position: "relative" }}>
                                                    <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>

                                                    <Box sx={{ display: cardShow == ele.title ? "block" : "none", p: { lg: "20px", md: "17px", sm: "15px", xs: "13px" }, height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} >QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", fontFamily: FAMILY }}>
                                                        <b>{ele.title}</b>

                                                    </Typography>
                                                    <Typography align='center' sx={{ fontSize: "14px", mt: "7px" }}>
                                                        <span style={{ color: GRAY_TYPO, marginRight: "5px" }}><s>{ele.orgPrice}</s></span>{ele.discPrice}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", mt: "7px", p: "0px 8px" }}>
                                                    <Box style={{ border: `1px solid #e0e0e0`, display: "flex" }}>
                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon /></Box>
                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                        <Box sx={{ height: "30px", width: "40px", ontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon /></Box>
                                                    </Box>
                                                    <Box sx={{ bgcolor: "#e0e0e0", height: "30px", width: "40px", ml: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}><ShoppingBagOutlinedIcon sx={{ fontWeight: "100", fontSize: "18px" }} /></Box>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    )
                                })
                            }

                        </Box>
                    </Grid>


                    {/* coupels collection */}


                    <Grid item xs={12} sx={{ mt: "30px" }}>
                        <Box >
                            <Typography align='center' sx={{ color: THEME_COLOR, fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "20px" }, fontFamily: FAMILY }}>
                                COUPLES COLLECTIONS
                            </Typography>
                            <Typography align='center' sx={{ color: THEME_COLOR, fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "14px" }, fontFamily: FAMILY }}>
                                New Arrivals – Check out our latest products!
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>

                            <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                                {
                                    couplesData.map((ele) => {
                                        return (
                                            <Box sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" } }} onMouseEnter={() => { handleNewArrivalCardShow(ele.title) }} onMouseLeave={handleNewArrivalCardRemove}>
                                                <Paper sx={{ width: "fit-content", pb: "10px", position: "relative", width: { lg: "270px", md: "230px", sm: "200px" } }}>
                                                    <Box sx={{ display: cardShow == ele.title ? "block" : "none", p: "20px", height: "100%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "70%" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ mt: "10px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: " .85rem", bgcolor: THEME_COLOR }} fullWidth>QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ height: { lg: "350px", md: "320px", sm: "270px", xs: "230px" }, backgroundImage: `url(${ele.image})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", width: "100%", position: "relative" }}>
                                                        <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                            <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                        </span>

                                                    </Box>
                                                    <Box>
                                                        <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "6px" }, fontWeight: "900", fontFamily: FAMILY }}>
                                                            <b>{ele.title}</b>

                                                        </Typography>
                                                        <Typography align='center' sx={{ fontSize: "14px", mt: "7px" }}>
                                                            <span style={{ color: GRAY_TYPO, marginRight: "5px" }}><s>{ele.orgPrice}</s></span>{ele.discPrice}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: "flex", justifyContent: "center", mt: "7px", p: "0px 8px" }}>
                                                        <Box style={{ border: `1px solid #e0e0e0`, display: "flex" }}>
                                                            <Box sx={{ height: "30px", width: "40px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon /></Box>
                                                            <Box sx={{ height: "30px", width: "40px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                            <Box sx={{ height: "30px", width: "40px", ontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon /></Box>
                                                        </Box>
                                                        <Box sx={{ bgcolor: "#e0e0e0", height: "30px", width: "40px", ml: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}><ShoppingBagOutlinedIcon sx={{ fontWeight: "100", fontSize: "18px" }} /></Box>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        )
                                    })
                                }

                            </Box>
                        </Box>
                    </Grid>


                    {/* womens Half sleeves section */}
                    <Grid item xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "100%", xs: "100%" } }}>
                            <Box>
                                <Typography sx={{ ml: "15px", fontSize: "20px", fontWeight: "900", color: "#6EC1E4", fontFamily: FAMILY }}>
                                    Women,s Half sleeve
                                </Typography>
                                <Typography sx={{ ml: "15px", color: GRAY_TYPO, fontFamily: FAMILY, fontSize: "15px" }}>
                                    New Arrivals – Check out our latest products!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                            {
                                woHalf.map((ele) => {
                                    return (
                                        <Box sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" } }} onMouseEnter={() => { handleNewArrivalCardShow(ele.title) }} onMouseLeave={handleNewArrivalCardRemove}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px" } }}>

                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "270px", xs: "230px" }, position: "relative", backgroundImage: `url(${ele.image})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", width: "100%", position: "relative" }}>
                                                    <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>

                                                    <Box sx={{ display: cardShow == ele.title ? "block" : "none", p: { lg: "20px", md: "17px", sm: "15px", xs: "13px" }, height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} >QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", fontFamily: FAMILY }}>
                                                        <b>{ele.title}</b>

                                                    </Typography>
                                                    <Typography align='center' sx={{ fontSize: "14px", mt: "7px" }}>
                                                        <span style={{ color: GRAY_TYPO, marginRight: "5px" }}><s>{ele.orgPrice}</s></span>{ele.discPrice}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", mt: "7px", p: "0px 8px" }}>
                                                    <Box style={{ border: `1px solid #e0e0e0`, display: "flex" }}>
                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon /></Box>
                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                        <Box sx={{ height: "30px", width: "40px", ontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon /></Box>
                                                    </Box>
                                                    <Box sx={{ bgcolor: "#e0e0e0", height: "30px", width: "40px", ml: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}><ShoppingBagOutlinedIcon sx={{ fontWeight: "100", fontSize: "18px" }} /></Box>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    )
                                })
                            }

                        </Box>
                    </Grid>


                    {/* mens formal shirts */}


                    <Grid item xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "100%", xs: "100%" } }}>
                            <Box>
                                <Typography sx={{ ml: "15px", fontSize: "20px", fontWeight: "900", color: "#6EC1E4", fontFamily: FAMILY }}>
                                    Men Fomral Shirts
                                </Typography>
                                <Typography sx={{ ml: "15px", color: GRAY_TYPO, fontFamily: FAMILY, fontSize: "15px" }}>
                                    New Arrivals – Check out our latest products!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                            {
                                menFormalShirt.map((ele) => {
                                    return (
                                        <Box sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" } }} onMouseEnter={() => { handleNewArrivalCardShow(ele.title) }} onMouseLeave={handleNewArrivalCardRemove}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px" } }}>

                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "270px", xs: "230px" }, position: "relative", backgroundImage: `url(${ele.image})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", width: "100%", position: "relative" }}>
                                                    <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>

                                                    <Box sx={{ display: cardShow == ele.title ? "block" : "none", p: { lg: "20px", md: "17px", sm: "15px", xs: "13px" }, height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} >QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", fontFamily: FAMILY }}>
                                                        <b>{ele.title}</b>

                                                    </Typography>
                                                    <Typography align='center' sx={{ fontSize: "14px", mt: "7px" }}>
                                                        <span style={{ color: GRAY_TYPO, marginRight: "5px" }}><s>{ele.orgPrice}</s></span>{ele.discPrice}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", mt: "7px", p: "0px 8px" }}>
                                                    <Box style={{ border: `1px solid #e0e0e0`, display: "flex" }}>
                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon /></Box>
                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                        <Box sx={{ height: "30px", width: "40px", ontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon /></Box>
                                                    </Box>
                                                    <Box sx={{ bgcolor: "#e0e0e0", height: "30px", width: "40px", ml: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}><ShoppingBagOutlinedIcon sx={{ fontWeight: "100", fontSize: "18px" }} /></Box>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    )
                                })
                            }

                        </Box>
                    </Grid>



                    {/* men women mix and small screen crousel */}


                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Box className="newarrive" sx={{ width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>

                            <Grid container sx={{}}>
                                {
                                    menWo.map((ele) => {
                                        return (
                                            <Grid item lg={4} md={4} sx={{ cursor: "pointer" }}>
                                                <Box sx={{ m: "15px", mt: "20px", backgroundImage: `url(${ele.image})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "530px" }}>

                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "17px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", fontFamily: FAMILY }}>
                                                        {ele.title}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>

                        </Box>

                        <Box sx={{ width: "100%", display: { lg: "none", md: "none", sm: "block", xs: "block" }, mb: { lg: "30px", md: "25px", sm: "20px", xs: "10px" } }}>
                            <Box sx={{}}>
                                <Slide {...proprietes}>
                                    {console.log(menWo)}
                                    {

                                        menWo.map((ele, index) => {
                                            return (
                                                <Box key={index} sx={{ width: "100%" }}>
                                                    <Box sx={{ backgroundImage: `url(${ele.image})`, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: { lg: "230px", md: "230px", sm: "500px", xs: "400px" }, backgroundSize: "100% 100%" }}>

                                                    </Box>
                                                </Box>
                                            )

                                        })
                                    }

                                </Slide>
                            </Box>
                        </Box>

                    </Grid>


                    {/* the vibzz three photos */}


                    <Grid item xs={12} sx={{ mt: { lg: "30px", md: "25px", sm: "17px", xs: "0px" } }}>
                        <Box className="newarrive" sx={{ background: "#9e9e9e", backgroundBlendMode: "multiply", p: { lg: "20px", md: "15px", sm: "13px", xs: "25px 0px" }, width: "100%", display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, backgroundImage: `url(${b6})`, height: { lg: "600px", md: "600px", sm: "500px", xs: "420px" }, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ height: "fit-content", width: { lg: "60%", md: "65%", sm: "70%", xs: "70%" } }}>
                                        <Typography align='center' sx={{ fontSize: { lg: "30px", md: "27px", sm: "20px", xs: "24px" }, fontWeight: "900", color: "white", fontFamily: FAMILY }}>
                                            THE VIBZZ
                                        </Typography>
                                        <Typography align='center' sx={{ mt: "10px", fontSize: { lg: "15px", md: "14px", sm: "15px", xs: "12px" }, fontWeight: { lg: "900", md: "800", sm: "800", xs: "800" }, color: "white", fontFamily: FAMILY }}>
                                            “Shop the Latest Fashion Trends: Find Your Perfect Outfit Today! Discover the Hottest Styles at [the vibzz] <br /> – Shop Now and Save Big on Must-Have Clothes!”
                                        </Typography>
                                        <Grid container sx={{ mt: { lg: "30px", md: "25px", sm: "20px", xs: "10px" } }}>
                                            <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={{ m: "5px", display: "flex", justifyContent: { lg: "right", md: "right", sm: "center", xs: "center" } }}>
                                                <Button sx={{ letterSpacing: "-0.5px", bgcolor: "white", border: "3px solid transparent", fontSize: "12px", fontWeight: "900", color: "black", "&:hover": { background: "none", color: "white", border: "3px solid white" } }}>
                                                    shop men collection
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={{ m: "5px", display: "flex", justifyContent: { lg: "left", md: "left", sm: "center", xs: "center" } }}>
                                                <Button sx={{ letterSpacing: "-0.5px", background: "none", fontSize: "12px", border: "3px solid white", fontWeight: "900", color: "white", "&:hover": { background: "white", color: "black" } }}>
                                                    shop formal collection
                                                </Button>
                                            </Grid>

                                        </Grid>

                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ mt: "15px" }}>
                        <Box sx={{ p: "15px", width: "100%", backgroundImage: `url(${b3})`, height: { lg: "600px", md: "600px", sm: "450px", xs: "300px" }, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundPosition: "center" }}>
                            <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: { xs: "left", sm: "center", md: "center", lg: "center" } }}>
                                <Box sx={{ width: { lg: "80%", md: "90%", sm: "90%", xs: "100%" } }}>
                                    <Typography sx={{ fontSize: { lg: "40px", md: "27px", sm: "20px", xs: "22px" }, fontWeight: "900", color: "white", fontFamily: FAMILY }}>
                                        MEN,S COLECTION
                                    </Typography>
                                    <Button sx={{ mt: "15px", letterSpacing: "-0.5px", bgcolor: "white", border: "3px solid transparent", fontSize: "12px", fontWeight: "900", color: "black", "&:hover": { background: "none", color: "white", border: "3px solid white" } }}>
                                        shop men collection
                                    </Button><br />
                                    <Button sx={{ mt: "10px", letterSpacing: "-0.5px", background: "none", fontSize: "12px", border: "3px solid white", fontWeight: "900", color: "white", "&:hover": { background: "white", color: "black" } }}>
                                        shop formal collection
                                    </Button>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12}>
                        <Box sx={{ width: "100%", backgroundImage: `url(${b5})`, height: { lg: "600px", md: "600px", sm: "450px", xs: "300px" }, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundPosition: "center" }}>
                            <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                                <Typography sx={{ fontSize: { lg: "40px", md: "27px", sm: "20px", xs: "24px" }, fontWeight: "900", color: "white", fontFamily: FAMILY }}>
                                    ENJOY UP TO 30% OFF
                                </Typography>
                                <Button sx={{ mt: "15px", letterSpacing: "-0.5px", bgcolor: "white", border: "3px solid transparent", fontSize: "12px", fontWeight: "900", color: "black", "&:hover": { background: "none", color: "white", border: "3px solid white" } }}>
                                    shop men collection
                                </Button><br />



                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>


                </Grid>
            </Container>
        </>
    )
}

export default HomePage