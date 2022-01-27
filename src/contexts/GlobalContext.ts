import React from 'react'
import type { UseManagerState } from '../hooks'
import type { ClassNames, OnInput, OnSelect } from '../sharedTypes'

export type GlobalContextValue = {
  classNames: ClassNames
  // closeMenuOnSelect: boolean
  comboBoxRef: React.MutableRefObject<HTMLDivElement>
  id: string
  inputRef: React.MutableRefObject<HTMLInputElement>
  isDisabled: boolean
  isInvalid: boolean
  listBoxRef: React.MutableRefObject<HTMLDivElement>
  manager: UseManagerState
  onInput: OnInput
  onSelect: OnSelect
  rootRef: React.MutableRefObject<HTMLDivElement>
  tagListRef: React.MutableRefObject<HTMLUListElement>
}

export const GlobalContext = React.createContext<GlobalContextValue>(null)
