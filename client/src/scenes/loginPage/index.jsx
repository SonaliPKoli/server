import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form"
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:100px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        >
          Sociopedia
        </Typography>
      </Box>
      <Box
      width={isNonMobileScreens?"50%" :"93%"}
      //root size of the font =>rem  it gives consistency among the browser that is why rem is used
      p="2rem"
      m="2rem auto"
      borderRadius="1.5rem"
      backgroundColor={theme.palette.background.alt}
      >
      <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
  Welcome to Sociopedia,the Social Media for Sociopaths!
      </Typography>

      </Box>
    </Box>
  );
};
export default LoginPage;
