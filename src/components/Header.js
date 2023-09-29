import { AppBar, Box, Button, Grid, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import logo from '../assets/thevibzzlogo.webp';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useContext, useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import VibzContext, { globalContext } from '../Global/VibzContext';
import { FAMILY, SALE_COLOR, THEME_COLOR } from '../Styles/ConstantStyle';
import MegaMenu from '../components/MegaMenu';
import { megaMenuList } from '../constantMapData';





export default function Header() {

    const { triger } = useContext(globalContext)
    const [hoverEffect, setHoverEffect] = useState(false)
    const [borderStyle, setBorderStyle] = useState({ Stitle: "", Smenu: false })
    const [megaListMenu, setMegaListMenu] = useState(megaMenuList)

    const elementRef = useRef(null);
    const [isTouchingTop, setIsTouchingTop] = useState(false);

    const images = [
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more"
        },
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more"
        },
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more"
        },
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more"
        }
    ];



    const handleHoverControl = ({ title, megaMenu }) => {
      setBorderStyle((prev) => ({ ...prev, Smenu: megaMenu, Stitle: title }))
      if (megaMenu) {
          setHoverEffect(true)
      }
      else {
          setHoverEffect(false)
      }

  }


  const handleRemoveHover = () => {
      setBorderStyle("")
      setHoverEffect(false)

  }



    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const isTouching = rect.top <= 0;
                setIsTouchingTop(isTouching);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // console.log(isTouchingTop)

    const properties = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: false
    };

    if (triger) {
        return (

            <AppBar  sx={{}}>
                <Toolbar component={Box} disableGutters sx={{position:"sticky",pt:"10px",bgcolor: "black", borderBottom: "1px solid #757575", display: "flex", flexDirection: "column" }}>

                    <Grid container sx={{ mb: "5px" }}>

                        <Grid item lg={3} md={3} sx={{ display: "flex", justifyContent: "right", alignItems: "flex-start" }}>
                            <Typography sx={{ fontSize: "15px", fontFamily: "Staatliches", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <AddIcCallOutlinedIcon sx={{ fontSize: { lg: "17px", md: "12px" }, mr: "5px", }} /> CALL TO US! +91-972723423
                            </Typography>
                        </Grid>

                        <Grid item lg={5} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: "80%", position: "relative" }}>
                                <span style={{ position: "absolute", left: "0px", top: "-6px" }}><ArrowBackIosIcon sx={{ fontSize: "22px" }} /></span>
                                <span style={{ position: "absolute", right: "0px", top: "-4px" }}><ArrowForwardIosIcon sx={{ fontSize: "22px" }} /></span>

                                <Slide {...properties}>
                                    {
                                        images.map((ele, index) => (
                                            <Box key={index}>
                                                <Typography align='center' sx={{ display: "flex", alignItems: "center", fontSize: { lg: "13px", md: "11px" }, justifyContent: "center" }}>{ele.icon}{ele.caption}</Typography>
                                            </Box>
                                        ))
                                    }

                                </Slide>
                            </Box>
                        </Grid>


                        <Grid item lg={4} md={3}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Typography sx={{ mr: "7px", fontWeight: "900", letterSpacing: "-0.5px", fontSize: "14px", display: "flex", alignItems: "center" }}><PersonOutlineOutlinedIcon sx={{ mr: "3px", fontSize: "25px", fontWeight: "100", mt: "-3px" }} />LOGIN/SIGNUP</Typography>
                                <Typography sx={{ fontWeight: "900", letterSpacing: "-0.5px", fontSize: "14px", display: "flex", alignItems: "center" }}><FavoriteBorderOutlinedIcon sx={{ mr: "3px", fontSize: "22px", fontWeight: "100", mt: "-3px" }} />WISHLIST</Typography>

                            </Box>
                        </Grid>
                    </Grid>


                    <Grid container sx={{ mt: "10px" }}>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Grid container>
                                <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>

                                    <Box sx={{ userSelect: 'none', cursor: "pointer", width: { lg: "100px", xs: "100px", md: '80px' }, bgcolor: "white", borderRadius: '10px' }}>
                                        <img src={logo} alt='pic' width="100%" height="100%" style={{ cursor: "pointer" }} />
                                    </Box>

                                </Grid>
                                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{}}>
                                        <FacebookOutlinedIcon sx={{ mr: "10px" }} />
                                        <InstagramIcon sx={{ mr: "10px" }} />
                                        <TwitterIcon sx={{ color: "black", bgcolor: "white", borderRadius: "50px", p: "3px" }} />

                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={4.5} sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ position: "relative", border: "2px solid #757575", display: "flex", alignItems: "center", height: "35px", width: "100%" }}>
                                <Box sx={{}}>
                                    <select style={{ background: "none", border: "none", outline: "none" }}>
                                        <option style={{ color: "black" }}>All categories</option>
                                        <option style={{ color: "black" }}>Couple Shirts</option>
                                        <option style={{ color: "black" }}>Formal Shirts</option>
                                        <option style={{ color: "black" }}>Man,s Full Sleeve</option>
                                        <option style={{ color: "black" }}>Man,s Half Sleeve</option>
                                        <option style={{ color: "black" }}>Men,s/Women,s</option>
                                        <option style={{ color: "black" }}>Men T-Shirt</option>
                                        <option style={{ color: "black" }}>Uncategorized</option>
                                        <option style={{ color: "black" }}>Women,s Full Sleeve</option>
                                        <option style={{ color: "black" }}>Women,s Half Sleeve</option>
                                    </select>
                                </Box>
                                <Box sx={{ borderLeft: "2px solid #757575", height: "100%", display: "flex", alignItems: "Center" }}>
                                    <input placeholder='Type here...' style={{ background: "none", outline: "none", paddingLeft: "10px" }} />
                                </Box>
                                <Box sx={{ position: "absolute", right: "0px" }}>
                                    <SearchIcon sx={{ mr: "10px", fontSize: "25px", fontWeight: "300" }} />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box>
                                <Button sx={{ color: "black", bgcolor: "white", "&:hover": { bgcolor: "white" }, fontWeight: "900" }}> <ShoppingBagOutlinedIcon sx={{ fontWeight: "300", mr: "5px" }} />my cart ₹ 0.0</Button>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>


                    <Grid container>
        <Grid item sx={{width: "100%"}}>
                        {
                            triger && <Grid item xs={12} sx={{ position: "relative" }}>
                                <Grid container sx={{ borderBottom: "1px solid #9e9e9e", bgcolor: "white",color:"black" }}>
                                    <Grid item lg={3.5} md={2}>
                                    </Grid>
                                    <Grid item lg={4.5} md={6}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            {
                                                megaListMenu.map((ele, index) => {
                                                    return (
                                                        <>
                                                            <Box key={index} sx={{ mt: "18px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onMouseEnter={() => { handleHoverControl({ ...ele }) }} onMouseLeave={handleRemoveHover} >
                                                                <Typography sx={{ fontFamily: FAMILY, display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "800" }}>
                                                                    {ele.icon}{ele.title}
                                                                </Typography>
                                                                <Box sx={{ pt: "10px", ml: "3px", width: borderStyle.Stitle == ele.title ? "100%" : "0%", transition: "width 0.3s ease", borderBottom: `3px solid ${THEME_COLOR}` }}>

                                                                </Box>
                                                            </Box>
                                                        </>
                                                    )
                                                })
                                            }
                                        </Box>
                                        <Box>

                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: "fit-content", border: `2px solid ${SALE_COLOR}`, color: SALE_COLOR, p: "5px 10px", height: "fit-content" }}>
                                            <Typography sx={{ fontSize: "12px", fontWeight: "700", fontFamily: FAMILY }}>
                                                SALE! 30% OFF!
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>


                                {
                                    hoverEffect && <Box sx={{ bgcolor: "white", width: "100%", position: "absolute", zIndex: 9999 }}>

                                        <MegaMenu onPointerOut={handleRemoveHover} borderStyle={borderStyle} setHoverEffect={setHoverEffect} />
                                    </Box>
                                }



                            </Grid>
                        }
                    </Grid>
        </Grid>
                    </Grid>





                </Toolbar>
            </AppBar>
        );
    }

    if (!triger) {
        return (

               <AppBar sx={{}}>
      <Toolbar sx={{p: '10px', bgcolor: 'black', borderBottom: '1px solid #757575', display: 'flex', flexDirection: 'column' }}>
        <Grid container sx={{ mb: '5px' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: '100%' }}>
              <span style={{ position: 'absolute', left: '0px', top: '-4px' }}>
                <ArrowBackIosIcon sx={{ fontSize: { lg: '22px', md: '21px', sm: '18px', xs: '15px' } }} />
              </span>
              <span style={{ position: 'absolute', right: '0px', top: '-4px' }}>
                <ArrowForwardIosIcon sx={{ fontSize: { lg: '22px', md: '21px', sm: '18px', xs: '15px' } }} />
              </span>
              <Slide {...properties}>
                {images.map((ele, index) => (
                  <Box key={index}>
                    <Typography align='center' sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: '22px', md: '21px', sm: '15px', xs: '12px' }, justifyContent: 'center' }}>
                      {ele.icon}
                      {ele.caption}
                    </Typography>
                  </Box>
                ))}
              </Slide>
            </Box>
          </Grid>
        </Grid>

        <Grid container ref={elementRef} sx={{position: isTouchingTop ? 'sticky' : 'static',zIndex: 1,bgcolor:THEME_COLOR,top:"0px",alignItems: 'center', justifyContent: 'space-between', mt: '8px' }}>
          <Box>
            <MenuOutlinedIcon sx={{ fontSize: { xs: '22px', sm: '25px', md: '29px', lg: '35px' } }} />
          </Box>

          <Box
            
            sx={{
              display: 'flex',
              justifyContent: 'right', 
            }}
          >
            <Box
              sx={{
                userSelect: 'none',
                cursor: 'pointer',
                width: { lg: '100px', xs: '70px', md: '85px', sm: '75px' },
                bgcolor: 'white',
                borderRadius: '10px',
              }}
            >
              <img src={logo} alt='pic' width='100%' height='100%' style={{ cursor: 'pointer' }} />
            </Box>
          </Box>

          <Box>
            <PersonOutlineOutlinedIcon sx={{ mr: '3px', fontSize: '25px', fontWeight: '100', mt: '-3px' }} />
          </Box>
        </Grid>

        <Grid container sx={{ display: 'flex', alignItems: 'center', mt: '10px' }}>
          <Grid xs={12} item sx={{ position: 'relative', border: '2px solid #757575', display: 'flex', alignItems: 'center', height: '35px', width: '100%' }}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'Center' }}>
              <input placeholder='Type here...' style={{ background: 'none', outline: 'none', paddingLeft: '10px' }} />
            </Box>
            <Box sx={{ position: 'absolute', right: '0px' }}>
              <SearchIcon sx={{ mr: '10px', fontSize: '25px', fontWeight: '300' }} />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item sx={{ position: "fixed", zIndex: 9999, width: "100%", top: "100px" }}>
                        {
                            triger && <Grid item xs={12} sx={{ position: "relative" }}>
                                <Grid container sx={{ borderBottom: "1px solid #9e9e9e", bgcolor: "white" }}>
                                    <Grid item lg={3.5} md={2}>
                                    </Grid>
                                    <Grid item lg={4.5} md={6}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            {
                                                megaListMenu.map((ele, index) => {
                                                    return (
                                                        <>
                                                            <Box key={index} sx={{ mt: "18px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onMouseEnter={() => { handleHoverControl({ ...ele }) }} onMouseLeave={handleRemoveHover} >
                                                                <Typography sx={{ fontFamily: FAMILY, display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "800" }}>
                                                                    {ele.icon}{ele.title}
                                                                </Typography>
                                                                <Box sx={{ pt: "10px", ml: "3px", width: borderStyle.Stitle == ele.title ? "100%" : "0%", transition: "width 0.3s ease", borderBottom: `3px solid ${THEME_COLOR}` }}>

                                                                </Box>
                                                            </Box>
                                                        </>
                                                    )
                                                })
                                            }
                                        </Box>
                                        <Box>

                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: "fit-content", border: `2px solid ${SALE_COLOR}`, color: SALE_COLOR, p: "5px 10px", height: "fit-content" }}>
                                            <Typography sx={{ fontSize: "12px", fontWeight: "700", fontFamily: FAMILY }}>
                                                SALE! 30% OFF!
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>


                                {
                                    hoverEffect && <Box sx={{ bgcolor: "white", width: "100%", position: "absolute", zIndex: 9999 }}>

                                        <MegaMenu onPointerOut={handleRemoveHover} borderStyle={borderStyle} setHoverEffect={setHoverEffect} />
                                    </Box>
                                }



                            </Grid>
                        }
                    </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
        );
    }

}


