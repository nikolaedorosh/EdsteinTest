import { Typography, Link } from "@mui/material";

function Footer() {
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "relative",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant='body2' color='text.secondary' align='center'>
          {"Copyright © "}
          <Link color='inherit' href='/'>
            Nico App
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    </>
  );
}

export default Footer;
