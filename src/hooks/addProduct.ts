#!/usr/bin/env ts-node
// @ts-nocheck
import axios from "axios";
import FormData from "form-data";
import useEffect from "react";

import React from "react";

const useProduct = () => {
  useEffect(() => {
    async function fetchProduct() {
      const token = "your-token";
      try {
        const { data } = await axios.get(
          "https://api.your-domain.com/products/1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Product fetched", data);
      } catch (error) {
        console.error("Error fetching product");
      }
    }
    fetchProduct();
  });
};

export default addProduct;

interface ProductData {
  name: string;
  organization_id: string;
}

interface StockData {
  buying_price: number;
  currency_code: string;
  organization_id: string;
  product_id: string;
  quantity: number;
  supplier_id: string;
}

interface PriceData {
  currency_code: string;
  friday: boolean;
  monday: boolean;
  organization_id: string;
  price: string;
  product_id: string;
  saturday: boolean;
  sunday: boolean;
  thursday: boolean;
  tuesday: boolean;
  wednesday: boolean;
}

async function createProduct(productData: ProductData, token: string) {
  try {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("organization_id", productData.organization_id);

    const productResponse = await axios.post(
      "https://api.timbu.cloud/products",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const productId = productResponse.data.id;

    const stockData: StockData = {
      buying_price: 50,
      currency_code: "USD",
      organization_id: productData.organization_id,
      product_id: productId,
      quantity: 100,
      supplier_id: "",
    };

    const stockResponse = await axios.post(
      "https://api.timbu.cloud/stocks",
      stockData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const priceData: PriceData = {
      currency_code: "USD",
      friday: true,
      monday: true,
      organization_id: productData.organization_id,
      price: "100",
      product_id: productId,
      saturday: true,
      sunday: true,
      thursday: true,
      tuesday: true,
      wednesday: true,
    };

    const priceResponse = await axios.post(
      "https://api.timbu.cloud/prices",
      priceData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      product: productResponse.data,
      stock: stockResponse.data,
      price: priceResponse.data,
    };
  } catch (error) {
    console.error("Error creating product, stock, or price:", error);
    throw error;
  }
}

async function createMultipleProducts(
  productDataArray: ProductData[],
  token: string
) {
  const results = [];
  for (const productData of productDataArray) {
    try {
      const result = await createProduct(productData, token);

      results.push(result);
    } catch (error) {
      console.error("Error processing product data:", productData, error);
    }
  }
  return results;
}

const products: ProductData[] = [
  {
    name: "Running Shoes",
    organization_id: "43a9286059974972834055ecc7591880",
  },
  {
    name: "Handbag",
    organization_id: "43a9286059974972834055ecc7591880",
  },
  {
    name: "Men's Trousers",
    organization_id: "43a9286059974972834055ecc7591880",
  },
  {
    name: "Women's Blouse",
    organization_id: "43a9286059974972834055ecc7591880",
  },
];

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2UwOWE1YzY5ZDMzNDc5MmJmMDM3MmNmYzcxNGQxZWIiLCJleHAiOjE3MjA3OTkwMzN9.0NOPq84sj5N3hM7Qil6HOpdVZ4bbkF3Xs43B0NhCRgM";

createMultipleProducts(products, token)
  .then((results) => {
    console.log("All products processed:", results);
  })
  .catch((error) => {
    console.error("Error in processing multiple products:", error);
  });
