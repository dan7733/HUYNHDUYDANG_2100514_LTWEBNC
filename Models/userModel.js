import pool from '../configs/connectDatabase'
const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}

const createNewUser = () => {
    // Implementation here
}

export default { getAllUser, createNewUser }