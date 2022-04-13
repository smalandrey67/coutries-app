import { IoSearch } from 'react-icons/io5'

import { Label, Input } from "../../styleComponents/Basic/Search.styled"

export const Search = ({ setTerm }) => {
  
    const searchHandler = (e) => {
      setTerm(e.target.value)
    }

    return (
      <Label>
        <IoSearch />
        <Input onChange={searchHandler} autoComplete='off' />
      </Label>
    )
}
