"use server";

import axios from "axios";
import Calls from "./axios";

const $Http = Calls(process.env.NEXT_PUBLIC_APIURL);

const getProducts = async () => {
  try {
    const res = await $Http.get(
      `/products?organization_id=${process.env.NEXT_PUBLIC_organization_id}&Appid=${process.env.NEXT_PUBLIC_Appid}&Apikey=${process.env.NEXT_PUBLIC_Apikey}`
    );
    return {
      products: res.data.items,
      message: "product retrieved successfully",
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

const getProductById = async (productId: string) => {
  try {
    const res = await $Http.get(
      `/products/${productId}?organization_id=${process.env.NEXT_PUBLIC_organization_id}&Appid=${process.env.NEXT_PUBLIC_Appid}&Apikey=${process.env.NEXT_PUBLIC_Apikey}`
    );
    return {
      product: res.data,
      message: "product retrieved successfully",
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

export { getProducts, getProductById };
