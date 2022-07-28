import react, { createContext, useCallback, useContext, useMemo, useState } from 'react';
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
	}, [token]);

	const handleLogout = useCallback(() => {
		if (token) {
			setToken(undefined);
			console.log(token);
		}
	}, [token]);

	const isAuthenticated = useMemo(() => token !== undefined, [token]);

	return (
		<AuthContext.Provider value={{ login: handleLogin, logout: handleLogout, isAuthenticated }}>
			{children}
		</AuthContext.Provider >
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
