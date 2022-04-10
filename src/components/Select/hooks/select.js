import { useState } from 'react'
import { nanoid } from "@reduxjs/toolkit";

export const useSelect = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);

    // eslint-disable-next-line
    const [options, setOptions] = useState([
        {region: 'Africa', id: nanoid()},
        {region: 'America', id: nanoid()},
        {region: 'Asia', id: nanoid()},
        {region: 'Europe', id: nanoid()},
        {region: 'Oceania', id: nanoid()},
    ])

    const selectHandler = () => {
        setIsOpen(prev => !prev)
    }

    const onOptionClicked = value => {
        setSelectedOption(value);

        setIsOpen(false);
    };

    return {
        isOpen,
        selectHandler,
        onOptionClicked,
        options,
        selectedOption
    }
}