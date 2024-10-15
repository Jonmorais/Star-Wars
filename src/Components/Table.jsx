import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Table() {
  const {
    data,
    filter,
    filterByNumericValues,
    numericFilterIsActive,
  } = useContext(PlanetContext);

  const { filters: { filterByName: { name } } } = filter;
  const { filterByNumericValues: { column, comparison, value } } = filterByNumericValues;
  console.log(column, comparison, value);

  if (!data) return <h1>May the force be with you...</h1>;

  let filteredPlanetsByNumericValue = [];

  const filterCases = () => {
    const equalCompareFilter = (planet) => Number(planet[column]) === Number(value);
    const biggerThanCompareFilter = (planet) => Number(planet[column]) > Number(value);
    const smallerThanCompareFilter = (planet) => Number(planet[column]) < Number(value);

    if (comparison === 'igual a' && numericFilterIsActive) {
      filteredPlanetsByNumericValue = data
        .filter((planet) => equalCompareFilter(planet));
      return filteredPlanetsByNumericValue;
    }

    if (comparison === 'maior que' && numericFilterIsActive) {
      filteredPlanetsByNumericValue = data
        .filter((planet) => biggerThanCompareFilter(planet));
      return filteredPlanetsByNumericValue;
    }

    if (comparison === 'menor que' && numericFilterIsActive) {
      filteredPlanetsByNumericValue = data
        .filter((planet) => smallerThanCompareFilter(planet));
      return filteredPlanetsByNumericValue;
    }
  };
  filterCases();

  return (
    <table>
      <thead>
        <tr>
          <th>Planets</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      {
        (value === 0 || value === null || value === undefined) && !numericFilterIsActive
          ? data
            .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()))
            .map((planet) => (
              <tbody key={ planet.url }>
                <tr>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              </tbody>
            ))
          : filteredPlanetsByNumericValue
            .filter((planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()))
            .map((planet) => (
              <tbody key={ planet.name }>
                <tr>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              </tbody>
            ))
      }

    </table>
  );
}

export default Table;
