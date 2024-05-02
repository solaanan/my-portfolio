import styles from "/src/styles/envIndicator.module.scss";

const EnvIndicator = () => {
	const env = import.meta.env.VITE_PORTFOLIO_ENVIROMENT;

	return (
		<div className={styles.env_indicator}>
			env: {env}
		</div>
	)
}

export default EnvIndicator
