import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Privacy from './components/Privacy';
import NotFound from './components/NotFound';
import {Route, Routes} from "react-router-dom";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import FirstPaint from './components/detail_paintings/tss'
import SecondPaint from "./components/detail_paintings/s";
import ThirdPaint from "./components/detail_paintings/i";
const App: React.FC = () => {
    return (

            <div>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="home">
                        <Link to="/">Biography</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">Best painting</Link>
                    </Menu.Item>
                    <Menu.Item key="privacy">
                        <Link to="/privacy">Collection</Link>
                    </Menu.Item>
                    <Menu.Item key="404">
                        <Link to="/404">404</Link>
                    </Menu.Item>
                </Menu>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>} />
                        <Route path={"/about"} element={<About/>} />
                        <Route path={"/privacy"} element={<Privacy/>} />
                        <Route path="*" element={<NotFound/>} />
                        <Route path="/painting/tss" element={<FirstPaint/>} />
                        <Route path="/painting/s" element={<SecondPaint/>} />
                        <Route path="/painting/i" element={<ThirdPaint/>} />
                    </Route>
                </Routes>
            </div>

    );
};

export default App;
