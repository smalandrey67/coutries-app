import { IoArrowDown, IoArrowUp } from 'react-icons/io5'

import { DropDownContainer, DropDownHeader, DropDownList, ListItem } from '../../styleComponents/Basic/Select.styled'

import { useSelect } from './hooks/select'

export const Select = ({ setSelectedOption, selectedOption }) => {
    const { isOpen, selectHandler, onOptionClicked, options } = useSelect(setSelectedOption)

    return (
        <DropDownContainer>
            <DropDownHeader onClick={selectHandler}>
                {selectedOption || "Filter by Region"}

                {isOpen ? <IoArrowUp /> : <IoArrowDown />}
            </DropDownHeader>

            {isOpen && (
                <DropDownList>
                    {options.map(({ region, id }) => (
                        <ListItem onClick={() => onOptionClicked(region)} key={id}>
                            {region}
                        </ListItem>
                    ))}
                </DropDownList>
            )}
        </DropDownContainer>
    )
}
