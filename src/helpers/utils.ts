import { ERRORS } from "./consts"

export const errorObjectFromErrorCode = (code? : number) => {
	const fallbackError = {
		errorMessage: "Unexpected error has occured.",
		errorTitle: "Unknown Error",
		emoji: "😓"
	}

	if (!code) {
		return fallbackError
	} else if (Object.keys(ERRORS).findIndex(errorCode => errorCode === code.toString())) {
		return ERRORS[code.toString()];
	} else {
		return fallbackError;
	}
}

export const divideEntries = <T>(entries: T[]) => {
  const halfLength = Math.floor(entries.length / 2);
  return [
    entries.slice(0, halfLength),
    entries.slice(halfLength),
  ];
}