import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppSelector } from 'shared/hooks/reduxHooks'
import useModal from 'shared/hooks/useModal'
import { toggleModal } from 'app/providers/store/modal/modalSlice'
import Input from 'shared/ui/Input/Input'
import DropdownItem from 'shared/ui/Dropdown/DropdownItem/DropdownItem'
import Dropdown from 'shared/ui/Dropdown/Dropdown'
import Button from 'shared/ui/Button/Button'
import classes from './Modal.module.scss'

interface IBurgerMenuProps extends IClassName {}

const Modal: FC<IBurgerMenuProps> = ({ className }) => {
  const modalSelector = useAppSelector((state) => state.modal.modalState)
  const modal = useModal(toggleModal.type)

  return (
    <section>
      <Base
        containerClass={classNames(classes.container, { [classes.activeModal]: modalSelector })}
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
        <form action='' method='post' className={classNames(classes.form)}>
          <Input className={classNames(classes.input)} placeholder='Your name' />
          <Input className={classNames(classes.input)} placeholder='Your phone' />
          <Input className={classNames(classes.input)} placeholder='Your mail' />
          <Input className={classNames(classes.input)} placeholder='Order date' />
          <Dropdown className={classNames(classes.dropdown)} placeholder='Select the purpose of your visit'>
            <DropdownItem>
              <h2>Have dinner</h2>
            </DropdownItem>
            <DropdownItem>
              <h2>Arrange a banquet</h2>
            </DropdownItem>
          </Dropdown>
          <Dropdown className={classNames(classes.dropdown)} placeholder='Additional questions'>
            <DropdownItem>
              <h2>With children</h2>
            </DropdownItem>
            <DropdownItem>
              <h2>Without children</h2>
            </DropdownItem>
          </Dropdown>
          <Button type='submit' size='medium' className={classNames(classes.btnSubmit)}>
            Confirm
          </Button>
        </form>
      </Base>
    </section>
  )
}

export default Modal
