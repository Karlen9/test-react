type Mods = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods?: Mods,
  additional?: string[]
): string => {
  if (additional == null || mods == null) {
    return cls
  }
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}
