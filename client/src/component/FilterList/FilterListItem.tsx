import styled from "styled-components";

interface IFilterOption {
  title: string;
  type: string;
  imageSrc: string;
}

interface IFilterListItemProps {
  selectedType: string;
  filterItem: IFilterOption;
  handleFilterSelected: (type: string) => void;
}

function FilterListItem({
  filterItem,
  selectedType,
  handleFilterSelected,
}: IFilterListItemProps) {
  return (
    <FilterItemContainer onClick={() => handleFilterSelected(filterItem.type)}>
      <Image src={filterItem.imageSrc} alt={filterItem.title + "사진"}></Image>
      <FilterListTitle isSelected={selectedType === filterItem.type}>
        {filterItem.title}
      </FilterListTitle>
    </FilterItemContainer>
  );
}

export default FilterListItem;

const FilterItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    h5 {
      color: #452cdd;
      color: #452cdd;
      border-bottom: 3.5px solid #452cdd;
    }
  }
`;
const Image = styled.img<{ src: string }>`
  width: 82px;
  height: 82px;
  margin-bottom: 10px;
  background: url(${(props) => props.src}) 100% / cover no-repeat;
  cursor: pointer;
`;
const FilterListTitle = styled.h5<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "#452cdd" : "black")};
  cursor: pointer;
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: ${(props) => props.isSelected && "3.5px solid #452cdd"};
`;
