import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, alpha } from '@mui/material/styles';
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logo_Final_2 from '../../Assets/Logo Final_2.png'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (
    <div className="sticky top-0 z-50 px-8 flex justify-between items-center h-20 bg-white">
      
        <Link to="/">
          <img src={Logo_Final_2} alt="Health Logo" className="h-12 inline mr-2" />
        </Link>

      <Stack spacing={0} direction="row">
      <Search className="border-secondary border ">
        <SearchIconWrapper>
          <SearchIcon className="text-secondary" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          className="placeholder-primary"
          inputProps={{ 'aria-label': 'search' }}
        />
        
      </Search>
      <Button className="bg-secondary" variant="contained" sx={{ borderRadius: 0 }}>Search</Button>
      </Stack>

      {/* Desktop */}
      <ul className="hidden md:flex space-x-8 font-medium text-lg">
        <li>
          <Link to="/" className="hover:text-blue-400">Home</Link>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-400">Services</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400">About</a>
        </li>
        <li>
          <a href="#reviews" className="hover:text-blue-400">Reviews</a>
        </li>
        <li>
          <a href="#doctors" className="hover:text-blue-400">Doctors</a>
        </li>
      </ul>
{/* 
      <button
        className="hidden md:block px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition-all duration-400"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button> */}

      {/* Mobile */}
      <div className={`fixed inset-0 bg-white z-20 flex flex-col justify-center items-center transition-transform duration-500 transform ${nav ? "translate-x-0" : "-translate-x-full"}`}>
        <div onClick={openNav} className="absolute top-7 right-7">
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6 cursor-pointer hover:text-red-500" />
        </div>

        <ul className="space-y-6 text-2xl font-semibold text-center">
          <li>
            <Link onClick={openNav} to="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <a onClick={openNav} href="#services" className="hover:text-blue-400">Services</a>
          </li>
          <li>
            <a onClick={openNav} href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews" className="hover:text-blue-400">Reviews</a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors" className="hover:text-blue-400">Doctors</a>
          </li>
          <li>
            <a onClick={openNav} href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </div>


      {/* Hamburger Icon */}
      <div className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="w-6 h-6 cursor-pointer hover:text-blue-400"
        />
      </div>
    </div>
  );
}

export default Navbar;
