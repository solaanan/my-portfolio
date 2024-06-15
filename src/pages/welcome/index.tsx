import styles from "/src/styles/welcome.module.scss";
import welcomeImg from "/src/assets/images/welcome.png";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <img src={welcomeImg} alt="" />
      </div>
      <div className={styles.part2}>
        <div className={styles.heading}>Hello, World!</div>
        <div className={styles.lead}>
          Welcome to my portfolio, a culmination of my greatest achievements,
          Make yourself at home!
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
