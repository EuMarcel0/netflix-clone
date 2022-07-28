import { Button } from '@mui/material';
import { LoginService } from './shared/services';

export const App = () => {

	const handleLogin = async (email: string, password: string) => {
		const result = await LoginService.getToken(email, password);

		console.log(result);
	};

	return (
		<div>
			Hello World
			<Button onClick={() => handleLogin('eve.holt@reqres.in', 'cityslicka')}></Button>
		</div>
	);
};
