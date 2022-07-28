
import { AuthProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './shared/components';
import { AppRoutes } from './routes';

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
