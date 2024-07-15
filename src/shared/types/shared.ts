import { ReactNode } from 'react'

export interface IClassName {
  className?: string
}
export interface IChildren {
  children: ReactNode
}
export interface ITag {
  tag?: any
}
export type TAnyKeys = { [key: string]: string }
export type FP_Object<T, R> = (params: T) => R
