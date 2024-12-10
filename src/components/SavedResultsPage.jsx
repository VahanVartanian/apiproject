import { useState } from "react";
import { Link } from "react-router-dom";

function SavedResultsPage() {
    const [savedResults, setSavedResults] = useState(() => {
        const saved = localStorage.getItem("savedResults");
        return saved ? JSON.parse(saved) : [];
    });

    const removeMeal = (index) => {
        const updatedSaved = savedResults.filter((_, i) => i !== index);
        localStorage.setItem("savedResults", JSON.stringify(updatedSaved));
        setSavedResults(updatedSaved);
    };

    return (
        <div className="container">
            <h1>Saved Meals</h1>
            <ul className="list">
                {savedResults.map((meal, index) => (
                    <li key={meal.idMeal} className="list-item">
                        <Link to={`/result/${meal.idMeal}`}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h3>{meal.strMeal}</h3>
                        </Link>
                        <button onClick={() => removeMeal(index)} className="button remove">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SavedResultsPage;
