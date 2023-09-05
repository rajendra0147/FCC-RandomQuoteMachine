import { useState } from 'react'
import quotes from "./assets/quotes.json"
import {FaTwitter, FaQuoteRight, FaQuoteLeft} from "react-icons/fa";
import './App.css'

interface Quote {
  quote:String;
  author:String;
}

const getRandomQuote = () : Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = () : string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`
}

const transition = `all 1s`

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor)
  }

  return (
    <div className="background" style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box" >
        <div className="quote-content" style={{color: randomColor, transition}}>
          <h2 id="text" >
            <FaQuoteLeft size="30" style={{marginRight: "10px"}}> </FaQuoteLeft>
            { quote.quote }
            <FaQuoteRight size="30" style={{marginLeft: "10px"}}> </FaQuoteRight>
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture%20the%20heart.%22%20%20Ancient%20Indian%20Proverb`}
          id="tweet-quote"
          style={{
            backgroundColor: randomColor,
            marginRight: "10px",
            transition
          }}>
            <FaTwitter color="white" ></FaTwitter>
          </a>
          <button id="new-quote"  onClick={changeQuote}  style={{
            backgroundColor: randomColor,
            transition
            }}>
            Change Quotes
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
