import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
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
      // hasFrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form id="form">

        <label htmlFor="cardName">
          <input
            data-testid="name-input"
            id="cardName"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descriptionCard">
          <textarea
            type="textarea"
            data-testid="description-input"
            id="descriptionCard"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="urlImage">
          <input
            type="text"
            data-testid="image-input"
            id="urlImage"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRarity">
          <select
            data-testid="rare-input"
            id="cardRarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super">
          SuperTrunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="superTrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
          name="save"
          id="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
