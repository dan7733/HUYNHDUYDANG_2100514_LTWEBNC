import logo from './logo.svg';
import './App.css';
import Item from './containers/Item';
import Menu from './containers/Menu';
import Button from './containers/Button';
import Information from './containers/Information';
import Hello from './containers/Hello';
import Car from './containers/Car';
import Login from './containers/Login';

function App() {
  const username = "DuyDang"
  const isLogin = true
  return (
    <div className="App">
      <Hello/>
      <Car/>
      <Login/>
      {/* <div>
        <Information username={username}/>
        <Menu/>
        <Button label="Click me"/>
        {!isLogin ? <p>Chưa đăng nhập</p> : <p>Đã đăng nhập</p>}
        <h1>Danh sách liên kết</h1>
        <ul>
          <Item link="https://www.google.com" content="Google" />
          <Item link="https://www.facebook.com" content="Facebook" />
          <Item link="https://www.github.com" content="GitHub" />
        </ul>
      </div> */}
    </div>
  );
}

export default App;
