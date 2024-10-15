import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsState, planetsSetState] = useState();
  const [numericFilterIsActive, setNumericFilterIsActive] = useState(false);
  const [usedOption, setUsedOption] = useState('');

  const filterByNameStructure = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const filterByNumericValuesStructure = {
    filterByNumericValues:
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
  };

  const [filter, setFilter] = useState(filterByNameStructure);

  const [
    filterByNumericValues,
    setFilterByNumericValues,
  ] = useState(filterByNumericValuesStructure);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      planetsSetState(data.results);
    }
    fetchData();
  }, []);

  const planetAppStructure = {
    data: planetsState,
    filter,
    setFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    numericFilterIsActive,
    setNumericFilterIsActive,
    usedOption,
    setUsedOption,
  };

  return (
    <main>
      <PlanetContext.Provider value={ planetAppStructure }>
        { children }
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
