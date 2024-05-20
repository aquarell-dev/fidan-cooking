import { FC } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../ui/navbar"

const RootLayot: FC = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default RootLayot
