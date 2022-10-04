import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Button, List, ListItem, Grid, ListItemText, Divider , Typography } from '@mui/material';
import { Box } from '@mui/system';

const Profil = () => {
    return (
        <div>

            <Grid container spacing={2} >
                <Grid item xs={12} md={2}  sx={{marginTop:"-40px"}}>
                 <Avatar alt="Remy Sharp" sx={{margin:"auto",height:"120px", width:"120px"}} src="https://t4.ftcdn.net/jpg/01/17/30/23/240_F_117302330_S62ttBijZ5hBLZwXDFep1zVf4erWNZyg.jpg"/> 
                
                    {/* <Avatar alt="Remy Sharp" sx={{margin:"auto",height:"150px", width:"150px"}} src="https://img.freepik.com/free-photo/portrait-woman-smiling-camera_23-2148255220.jpg?w=360&t=st=1664788388~exp=1664788988~hmac=b9cc844c465ab0b3e07063508958551ddcabf756fd279e3863a3529606f21651"/> */}
                </Grid>
                
                
                <Grid item xs={12} md={3} sx={{marginTop:"-28px"}}>
                    <Typography variant="h4" gutterBottom sx={{textAlign:"left",fontSize:"22px",fontWeight:"bold"}}>
                        Monica Wood
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{opacity:"0.4",textAlign:"left",fontSize:"15px"}}>
                        Pacient
                    </Typography>
                    <Button sx={{color:"black", backgroundColor:"#f8f9fb",borderRadius:"5px"}}>
                        Profile
                    </Button>
                </Grid>

                

                <Grid item xs={12} md={3} sx={{marginTop:"-50px"}}>
                    <Box>
                        <List >
                            <ListItem >
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Yaş : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        9
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Sex : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        Female
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}> 
                        Blood : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        LW(A+)
                    </Typography>

                    
                            </ListItem>
                           </List>
                    </Box>
                </Grid>
                        <Divider orientation="vertical" variant="middle" flexItem />


                <Grid item xs={12} md={3} sx={{marginTop:"-50px"}}>
                    <Box>
                        <List>
                            <ListItem >
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Tel : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        949 565 4564
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Address : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        Female
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Registration : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        Yes
                    </Typography>
                            </ListItem>

                           </List>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default Profil
