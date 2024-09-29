import { Typography, Box } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom"; // Import Zoom from react-reveal
import { certificate } from "../imports";
const Certified = () => {
  return (
    <Box
      className="certified-container"
      sx={{ textAlign: "center", my: { xs: 6, sm: 12, md: 14 } }}
    >
      {/* Heading */}
      <Typography
        className="archive text-[#bd3d39]"
        sx={{
          fontSize: {
            lg: "2.3rem",
            md: "2.2rem",
            sm: "1.9rem",
            xs: "1.8rem",
          },
          fontWeight: "bold",
          mb: { xs: 4, sm: 6 }, // Margin bottom for spacing
        }}
      >
        Certification
      </Typography>

      {/* Certification Image with Zoom effect */}
      <Zoom>
        <Box
          component="img"
          src={certificate} // Replace with actual image path
          alt="Certification"
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%" }, // Responsive width
            maxWidth: "600px",
            height: "auto",
            margin: "0 auto", // Center the image
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)", // Zoom effect on hover
            },
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for better visual effect
            borderRadius: "8px", // Rounded corners for the image
          }}
        />
      </Zoom>
    </Box>
  );
};

export default Certified;
