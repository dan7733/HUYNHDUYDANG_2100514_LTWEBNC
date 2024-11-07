import express from "express";
import userModel from '../Models/productModel'  // Import model để xử lý với CSDL hoặc logic nghiệp vụ
const getAllSanPham = async (req, res) => {
    let products = await userModel.getAllSanPham();
    return res.status(200).json({
        errCode: 1,
        message: "Success",
        products: products
    })
}
const deltaProduct = async (req, res) => {
    let data = await userModel.getSanPhamById(req.params.id);
    return res.status(200).json({
      errCode: 1,
      message: "Success",
      deltaProduct: data
    })
  }
export default{ getAllSanPham, deltaProduct };