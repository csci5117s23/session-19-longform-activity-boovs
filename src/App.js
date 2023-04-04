//  App.js

////////////////////////////////
// Impports
////////////////////////////////
import './App.css';
import FlashCard from './Flashcard';

//////////////////////////////////
// React app
//////////////////////////////////
function App()
{
  
  // List of flashcard questions/answers
  const flashCardEntries = 
                    [
                      {
                          front: "Question 1: What is react?",
                          back:"Answer 1: Web framework for building apps with components"
                      },
                      {
                          front: "Question 2: What is a component?", 
                          back:"Answer 2: A react component is an independent and reusable piece of code. They work in isolation and return html-like JSX."
                      },
                      {
                          front: "Question 3: What is state?", 
                          back:"Answer 3: A built-in react object that contains data/information about a react component."
                      },
                    ];

  ///////////////////////////////
  // Return JSX Statement
  ///////////////////////////////
  return (
    // <div style={{backgroundColor: "white"}}>
      <div className="App">
        
        {/* Header */}
        <div>
          <h1>Flash Cards</h1>
        </div>
        
        {/* Flashcards */}
        <div>
          <FlashCard flashCardEntries={flashCardEntries} />
        </div>
      
      </div>
    // </div>
  );
  
}

export default App;