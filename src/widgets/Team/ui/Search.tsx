import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import SearchIcon from 'shared/assets/icons/search.svg'
import cls from './Search.module.scss'
import { useEffect, useRef, useState } from 'react'
import { onClickOutsideListener } from 'shared/lib/utils/onClickOutsideListener'

type SearchProps = {
  isOpen: boolean
  onOpenSearch: () => void
  setSearchValue: (value: string) => void
  searchValue: string
}

export const Search: React.FC<SearchProps> = (props) => {
  const { isOpen, onOpenSearch, searchValue, setSearchValue } = props
  const [listenting, setListenting] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(
    onClickOutsideListener(listenting, setListenting, searchRef, onOpenSearch)
  )
  const onSearch = () => {}

  return (
    <div className={cls.searchWrapper}>
      {isOpen ? (
        <div className={cls.inputWrapper}>
          <input
            className={cls.input}
            type="text"
            placeholder="Поиск по Email"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button theme={ButtonTheme.ICON} onClick={onSearch}>
            <SearchIcon />
          </Button>
        </div>
      ) : (
        <Button theme={ButtonTheme.ICON} onClick={onOpenSearch}>
          <SearchIcon />
        </Button>
      )}
    </div>
  )
}
