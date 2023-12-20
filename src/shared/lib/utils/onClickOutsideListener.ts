export const onClickOutsideListener = (
  listening: boolean,
  setListening: (val: boolean) => void,
  menuRef: React.RefObject<HTMLDivElement>,
  setIsOpen: (val: boolean) => void
) => {
  return () => {
    if (listening) return
    if (menuRef.current === null) return
    setListening(true)
    ;[`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        //@ts-ignore
        if (menuRef.current?.contains(evt.target)) return
        setIsOpen(false)
      })
    })
  }
}
