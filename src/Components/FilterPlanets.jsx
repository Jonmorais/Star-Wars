import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function FilterPlanets() {
  const { filter, setFilter } = useContext(PlanetContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Search for a planet by name"
      onChange={ ({ target }) => setFilter({
        ...filter,
        filters: {
          filterByName: {
            name: target.value,
          },
        },
      }) }
    />
  );
}

export default FilterPlanets;
