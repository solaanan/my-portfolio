import { createBrowserRouter } from "react-router-dom";
import { PORTFOLIO_ABOUT, PORTFOLIO_HOME } from "./routes";
import { ErrorPage, Root, WelcomePage, AboutPage } from "src/pages";


const router = createBrowserRouter([
  {
    path: PORTFOLIO_HOME,
    element: <Root />,
		errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: PORTFOLIO_ABOUT,
        element: <AboutPage />
      }
    ]
  },
], {
	basename: "/my-portfolio"
});

export default router;