import { Multiselect as Select } from 'multiselect-react-dropdown'
import Arrow from 'shared/assets/icons/arrow.svg'

const options = [
  { id: 1, name: 'Модерация объявлений' },
  { id: 2, name: 'Блог' },
  { id: 3, name: 'Тех. поддержка' },
  { id: 4, name: 'Обращение клиентов' },
  { id: 5, name: 'Аналитика' },
  { id: 6, name: 'Акции' },
  { id: 7, name: 'Администратор'}
]

type CustomSelectProps = {
  selectedPermissions: { name: string; id: number }[]
  setSelectedPermissions: (permissions: { name: string; id: number }[]) => void
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  selectedPermissions,
  setSelectedPermissions
}) => {
  const onSelect = (selectedList: { name: string; id: number }[]) => {
    setSelectedPermissions(selectedList)
  }
  return (
    <Select
      options={options}
      showCheckbox
      selectedValues={selectedPermissions}
      displayValue="name"
      placeholder="Выберите права доступа"
      showArrow
      customArrow={<Arrow />}
      avoidHighlightFirstOption
      onSelect={(selectedList) => onSelect(selectedList)}
      onRemove={(selectedList) => onSelect(selectedList)}
    />
  )
}
