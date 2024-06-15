import { Outlet } from "react-router-dom"
import { EnvIndicator, Navbar, PagesIndicator } from "src/components"

const Root = () => {
	return (
		<div>
			<EnvIndicator />
			<Navbar />
			<Outlet />
			<PagesIndicator />
		</div>
	)
}

export default Root
