import { useCallback, useContext } from 'react'
import { GlobalContext } from '../contexts'
import { comboBoxId } from '../lib'
import type React from 'react'

export type UseComboBoxState = React.ComponentPropsWithRef<'div'>

export function useComboBox(): UseComboBoxState {
  const { comboBoxRef, id, manager } = useContext(GlobalContext)

  const onBlur = useCallback(
    (e: React.FocusEvent) => {
      if (!comboBoxRef.current?.contains(e.relatedTarget)) {
        manager.collapse()
        manager.clearActiveIndex()
      }
    },
    [comboBoxRef, manager]
  )

  const onFocus = useCallback(() => manager.expand(), [manager])

  return {
    id: comboBoxId(id),
    onBlur,
    onFocus,
    ref: comboBoxRef,
  }
}
