import express from "express";
import userModel from '../Models/categoryModel'  // Import model để xử lý với CSDL hoặc logic nghiệp vụ
const getAllNhom = async (req, res) => {
    let categorys = await userModel.getAllNhom();
    return res.status(200).json({
        errCode: 1,
        message: "Success",
        categorys: categorys
    })
}
export default{ getAllNhom };