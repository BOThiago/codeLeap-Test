import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Network from "./pages/Network";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<Home />} />
                        <Route path="/network" element={<Network />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
