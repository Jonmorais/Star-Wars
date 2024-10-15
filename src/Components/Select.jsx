import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Select() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setNumericFilterIsActive,
    usedOption,
    setUsedOption,
  } = useContext(PlanetContext);

  const comparisonOptions = [
    <>
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </>,
  ];

  const { filterByNumericValues: { column, comparison, value } } = filterByNumericValues;

  const removeUsedOptions = () => {
    const options = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return options.map((option) => {
      if (usedOption !== option) {
        return (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        );
      }
      return null;
    });
  };

  const handleClick = () => {
    setFilterByNumericValues({
      filterByNumericValues: {
        ...filterByNumericValues.filterByNumericValues,
      } });
    setNumericFilterIsActive(true);
    setUsedOption(column);
  };

  return (
    <div>
      <form>
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            id="column-filter"
            onChange={ ({ target }) => setFilterByNumericValues({
              filterByNumericValues: {
                ...filterByNumericValues.filterByNumericValues,
                column: target.value,
              } }) }
            value={ column }
          >
            { removeUsedOptions() }
          </select>
        </label>

        <label htmlFor="comparison-filter">
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            onChange={ ({ target }) => setFilterByNumericValues({
              filterByNumericValues: {
                ...filterByNumericValues.filterByNumericValues,
                comparison: target.value,
              } }) }
            value={ comparison }
          >
            { comparisonOptions }
          </select>
        </label>

        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          onChange={ ({ target }) => setFilterByNumericValues({
            filterByNumericValues: {
              ...filterByNumericValues.filterByNumericValues,
              value: target.value,
            } }) }
          value={ value }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filter
        </button>
      </form>
    </div>
  );
}

export default Select;
