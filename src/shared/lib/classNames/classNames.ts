export const classNames = (main: string, mods: Record<string, boolean> = {}, additional: string[] = []): string => {
  return [
    main,
    ...Object.entries(mods)
      .filter(([key, val]) => Boolean(val))
      .map(([key, val]) => key),
    ...additional.filter(Boolean)
  ].join(' ')
}
