import { useState } from 'react';

const Login = () => {
    const [inputs, setInputs] = useState({});
    const [isCheck, setCheck] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleChecked = () => {
        setCheck(!isCheck);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi gửi form
        console.log("Dữ liệu:", inputs); // In dữ liệu ra console
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your username:
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
            </label><br />
            <label>Enter your password:
                <input type="password" name="pass" value={inputs.pass || ""} onChange={handleChange} />
            </label><br />
            <label>
                <input type="checkbox" checked={isCheck} onChange={handleChecked} /> Is Admin?
            </label><br />
            <button type="submit">Đăng nhập</button>
        </form>
    );
}
export default Login;
