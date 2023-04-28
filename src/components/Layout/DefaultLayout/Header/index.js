import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { useState } from "react";


const cx = classNames.bind(styles);

function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <header>
      <nav className={cx("navi-header")}>
        <div className={cx("navi-left")}>
          <h2>BookingTravelling.com</h2>
        </div>
        <div className={cx("navi-right")}>
          <img src={require("./icons8-vietnam-48.png")} alt="Vietnam" />
          <p>Dịch vụ đặt phòng khách sạn</p>
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
                    <Avatar /> Manh
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
                    <Link to="/login" style={{textDecoration: "none", margin: "0px"}} >Logout</Link>
                </MenuItem>
                </Menu>
          </div>
        </div>
      </nav>
      <ul className={cx("list")}>
        <li>
          <button>
            {" "}
            <Link to="/">Home</Link>
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
