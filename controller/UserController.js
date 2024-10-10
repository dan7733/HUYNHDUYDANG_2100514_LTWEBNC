import express from "express";
import userModel from '../Models/userModel';  // Import model để xử lý với CSDL hoặc logic nghiệp vụ

// Controller để lấy tất cả người dùng
const getAllUser = async (req, res) => {
  try {
    let userList = await userModel.getAllUser(); // Gọi model để lấy danh sách người dùng
    res.render('home', { 
      data: { 
        title: 'List User', 
        page: 'listUser', 
        rows: userList // Truyền dữ liệu vào view
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users.");
  }
}

// Controller để tạo người dùng mới
const createUser = (req, res) => {
  res.render('home', { 
    data: { 
      title: 'Create New User', 
      page: 'createNewUser' 
    }
  });
}

// Xuất các hàm controller để sử dụng trong routing
export  { getAllUser, createUser };
