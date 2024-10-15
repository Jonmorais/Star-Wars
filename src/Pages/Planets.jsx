import React from 'react';

import Table from '../Components/Table';
import FilterPlanets from '../Components/FilterPlanets';
import Select from '../Components/Select';

function Planets() {
  return (
    <div>
      <FilterPlanets />
      <Select />
      <Table />
    </div>
  );
}

export default Planets;
