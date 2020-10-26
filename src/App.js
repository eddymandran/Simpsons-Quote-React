import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const firstQuote = [
  {
    quote:
      'Shoplifting is a victimless crime, like punching someone in the dark.',
    character: 'Nelson Muntz',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
    characterDirection: 'Left',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: firstQuote };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          quote: data,
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <QuoteCard quote={this.state.quote} />
        <button type='button' onClick={this.getQuote}>
          Get new quote
        </button>
      </div>
    );
  }
}

export default App;
