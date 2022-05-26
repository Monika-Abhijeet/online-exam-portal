import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import UserHome from "./pages/userHome/userHome";
import Footer from "./components/footer/footer";
import "./App.css";
import TakeTest from "./pages/take-test/take-test";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="test" element={<TakeTest />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
