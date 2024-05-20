import { FC } from "react"
import { Link } from "react-router-dom"
import { links } from "./links"
import { socialMediaItems } from "./social"

const Navbar: FC = () => {
	return (
		<div className="flex justify-between px-8 py-4 bg-pink-300 items-center">
			<Link to="/">
				<p className="font-semibold text-xl select-none">Fidan Cooking</p>
			</Link>
			<div className="flex items-center space-x-8">
				{links.map((link, idx) => (
					<Link
						className="transition duration-300 hover:text-slate-200 hover:underline"
						to={link.path}
						key={idx}
					>
						{link.title}
					</Link>
				))}
			</div>
			<div className="flex space-x-2 items-center">
				{socialMediaItems.map((item, idx) => (
					<a
						key={idx}
						className="w-8 h-8"
						href={item.link}
						target="_blank"
					>
						{item.icon}
					</a>
				))}
			</div>
		</div>
	)
}

export default Navbar
