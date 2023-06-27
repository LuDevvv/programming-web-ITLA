import { useState } from 'react';

export const useFilter = (initialFilter) => {
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return {
    selectedFilter,
    handleFilterChange,
  };
};
