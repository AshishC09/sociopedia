import { FlexBetween } from "@/components";
import { MenuItem } from "@mui/base";
import {
  DarkMode,
  Help,
  LightMode,
  Message,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputBase,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [toogleMobileNav, setToogleMobileNav] = useState<boolean>(false);
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  return (
    <FlexBetween padding={"1rem 6%"}>
      <FlexBetween>
        <Typography
          fontSize={"clamp(1rem,2rem,2.25rem)"}
          fontWeight={"bold"}
          onClick={() => {}}
          sx={{ "&:hover": { color: "primaryLight", cursor: "pointer" } }}
        >
          Sociopedia
        </Typography>
        {isNonMobileScreen && (
          <FlexBetween
            bgcolor={""}
            borderRadius={"9px"}
            gap={"3rem"}
            padding={".1rem 1.5rem"}
          >
            <InputBase placeholder="Search..."></InputBase>
            <IconButton>
              <Search></Search>
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* Desktop Navigation */}
      {isNonMobileScreen ? (
        <FlexBetween gap={"2rem"}>
          <IconButton onClick={() => {}}>
            {/* Logic for Theme switching */}
            <DarkMode sx={{ fontSize: "25px" }}></DarkMode>
            <LightMode sx={{ color: "", fontSize: "25px" }}></LightMode>
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={"Ed Roh"}>
            <Select
              value={"Ashish Pal"}
              sx={{
                bgcolor: "",
                width: "150px",
                borderRadius: ".25rem",
                p: ".25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  bgcolor: "",
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={""}>
                <Typography>{""}</Typography>
              </MenuItem>
              <MenuItem onClick={() => {}}>Logout</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton></IconButton>
      )}
    </FlexBetween>
  );
};

export default Navbar;
