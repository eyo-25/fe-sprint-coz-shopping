import styled from "styled-components";
import { filterOptions } from "./filterOptions";
import FilterListItem from "./FilterListItem";

interface IFilterListProps {
  selectedType: string;
  handleFilterSelected: (type: string) => void;
}

function FilterList({ selectedType, handleFilterSelected }: IFilterListProps) {
  return (
    <FilterListContainer>
      <FilterListUl listLength={filterOptions.length}>
        {filterOptions.map((filterItem) => (
          <FilterListItem
            key={filterItem.title}
            filterItem={filterItem}
            selectedType={selectedType}
            handleFilterSelected={handleFilterSelected}
          />
        ))}
      </FilterListUl>
    </FilterListContainer>
  );
}

export default FilterList;

const FilterListContainer = styled.section`
  margin-bottom: 45px;
`;
const FilterListUl = styled.ul<{ listLength: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.listLength}, 1fr);
  grid-gap: 36px;
  justify-items: center;
`;
