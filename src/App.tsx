
import './shared/components/Form/TranslateErrors';
import { AppThemeProvider, AuthProvider, ModalMovieInfoProvider } from './shared/contexts';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Login } from './pages';


export const App = () => {

	return (
		<AppThemeProvider>
			<ModalMovieInfoProvider>
				<AuthProvider>
					<BrowserRouter>
						<Login>
							<AppRoutes />
						</Login>
					</BrowserRouter>
				</AuthProvider >
			</ModalMovieInfoProvider>
		</AppThemeProvider>
	);
};
