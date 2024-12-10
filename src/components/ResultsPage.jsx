import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ResultsPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [savedResults, setSavedResults] = useState(() => {
        const saved = localStorage.getItem("savedResults");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.meals) {
                    setMeal(data.meals[0]);
                }
            })
            .catch(() => console.error("Error fetching meal details"));
    }, [id]);

    const saveMeal = () => {
        if (!meal) return;

        const updatedSaved = [...savedResults, meal];
        localStorage.setItem("savedResults", JSON.stringify(updatedSaved));
        setSavedResults(updatedSaved);
    };

    if (!meal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <p><strong>Instructions:</strong> {meal.strInstructions}</p>
            <button onClick={saveMeal} className="button">Save to Favorites</button>
            <br />
            <Link to="/">Back to Search</Link>
        </div>
    );
}

export default ResultsPage;
