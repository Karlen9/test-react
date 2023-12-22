import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import SearchIcon from 'shared/assets/icons/search.svg'
import cls from './Search.module.scss'

type SearchProps = {
  isOpen: boolean
  setIsSearchOpen: (val: boolean) => void
  searchValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search: React.FC<SearchProps> = (props) => {
  const { isOpen, setIsSearchOpen, searchValue, handleChange } = props

  return (
    <div className={cls.searchWrapper}>
      {isOpen ? (
        <div className={cls.inputWrapper}>
          <input
            className={cls.input}
            type="text"
            autoFocus
            placeholder="Поиск по Email"
            value={searchValue}
            onChange={handleChange}
          />
          <Button
            theme={ButtonTheme.ICON}
            onClick={() => setIsSearchOpen(false)}
            className={cls.searchIcon}
          >
            <SearchIcon />
          </Button>
        </div>
      ) : (
        <Button
          theme={ButtonTheme.ICON}
          className={cls.singleSearch}
          onClick={() => setIsSearchOpen(true)}
        >
          <SearchIcon />
        </Button>
      )}
    </div>
  )
}
