import { Button } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

function WelcomePage() {
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/profile");
    }
  }, [history]);

  return (
    <>
      <Button>
        <Link to='/login'>Login</Link>
      </Button>
      <Button>
        <Link to='/signup'>Signup</Link>
      </Button>
    </>
  );
}

export default WelcomePage;
