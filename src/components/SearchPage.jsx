import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchPage() {
        const [results, setResults] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");

        const fetchInitialResults = () => {
                fetch("https://themealdb.com/api/json/v1/1/search.php?f=a")
                        .then((response) => response.json())
                        .then((data) => {
                                if (data.meals) {
                                        setResults(data.meals);
                                        localStorage.setItem("results", JSON.stringify(data.meals));
                                }
                        })
                        .catch(() => console.error("Error fetching initial meals"));
        };

        const searchMeals = () => {
                fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                        .then((response) => response.json())
                        .then((data) => {
                                if (data.meals) {
                                        setResults(data.meals);
                                } else {
                                        setResults([]);
                                }
                        })
                        .catch(() => console.error("Error searching meals"));
        };

        useEffect(fetchInitialResults, []);

        return (
                <div className="container">
                        <h1>Search for Meals</h1>
                        <input
                                type="text"
                                placeholder="Enter meal name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input"
                        />
                        <button onClick={searchMeals} className="button">Search</button>
                        <ul className="list">
                                {results.map((meal) => (
                                        <li key={meal.idMeal} className="list-item">
                                                <Link to={`/result/${meal.idMeal}`}>
                                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                                        <h3>{meal.strMeal}</h3>
                                                </Link>
                                        </li>
                                ))}
                        </ul>
                </div>
        );
}

export default SearchPage;
