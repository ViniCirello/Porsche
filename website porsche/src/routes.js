import Home from "./pages/Home/home";
import Side from "./components/Side-bar/side-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/side" element={<Side/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Rotas;