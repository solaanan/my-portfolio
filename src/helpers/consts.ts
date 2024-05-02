import errors from "src/assets/resources/errors.json";
import { PortfolioError } from "./types";

export const ERRORS : {
	[key: string]: PortfolioError
} = errors;