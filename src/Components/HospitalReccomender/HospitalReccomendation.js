import React, { useState, useEffect } from 'react';
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import CountryCard from './CountryCard';
import HospitalList from './HospitalList';
import hospitalsData from '../../data/hospitaldata.json';

const HospitalRecommendation = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [hospitalData, setHospitalData] = useState(hospitalsData);
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    const isMediumScreen = useMediaQuery('(max-width: 1199px) and (min-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 767px) and (min-width: 576px)');
    const isVerySmallScreen = useMediaQuery('(max-width: 575px)');

    const getColumns = () => {
        if (isLargeScreen) return 6;
        if (isMediumScreen) return 4;
        if (isSmallScreen) return 3;
        if (isVerySmallScreen) return 2;
        return 1; // Default to 1 column for smaller screens
    };
    if (!hospitalData) {
        return <div>Loading...</div>;
    }
    console.log("hsp data", hospitalData)

    return (
        <Container>
            <Typography variant="h3" sx={{ marginTop:4, marginBottom: 4, fontWeight: 'bold', textAlign: 'center' }}>
                Explore Hospitals by Country
            </Typography>
            <Stack direction="row" spacing={2} sx={{ overflowX: 'auto', mx: '0' }}>
                {hospitalData.countries.map((country) => (
                    <CountryCard key={country.name} country={country} onSelect={setSelectedCountry} />
                ))}
            </Stack>
            {selectedCountry && (
                <>
                    <Typography variant="h4" sx={{ marginTop: 4, fontWeight: 'bold' }}>
                        Hospitals in {selectedCountry.name}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ overflowX: 'auto', flexWrap: 'wrap' }}>
                        <HospitalList hospitals={selectedCountry.hospitals} />
                    </Stack>
                </>
            )}
        </Container>
    );
};

export default HospitalRecommendation;
