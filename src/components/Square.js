import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { asyncToggleTheme } from "../store/reducers/themeSlice";

export default function Square() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const theme = useTheme();

  return (
    <>
    <Typography>I have changed theme to {darkMode ? "Dark" : "Light"} Mode</Typography>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      > 
        
        click on icon<IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(asyncToggleTheme())}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton> 
        <div>
        <p  style={{ color: darkMode ? "cyan" : "#000" }}>Home</p>
        <p style={{ color: darkMode ? "cyan" : "#000" }}>Service</p>
        <p  style={{ color: darkMode ? "cyan" : "#000" }}>Product</p> 
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis harum asperiores consequatur ullam suscipit possimus tempore optio facere. In animi maiores dicta incidunt harum quae accusantium quaerat sapiente eius optio?</p>
    </div>
      </Box>

     
    </>
  );
}