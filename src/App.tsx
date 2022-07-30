
import './shared/components/Form/TranslateErrors';
import { AuthProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Login } from './pages';


export const App = () => {

	return (
		<AuthProvider>
			<BrowserRouter>
				<Login>
					<AppRoutes />
				</Login>
			</BrowserRouter>
		</AuthProvider >
	);
};
