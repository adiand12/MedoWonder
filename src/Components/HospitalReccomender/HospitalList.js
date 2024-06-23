import React from 'react';
import { Card, CardContent, Typography, CardMedia, Stack } from '@mui/material';

const HospitalList = ({ hospitals }) => {
  console.log("hosp", hospitals);

  return (
    <div style={{ overflowX: 'auto' }}>
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        {hospitals.map((hospital, index) => (
          <Card key={index} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            boxShadow: 2, 
            borderRadius: 2, 
            width: '300px', // Fixed width for the card
            flexShrink: 0 // Prevents shrinking
          }}>
            <CardMedia
              component="img"
              alt={hospital.name}
              image={process.env.PUBLIC_URL + `/${hospital.image}`}
              sx={{ 
                height: '200px', // Fixed height for the image
                objectFit: 'cover' 
              }}
            />
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              height: '120px', // Fixed height for the content
              textAlign: 'center' 
            }}>
              <Typography variant="h6">{hospital.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default HospitalList;
