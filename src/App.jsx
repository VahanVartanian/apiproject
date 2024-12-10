import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ResultPage from "./components/ResultPage";
import SavedResultsPage from "./components/SavedResultsPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/result/:id" element={<ResultPage />} />
                <Route path="/saved" element={<SavedResultsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;