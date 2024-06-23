import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const countries = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  // Add more countries as needed
];

const FormContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#bfc0c0',
  opacity:'50',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(2),
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#2d3142',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(0),
  backgroundColor: '#2d3142',
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#1f2921',
  },
}));

const MedicalForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [age, setAge] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormContainer maxWidth="sm">
      <FormTitle variant="h5">Patient Information Form</FormTitle>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Patient Name"
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Country"
              value={selectedCountry}
              onChange={handleCountryChange}
              variant="outlined"
              size="small"
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country}>
                  {country.flag} {country.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              size="small"
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <StyledTextField
              fullWidth
              label="Age"
              variant="outlined"
              size="small"
              required
              value={age}
              onChange={handleAgeChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Medical Condition"
              variant="outlined"
              multiline
              size="small"
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <SubmitButton fullWidth variant="contained" type="submit">
              Submit
            </SubmitButton>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default MedicalForm;

