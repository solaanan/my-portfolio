import styles from "/src/styles/pagesIndicator.module.scss";
import * as routes from "/src/router/routes";
import { useMemo } from "react";
import classNames from "classnames";
import { Link, matchPath, useLocation } from "react-router-dom";
import { routesMetadata } from "src/router/routesMetadata";

const PagesIndicator = () => {
	const location = useLocation();
  const routesObject = useMemo<{[key: string]: string}>(
    () => Object.fromEntries(Object.entries(routes)),
    [routes]
  );

  return <div className={styles.container}>{
		Object.entries(routesObject).reverse().map(([key, value] : [string, string]) => {
			return <div key={key} className={classNames(styles.bullet, {
				[styles.selectedBullet]: matchPath(value, location.pathname)
			})}>
				<Link to={value}>
					{routesMetadata.get(value)}
				</Link>
			</div>
		})
	}</div>;
};

export default PagesIndicator;
