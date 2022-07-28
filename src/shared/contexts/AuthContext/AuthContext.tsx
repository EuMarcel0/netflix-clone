import react, { createContext, useCallback, useContext, useState } from 'react';
import { LoginService } from '../../services';
import { IAuthContext, IAuthProvider } from './Types';


export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [token, setToken] = useState<string | undefined>();

	const handleLogin = useCallback(async (email: string, password: string) => {
		const result = await LoginService.getToken(email, password);
		if (result instanceof Error) {
			alert(result.message);
		} else {
			setToken(result.token);
			console.log(result.token);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ login: handleLogin }}>
			{children}
		</AuthContext.Provider >
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
