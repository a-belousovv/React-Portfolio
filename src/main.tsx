import ReactDOM from 'react-dom/client'
import './assets/styles/main/main-styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.tsx'
import NotFoundPage from './pages/NotFountPage/NotFoundPage.tsx'
import AboutPage from './pages/AboutPage/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.tsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import { store } from './redux/store/store.ts'
const router = createBrowserRouter([
	{ element: <MainPage />, path: '/' },
	{ element: <AboutPage />, path: '/about' },
	{ element: <ProjectsPage />, path: '/projects' },
	{ element: <ContactsPage />, path: '/contacts' },
	{ element: <NotFoundPage />, path: '*' },
])

const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<QueryClientProvider client={client}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</Provider>
)
