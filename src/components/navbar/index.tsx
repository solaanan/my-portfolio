import { divideEntries } from "src/helpers/utils";
import { NavbarProps } from "./types";
import Logo from "/src/assets/images/logo.svg?react";
import styles from "src/styles/navbar.module.scss";
import { Link, matchPath, useLocation } from "react-router-dom";
import classNames from "classnames";

const navbarEntries = [
  {
    label: "About me",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact me",
    path: "/contact",
  },
];

const [leftEntries, rightEntries] = divideEntries(navbarEntries);

const Navbar = ({}: NavbarProps) => {
  const location = useLocation();

  console.log(matchPath("/about", location.pathname))
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        {leftEntries.map((entry) => (
          <div key={entry.path} className={classNames(styles.navbar_entry, {
            [styles.navbar_entry_selected]: matchPath(entry.path, location.pathname)
          })}>
            <Link to={entry.path}>{entry.label}</Link>
          </div>
        ))}
      </div>
      <div className={styles.navbar_center}>
        <div className={styles.navbar_logo}>
          <Logo />
        </div>
      </div>
      <div className={styles.navbar_right}>
        {rightEntries.map((entry) => (
          <div key={entry.path} className={classNames(styles.navbar_entry, {
            [styles.navbar_entry_selected]: matchPath(entry.path, location.pathname)
          })}>
            <Link to={entry.path}>{entry.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
