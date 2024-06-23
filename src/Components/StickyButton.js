import { styled } from '@mui/system';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '50%',
  right: '0rem',
  borderRadius: '0',
  height: 'max-content',
  padding: '16px',
  borderTopLeftRadius:'12px',
  borderBottomLeftRadius:'12px',
  background:'#1f2937',
  color:'white',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#1f2977',
  },
}));

const ContactButton = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#1f2937', // Ensure the color remains the same
  
}));

const WhatsAppFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '40%',
  right: '0',
  borderRadius: '0%',
  borderTopLeftRadius:'12px',
  borderBottomLeftRadius:'12px',
  backgroundColor: '#25D366',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
}));

const WhatsAppButton = () => (
  <a href="https://wa.me/your-whatsapp-number">
    <WhatsAppFab aria-label="WhatsApp">
      <WhatsAppIcon />
    </WhatsAppFab>
  </a>
);

const BookAppointmentButton = () => (
  <>
    <ContactButton to="/appointment">
      <StyledFab color='white' aria-label="Contact">
        <div className="hidden md:block ">
          <h1
            className="font-bold leading-none"
            style={{
              width: '10px',
              fontSize: '12px',
              wordWrap: 'break-word',
              letterSpacing: '4px',
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)', // Adjust rotation if needed
              transformOrigin: 'center', // Ensure rotation origin is centered
            }}
          >
            Contact Us
          </h1>
        </div>
      </StyledFab>
    </ContactButton>
    <WhatsAppButton />
  </>
);

export default BookAppointmentButton;
