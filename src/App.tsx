
import { AuthProvider, useAuthContext } from './shared/contexts';
import { Login } from './shared/components';

export const App = () => {

	return (
		<AuthProvider>
			<Login />
		</AuthProvider >
	);
};
