export type PortfolioError = Readonly<{
    errorCode?: number;
    errorTitle: string;
    errorMessage?: string;
    emoji?: string;
}>