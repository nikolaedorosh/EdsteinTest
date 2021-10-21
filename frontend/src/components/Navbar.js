import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function NavigBar() {
  const history = useHistory();
  const [logoutBtn, setLogoutBtn] = useState(false);

  const logout = (e) => {
    localStorage.removeItem("userInfo");
    setLogoutBtn(false);
    history.push("/");
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setLogoutBtn(true);
    }
  }, [history]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Nico App
            </Typography>
            {logoutBtn && (
              <Button onClick={logout} color='inherit'>
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavigBar;
