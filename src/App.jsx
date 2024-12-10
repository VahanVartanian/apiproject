import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ResultsPage from "./components/ResultsPage";
import SavedResultsPage from "./components/SavedResultsPage";
import Navbar from "./components/Navbar";
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/result/:id" element={<ResultsPage />} />
                <Route path="/saved" element={<SavedResultsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;