import { BottomNavigation, BottomNavigationAction, Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./first.css";
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import PanToolIcon from '@mui/icons-material/PanTool';
import HomeIcon from '@mui/icons-material/Home';

export const First = () => {
  return (
    <>
      <Container className='container' maxWidth="sm" sx={{ bgcolor: "#F1F1F1", display: 'flex', flexDirection: 'column',}}>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: "#C1C1C1", 
          height: '25%', marginTop: '25px'}}>
          <Box sx={{ margin: '20px', fontWeight: 'bold', cursor: 'default', fontSize: '25px'}}>Listing Title</Box>
          <Box sx={{ margin: '20px', cursor: 'pointer', height: '10%'}}><MenuIcon /></Box>
        </Box>
        <Box conponent="div" sx={{ height: '8%', bgColor: '#F5F5F5', display: 'flex'}}>
          <Box sx={{ margin: '25px', }}><BusinessCenterIcon /></Box>
          <Box sx={{ margin: '15px', display: 'flex', flexDirection: 'column'}}>
            <Box>Fitness Instructor</Box>
            <Box>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
          </Box>
        </Box>
        
        <Box component="div" sx={{ bgcolor: "#C1C1C1", height: '25%', marginTop: '50px'}}>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Box sx={{ margin: '20px', fontWeight: 'bold', cursor: 'default', fontSize: '25px'}}>Listing Title</Box>
              <Box sx={{ margin: '20px', cursor: 'pointer', height: '10%'}}><MenuIcon /></Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'self-end'}}>
              <CircleIcon style={{ color: 'green'}}/>
              <Box sx={{ fontWeight: 'bold', marginLeft: '15px', fontSize: '20px'}}>
                Status
              </Box>
            </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px',}}>
          <Box>
            <PanToolIcon />
            <Box>Date</Box>
          </Box>
          <Box sx={{ marginLeft: '50px'}}>
            <Box>Name</Box>
            <Box>Location</Box>
          </Box>
        </Box>
      <Box component='footer'>
        <BottomNavigation showLabels>
          <BottomNavigationAction label= 'Home' icon={ <HomeIcon />}></BottomNavigationAction>
          <BottomNavigationAction label= 'Services' icon={ <BusinessCenterIcon />}></BottomNavigationAction>
        </BottomNavigation>
      </Box>
      <div className='button'>
        <Button variant='contained'>View table</Button>
      </div>
      </Container>
    </>
  )
}

export default First;