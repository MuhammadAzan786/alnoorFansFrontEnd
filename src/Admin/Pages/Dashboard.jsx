import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomLineChart from "../components/Grahp";
import DonutChart from "../components/DonutChart";
import LastCustomer from "../components/LastCustomer";
import StackOrderInsideOutChart from "../components/RevnueChart";
import CustomBarChart from "../components/OrderChart";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/Slices/ordrSlice";
import LoadingProcess from "../../customer/pages/LoadingProcess";

const Dashboard = () => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs')); // for small screens like phones
  const isSm = useMediaQuery(theme.breakpoints.down('sm')); // for tablets and small laptops

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
    
    const handleDateChange = (newValue) => {
        setDateRange(newValue);
    }

  return (
    <>
      <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} >

        <Box sx={{ backgroundColor: "white", boxShadow: 3, borderRadius: '8px', gridColumn: isSm ? "1 / 4" : "1 / 3", gridRow: "1/20" }}>
          <Typography variant="h6" sx={{ m: 2 }}>Order Analysis
          </Typography>
          <CustomLineChart dateRange={dateRange}  /></Box>
        <Box sx={{ display: "grid", px: 2, gridTemplateColumns: "repeat(3, 1fr)", alignContent: "center", alignItems: "center", backgroundColor: "white", boxShadow: 3, borderRadius: '8px', gridColumn: "1 / 2", gridRow: isSm ? "24/30" : "21/27" }}>
          <StackOrderInsideOutChart dateRange={dateRange}/>
        </Box>
        <Box sx={{ display: "grid", px: 2, gridTemplateColumns: "repeat(3, 1fr)", alignContent: "center", alignItems: "center", backgroundColor: "white", boxShadow: 3, borderRadius: '8px', gridColumn: "2/3", gridRow: isSm ? "24/30" : "21/27" }}>
          <CustomBarChart dateRange={dateRange}/></Box>

        <Box sx={{ backgroundColor: "white", boxShadow: 3, borderRadius: '8px', gridColumn: isSm ? "1 / 2" : "3 /4", gridRow: isSm ? "21/23" : "1/12" }}><DonutChart dateRange={dateRange}/> </Box>
        <Box sx={{ backgroundColor: "white", boxShadow: 3, borderRadius: '8px', gridColumn: isSm ? "2 / 3" : "3 /4", gridRow: isSm ? "21/23" : "13/27" }}><LastCustomer dateRange={dateRange}/></Box>

      </Box></>
  );
};

export default Dashboard;
