import Footer from 'common/Footer'
import Header from 'common/Header'
import ToolBar from 'common/ToolBar'

const { Outlet } = require('react-router-dom')

const Layout = () => {
	return (
		//header,toolbar,footer..?
		<>
			<Header />
			<Outlet />
			<Footer />
			<ToolBar />
		</>
	)
}

export default Layout
