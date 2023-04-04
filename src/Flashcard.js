// Flashcard.js
import {useState} from 'react'

// Flashcard component
export default function FlashCard({flashCardEntries}) 
{
    /////////////////////////////////////////////////
    // --- CSS Tags for flash card front & back ---
    /////////////////////////////////////////////////
	const frontClassTags  = "flashCard front";
    const backClassTags   = "flashCard back";
    
    /////////////////////////
    // --- State hooks ---
    /////////////////////////
    // Hooks for flipping front to back & switching cards (previous/next)
    const [cardIndex, setCardIndex] = useState(0);
    const [cardSide, setCardSide] = useState('front');
    const [flashcardCSS, setFlashCardCSS] = useState(frontClassTags);

    /////////////////////////////
    // --- Helper functions ---
    /////////////////////////////
    // - Function to flip card -
	function flipCard() 
    {
        // On "flip" button click, switch boolean indicating card is flipped
        const front = 'front';
        const back = 'back';

        // If front facing, switch to back
        if (cardSide === front)
        {
            setCardSide('back');
            setFlashCardCSS(backClassTags);
        }
        // If back facing, switch to front
        else if (cardSide === back)
        {
            setCardSide('front');
            setFlashCardCSS(frontClassTags);
        }
	}
	

    // - Function to get previous card in line -
    function previousCard()
    {   
        // Decrement card index by 1
        let prevCardIndex = cardIndex - 1;
        // If previous card index is below list beginning, set to last
        if (prevCardIndex < 0)
        {
            prevCardIndex = flashCardEntries.length-1;
        }
        setCardIndex(prevCardIndex);
    }


    // - Function to get next card in line -
    function nextCard()
    {
        // Decrement card index by 1
        let nextCardIndex = cardIndex + 1;
        // If previous card index is below list beginning, set to last
        if (nextCardIndex >= flashCardEntries.length)
        {
            nextCardIndex = 0;
        }
        setCardIndex(nextCardIndex);
    }
    


    ///////////////////////////////
    // Return JSX statement
    ///////////////////////////////
	return <>
        {/* Container for flashcard content */}
        <div className={flashcardCSS}> 
            {flashCardEntries[cardIndex][cardSide]} 
            {/* {cardToShow} */}
        </div>

        <br/>

        {/* Button to flip flashcard */}
        <button onClick={flipCard}>
            Flip!
        </button>

        {/* Buttons for previous/next flashcard */}
        <div>
            <button onClick={previousCard}>
                Previous
            </button>

            <button onClick={nextCard}>
                Next
            </button>
        </div>
	</>
}