import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value }, () => this.inputValidation);
  };

  isInputValid = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    const isCardName = cardName.length > 0;
    const isCardDescription = cardDescription.length > 0;
    const isCardImage = cardImage.length > 0;
    if (isCardName && isCardDescription && isCardImage) {
      return true;
    }
  };

  isInputNumberValid = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxValue = 90;
    const totalMaxValue = 210;
    const isSumValid = (
      Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)) <= totalMaxValue;

    const maxValuesCard = Number(cardAttr1) <= maxValue
     && Number(cardAttr2) <= maxValue
     && Number(cardAttr3) <= maxValue;

    const verifyNegativeValue = Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0
    && Number(cardAttr3) >= 0;

    if (isSumValid && maxValuesCard && verifyNegativeValue) {
      return true;
    }
  };

  inputValidation = () => {
    if (this.isInputValid() && this.isInputNumberValid()) {
      this.setState({ isSaveButtonDisabled: false });
      return;
    }

    this.setState({ isSaveButtonDisabled: true });
  };

  onSaveButtonClick = () => {};

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
