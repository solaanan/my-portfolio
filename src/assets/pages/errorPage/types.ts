
export type ErrorPageProps = Readonly<{
  error: {
    errorCode?: number;
    errorTitle: string;
    errorMessage: string;
    emoji?: string;
  }
}>