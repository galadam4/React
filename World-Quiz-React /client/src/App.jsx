import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Score from "./components/Score";
import Country from "./components/Country";
import axios from "axios";

function App() {
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter the Capital City')
  const [country, setCountry] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showIcon, setShowIcon] = useState(false);


  // Fetching object from DB, ONCE on mount
  useEffect(() => {
    fetchRandomCountry();
  }, []);

  // Function to fetch random country from server
  async function fetchRandomCountry() {
    try {
      const response = await axios.get("http://localhost:3000/getCountry");
      setCountry(response.data);
    } catch (error) {
      console.error("Error fetching country:", error);
    }
  }

  
  // Function to handle onClick
  async function handleButtonClick(event) {
    event.preventDefault(); //preventing the form default refresh

    // Checking if the user entered a correct answer
    const isCorrectAnswer = 
        userInput.trim().toLowerCase() === country.capital.toLowerCase();

    if (isCorrectAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }

    resetUserInputAndFetchCountry();
  }

  // Function to handle user input, onChange
  function handleInputChange(event) {
    setUserInput(event.target.value);
  } 
  // Function to handle a correct answer
  function handleCorrectAnswer() {
    setUserInput('');
    setPlaceholder("Correct!");
    setScore(score + 1); // Increment score by 1
    setIsCorrect(true); // Set isCorrect to true to show checkmark
    setShowIcon(true); // Show the icon (checkmark)
  }

  // Function to handle an incorrect answer
  function handleIncorrectAnswer() {
    setUserInput('');
    setPlaceholder("False!");
    setScore(0); // Reset score to 0
    setIsCorrect(false); // Set isCorrect to false to show X
    setShowIcon(true); // Show the icon (X)
  }

  // Function to reset user input and fetch a new country after a delay
  function resetUserInputAndFetchCountry() {
    
    setTimeout(() => {
      setShowIcon(false); // Hide icon after 1 second
      fetchRandomCountry();
      setPlaceholder("Enter the capital City");// Fetch a new random country
    }, 1000);
  }

  return (
    <div className="app">
      <form className="container">
        <div className="horizontal-container">
          <Score currentScore={score} />
        </div>
        {country && <Country country={country} />}
        <div className="answer-container">
          <Input value={userInput} onChange={handleInputChange} tempHolder = {placeholder} />
          {showIcon && (
            isCorrect ? (
              <span role="img" aria-label="checkmark">✅</span>
            ) : (
              <span role="img" aria-label="cross">❌</span>
            )
          )}
        </div>
        <Button onClick={handleButtonClick} />
      </form>
    </div>
  );
}

export default App;
