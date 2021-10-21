import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reduxAction/userActions";

function NavigBar() {
  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state);
  const { userInfo } = userLogin;

  const handleLogout = (e) => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [history, userInfo]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Nico App
            </Typography>

            <Button onClick={handleLogout} color='inherit'>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavigBar;
