import { IoSearch } from 'react-icons/io5'

import { Label, Input } from "../../styleComponents/Basic/Search.styled"

export const Search = () => {
    return (
      <Label>
          <IoSearch />
          <Input autoComplete='off'/>
      </Label>
    )
}
