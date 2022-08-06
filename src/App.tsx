
import './shared/components/Form/TranslateErrors';
import { AppThemeProvider, AuthProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Login } from './pages';


export const App = () => {

	return (
		<AppThemeProvider>
			<AuthProvider>
				<BrowserRouter>
					<Login>
						<AppRoutes />
					</Login>
				</BrowserRouter>
			</AuthProvider >
		</AppThemeProvider>
	);
};
