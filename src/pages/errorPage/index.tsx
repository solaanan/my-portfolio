import styles from "src/styles/errorPage.module.scss";
import classNames from "classnames";
import { ErrorPageProps } from "./types";
import Logo from "src/assets/images/solaanan.svg?react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useMemo } from "react";
import { errorObjectFromErrorCode } from "src/helpers/utils";

const ErrorPage = ({ error }: ErrorPageProps) => {
  const routeError = useRouteError();

  const {
    errorMessage,
    errorTitle,
    errorCode,
    emoji,
  } = useMemo(() => {
    let message: string | undefined;
    let code: number | undefined;

    if (error) {
      return error;
    } else if (routeError && isRouteErrorResponse(routeError)) {
      message = routeError.statusText || routeError.data?.message;
      code = routeError.status || routeError.data?.code;
    } else if (routeError instanceof Error) {
      message = routeError.message;
    } else if (typeof routeError === "string") {
      message = routeError;
    }
    const savedError = errorObjectFromErrorCode(code);

    return {
      errorMessage: savedError.errorMessage,
      errorTitle: message || savedError.errorTitle,
      errorCode: code,
      emoji: savedError.emoji
    }
  }, [error, routeError]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={classNames(styles.part, styles.emojisPart)}>
          {[emoji, emoji, emoji].map((emoji, index) => (
            <div key={index} className={styles[`emoji${index + 1}`]}>
              {emoji}
            </div>
          ))}
        </div>
        <div className={classNames(styles.part, styles.errorPart)}>
          {!!errorCode && <div className={styles.errorCode}>{errorCode}</div>}
          <div className={styles.errorTitle}>{errorTitle}</div>
          <div className={styles.errorMessage}>{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
