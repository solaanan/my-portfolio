import { PORTFOLIO_ABOUT, PORTFOLIO_HOME } from "./routes";

export const routesMetadata : Map<string, string> = new Map(Object.entries({
	[PORTFOLIO_HOME]: "Home",
	[PORTFOLIO_ABOUT]: "About",
}))