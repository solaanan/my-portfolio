import styles from "src/styles/errorPage.module.scss"
import classNames from 'classnames'
import { ErrorPageProps } from './types'
import Logo from '/src/assets/solaanan.svg?react'

const ErrorPage = ({
  error: {
    errorTitle,
    errorCode,
    errorMessage,
    emoji
  }
}: ErrorPageProps) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
          <div className={classNames(styles.part, styles.emojisPart)}>
            {
              [emoji, emoji, emoji].map((emoji, index) => (
                <div key={index} className={styles[`emoji${index + 1}`]}>
                  {emoji}
                </div>
              ))
            }
          </div>
          <div className={classNames(styles.part, styles.errorPart)}>
            {
              !!errorCode && (
                <div className={styles.errorCode}>
                  {errorCode}
                </div>
              )
            }
            <div className={styles.errorTitle}>
              {errorTitle.split(" ").map((el, i) => (
                <div key={i}>{el}</div>
              ))}
            </div>
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          </div>
      </div>
    </div>
  )
}

export default ErrorPage
