//=========================================================================================================================================
//Exercise useMemo
/*
import React, { useMemo } from 'react';

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default FilteredList;
*/