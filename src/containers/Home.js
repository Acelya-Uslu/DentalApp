
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, ListItem, ListItemAvatar, List, Drawer, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import AppBar from '../components/Appbar'
import Profil from '../components/Profil'
import Avatar from '@mui/material/Avatar';
import Calendar from '../components/Calendar';

import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import dis from '../assets/dis1.png';
import chart from '../assets/chartt.png';
import doktor from '../assets/doctor.png';
import xray from '../assets/xray.PNG';
import diss from '../assets/dis.png';

import { DisplaySettings } from '@mui/icons-material';
import ReactImageMagnify from 'react-image-magnify';


const drawerWidth = 240;
const Appbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Home = () => {

  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);

  const handleClose = () => {
    setDialog(false);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div style={{ width: "98%", height: "95vh" }}>

      <Paper sx={{ width: "100%", height: "95vh", borderRadius: "40px" }}>
        <Grid container spacing={2}>

          {/* Drawer  Ba??lang???? */}

          <Grid item xs={12} md={1} sx={{ marginTop: "300px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }} >
              <MenuIcon />
            </IconButton>

            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            ></Drawer>
          </Grid>

          {/* Drawer  Biti?? */}


          {/* Sol ??st Part Ba??lang???? */}
          <Grid item xs={12} md={7} sx={{ borderRight: "2px solid gray" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch">

              <Grid item xs={12} md={4} >
                <List >
                  <ListItem sx={{ marginRight: "100px" }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "orange", fontSize: "20px" }} >
                      D
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "purple", fontSize: "20px" }} >
                      ental
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <AppBar />

              {/* Sol ??st Part Biti?? */}


              {/* Sol Profil Ba??lang???? */}

              <Grid item xs={12} md={4}  >
                <Profil />
              </Grid>

              {/* Sol Profil Biti?? */}


              {/* Sol Papers Ba??lang???? */}

              <Grid item xs={12} md={4}>
                <Grid container spacing={2} >
                  <Grid item xs={12} md={6}>
                    <Grid item xs={12} md={4}>

                      <Paper sx={{ borderRadius: "15px", height: "150px", width: "450px" ,textAlign:"center"}}>
                        <img style={{ height: "150px", width: "270px" }} src={chart}></img>
                      </Paper>

                      <Paper sx={{ borderRadius: "15px", height: "150px", width: "450px", marginTop: "30px" }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "black", fontSize: "15px", marginRight: "300px" }} >
                          Details
                          <img   style={{ height: "150px", width: "280px" ,marginLeft: "70px"}} src={dis}></img>
                        </Typography >
                        
                      </Paper>

                    </Grid>
                  </Grid>
                  {/* Sol Papers Biti?? */}



                  {/* Prosthesis Part Ba??lang???? */}
                  <Grid item xs={12} md={6}>
                    <Grid>
                      <Paper sx={{ borderRadius: "15px", height: "330px", width: "300px", marginLeft: "30px" }} onClick={() => setDialog(true)}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "black", fontSize: "15px", marginRight: "300px" }} >
                          Prosthesis
                        </Typography>
                        <img style={{ height: "300px", width: "300px" }} src={diss}></img>
                      </Paper>

                      <Dialog
                        open={dialog}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <img style={{ height: "270px", width: "600px", borderRadius: "25px" }} src={xray}></img>

                        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
                          R??ntgen Yorumu
                        </DialogTitle>
                        <DialogContent >
                          <DialogContentText id="alert-dialog-description">
                            Di?? k??klerini inceledi??imizde k??k ucu bittikten sonra s??ngerimsi kemik dokusunu g??r??yoruz. Normal ??artlarda bu doku homojen bir kontrast da????l??m??nda ve di??ten farkl?? bir gri tonda izlenir.
                            E??er k??k ucunun etraf??nda normalden daha koyu, hatta siyah g??r??nen bir alan varsa burada, kemikte bir doku zay??flamas?? veya bir bo??luk oldu??u d??????n??l??r.
                            Bu olu??umun ne t??r bir lezyon oldu??unu sorgulamak ve tespit etmek gerekmektedir.
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Prosthesis Part Biti?? */}


          {/* Sa?? ??st  Part Ba??lang???? */}

          <Grid item xs={12} md={4} sx={{ backgroundColor: "#8a86863b" }}>

            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch">

              <Grid item xs={12} md={4}>
                <List >
                  <ListItem sx={{ marginLeft: "270px" }}>
                    <Typography variant="h6" gutterBottom  >
                      Dr.
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }} >
                      Lora Brown
                    </Typography>
                    <ListItemAvatar sx={{ marginLeft: "15px" }} >
                      <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/portrait-woman-smiling-camera_23-2148255220.jpg?w=360&t=st=1664788388~exp=1664788988~hmac=b9cc844c465ab0b3e07063508958551ddcabf756fd279e3863a3529606f21651" >
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Grid>

              {/* Sa??  ??st Part Biti?? */}


              {/* Takvim   Ba??lang???? */}

              <Grid item xs={12} md={4}>
                <List >
                  <ListItem sx={{ marginRight: "100px" }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }} >
                      Feb
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: "black", fontSize: "20px", marginLeft: "10px" }} >
                      2022
                    </Typography>
                  </ListItem>
                </List>
                <Calendar />
              </Grid>

              {/* Takvim   Biti?? */}


              {/* Doktor G??rseli Ba??lang???? */}

              <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
                <img style={{ height: "290px", width: "150px" }} src={doktor} />
              </Grid>
              {/* Doktor G??rseli Biti?? */}


              {/* Sa?? Alt Part Ba??lang???? */}
              <Grid>
                <Paper sx={{ borderRadius: "15px", height: "70px", width: "380px", marginLeft: "30px" }}>
                  <img style={{ marginRight: "295px", marginBottom: "-30px", height: "40px", width: "40px" }} alt="Remy Sharp" src="https://img.freepik.com/free-vector/isolated-three-dimensional-tooth-with-front-cut-version_1284-47395.jpg?w=740&t=st=1664831860~exp=1664832460~hmac=4421242a4f1fc79a62b431f52d6ff57973f4260b0b2ca0360a13d4c7e6a39ce6" >
                  </img>
                  <Grid item xs={12} md={6} sx={{ marginLeft: "100px" }}>

                    <Typography variant="h4" gutterBottom sx={{ fontSize: "15px", fontWeight: "bold", textAlign: "left", marginTop: "-30px" }}>
                      Tooth
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: "15px", opacity: "0.7", textAlign: "left", marginTop: "15px" }}>
                      Dental prosthetics
                    </Typography>
                    <Button style={{ backgroundColor: "#ea8b6c", height: "30px", borderRadius: "10px", width: "50px", marginLeft: "200px", marginTop: "-110px", color: "white" }}>
                      <NavigateNextTwoToneIcon></NavigateNextTwoToneIcon>
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
              {/* Sa?? Alt Part Biti?? */}


            </Grid>
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}

export default Home
