import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppSelector } from 'shared/hooks/reduxHooks'
import useModal from 'shared/hooks/useModal'
import { toggleModal } from 'app/providers/store/modal/modalSlice'
import Button from 'shared/ui/Button/Button'
import classes from './Modal.module.scss'
import Form from './Form/Form'

interface IBurgerMenuProps extends IClassName {}

const Modal: FC<IBurgerMenuProps> = ({ className }) => {
  const modalSelector = useAppSelector((state) => state.modal.modalState)
  const modal = useModal(toggleModal.type)
  const completeStateSelector = useAppSelector((state) => state.complete.state)

  return (
    <section>
      <Base
        containerClass={classNames(classes.container, {
          [classes.activeModal]: modalSelector,
          [classes.completeModal]: completeStateSelector
        })}
        innerClass={classNames(classes.modal, {}, [className])}
      >
        <Button
          circle
          theme='clear'
          className={classNames(classes.closeBtn)}
          onClick={() => {
            modal()
          }}
        >
          <img src='images/close.svg' alt='close' />
        </Button>
        <h2 className={classNames(classes.title)}>Order Form</h2>
        <Form />
      </Base>
    </section>
  )
}

export default Modal
