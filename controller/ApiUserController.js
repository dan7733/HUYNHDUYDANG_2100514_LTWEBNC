import express from "express";
import userModel from '../Models/userModel';

const getAllUsers = async (req, res) => {
  let users = await userModel.getAllUser();
  return res.status(200).json({
    errCode: 1,
    message: "Success",
    users: users
  });
};

const detailUser = async (req, res) => {
  let user = req.params.id;
  let data = await userModel.detailUser(user);
  return res.status(200).json({
    errCode: 1,
    message: "Success",
    users: data
  });
};

export default { getAllUsers, detailUser };
