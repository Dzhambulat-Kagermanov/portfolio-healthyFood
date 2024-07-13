import { FC } from 'react'
import classes from './Social.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import SocialCard from 'components/widgets/SocialCard/SocialCard'
import Base from 'shared/ui/Base/Base'

interface ISocialProps extends IClassName {}
const Social: FC<ISocialProps> = ({ className }) => {
  return (
    <Base innerClass={classNames(classes.social, {}, [className])}>
      <DoubleTitle backTitleSize='medium' backTitle='Social' className={classNames(classes.title)}>
        We in Social
      </DoubleTitle>
      <ul className={classNames(classes.group)}>
        <SocialCard
          tag='li'
          socialImg='images/Social/twitter.svg'
          socialName='Twitter'
          className={classNames(classes.item, {}, [classes.twitter])}
          contentClass={classes.content}
        >
          <h4>24 Jun at 16:20 pm</h4>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
            dolor sit amet, consectetur adipiscing
          </h2>
          <h3>@DennisFerguson</h3>
        </SocialCard>
        <SocialCard
          tag='li'
          socialImg='images/Social/instagram.svg'
          socialName='Instagram'
          className={classNames(classes.item, {}, [classes.instagram])}
          contentClass={classes.content}
          contentTag='ul'
        >
          <li className={classNames(classes.contentItem)}>
            <img src='images/Social/instagram-item-1.png' alt='instagram image' />
          </li>
          <li className={classNames(classes.contentItem)}>
            <img src='images/Social/instagram-item-2.png' alt='instagram image' />
          </li>
          <li className={classNames(classes.contentItem)}>
            <img src='images/Social/instagram-item-3.png' alt='instagram image' />
          </li>
          <li className={classNames(classes.contentItem)}>
            <img src='images/Social/instagram-item-4.png' alt='instagram image' />
          </li>
          <li className={classNames(classes.contentItem)}>
            <img src='images/Social/instagram-item-5.png' alt='instagram image' />
          </li>
          <li className={classNames(classes.contentItem)}>
            <img src='images/Social/instagram-item-6.png' alt='instagram image' />
          </li>
        </SocialCard>
        <SocialCard
          socialImg='images/Social/facebook.svg'
          socialName='Facebook'
          className={classNames(classes.item, {}, [classes.facebook])}
          contentClass={classes.content}
        >
          <h4>24 Jun at 16:20 pm</h4>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
            dolor sit amet, consectetur adipiscing
          </h2>
        </SocialCard>
      </ul>
    </Base>
  )
}

export default Social
