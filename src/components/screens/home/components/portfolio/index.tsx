import { FC } from "react"

const Portfolio: FC = () => {
	return (
		<div className="grid grid-cols-3 place-items-center my-8 gap-8">
			{Array.from({ length: 9 }).map((el, idx) => (
				<img src="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece" />
			))}
		</div>
	)
}

export default Portfolio
