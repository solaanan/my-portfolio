import { Outlet } from "react-router-dom"
import { EnvIndicator, Navbar } from "src/components"

const Root = () => {
	return (
		<div>
			<EnvIndicator />
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Root
