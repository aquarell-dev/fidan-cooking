import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayot from "./components/layouts/root-layout"
import NotFound from "./components/screens/404"
import Home from "./components/screens/home"
import Cakes from "./components/screens/cakes"
import Deserts from "./components/screens/deserts"
import About from "./components/screens/about"

const router = createBrowserRouter([
	{
		element: <RootLayot />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cakes",
				element: <Cakes />,
			},
			{
				path: "/desert",
				element: <Deserts />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
])

const App = () => <RouterProvider router={router} />

export default App
