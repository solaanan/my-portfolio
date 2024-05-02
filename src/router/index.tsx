import { createBrowserRouter } from "react-router-dom";
import { PORTFOLIO_HOME } from "./routes";
import { ErrorPage, Root } from "src/pages";


const router = createBrowserRouter([
  {
    path: PORTFOLIO_HOME,
    element: <Root />,
		errorElement: <ErrorPage />
  },
], {
	basename: "/my-portfolio"
});

export default router;