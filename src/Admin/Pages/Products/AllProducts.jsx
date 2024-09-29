import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import {
  Box,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

import "./styles.css"; // stylesheet
import ProductsTable from "./ProductsTable";
import { fetchProducts } from "../../../redux/Slices/productsSlice";
const AllProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);

  const handleProductDelete = (productId) => {
    // Filter out the deleted category from the list
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };

  const state = useSelector((state) => state.products);
  useEffect(() => {
    if (state.data) {
      setProducts(state.data.products);
      console.log(state.data.products);
    }
  }, [state.data]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{ color: "#5d737e", fontWeight: "500" }}>
          Products
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        <ProductsTable products={products} onDelete={handleProductDelete} />
      </Box>
    </>
  );
};

export default AllProducts;
