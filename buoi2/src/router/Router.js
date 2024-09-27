import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // Đảm bảo đường dẫn đúng tới App
import Hello from '../containers/Hello'; // Đảm bảo đường dẫn đúng tới Hello
import Car from '../containers/Car'; // Đảm bảo đường dẫn đúng tới Car
import Login from '../containers/Login'; // Đảm bảo đường dẫn đúng tới Login

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/car",
        element: <Car />
    },
    {
        path: "/hello",
        element: <Hello />
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);
