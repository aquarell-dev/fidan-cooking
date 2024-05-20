import { FC } from "react"
import FidanLogo from "../../../assets/fidan.jpg"
import Portfolio from "./components/portfolio"

const Home: FC = () => {
	return (
		<div className="flex flex-col">
			<img
				src={FidanLogo}
				className="max-h-96"
			/>
			<Portfolio />
		</div>
	)
}

export default Home
