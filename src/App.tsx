
import { AuthProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Login } from './pages';

export const App = () => {

	return (
		<AuthProvider>
			<Login>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</Login>
		</AuthProvider >
	);
};
