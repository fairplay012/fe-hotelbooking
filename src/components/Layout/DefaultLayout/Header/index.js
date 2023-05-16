import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";


const cx = classNames.bind(styles);

function Header() {
  const [user, setUser] = useState()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const access_token = localStorage.getItem('accessToken')  
    const userId = localStorage.getItem('userId')


    const axiosUser = async()=>{
      await axios.get(`http://localhost:5000/api/user/find/${userId}`,{
        headers:{
          'Token': `Bearer ${access_token}`
        }
      })
             .then(response => {
              setUser(response.data); 
             })
             .catch(error => {
                 console.log(error);
             });
      }
  // const clear =()=>{
  //     localStorage.clear()
  // }

  useEffect(() =>{
    axiosUser()
  },[])

  return (
    <header>
      <nav className={cx("navi-header")}>
        <div className={cx("navi-left")}>
          <h2>BookingTravelling.com</h2>
        </div>
        <div className={cx("navi-right")}>
          <img src={require("./icons8-vietnam-48.png")} alt="Vietnam" />
          <p>Find hotels for tourists</p>
          <div>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
                >
                <Tooltip title="Account settings">
                    <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    >
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                </Tooltip>
                </Box>
                <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                    overflow: "visible",
                    
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                    },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                <MenuItem onClick={handleClose}>
                    <Avatar /> {user?.username}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                    <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose} >
                    <ListItemIcon>
                    <Logout fontSize="small" />
                    </ListItemIcon >
                    <Link to="/" style={{textDecoration: "none", margin: "0px"}}
                    //  onClick={clear()}
                      >Logout</Link>
                </MenuItem>
                </Menu>
          </div>
        </div>
      </nav>
      <ul className={cx("list")}>
        <li>
          <button>
            {" "}
            <Link to="/home">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/uti">Utilities</Link>{" "}
          </button>
        </li>
        <li>
          <button>
            <Link>Transportation</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/introduction"> Introduction</Link>
          </button>
        </li>
      </ul>
      <div className={cx("found")}>
        <h1>Tìm khách sạn cho khách du lịch</h1>
      </div>
    </header>
  );
}

export default Header;
