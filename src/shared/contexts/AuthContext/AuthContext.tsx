import react, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LoginService } from '../../services';
import { IAuthContext, IAuthProvider } from './Types';

const APP_AUTH_TOKEN = 'LOCAL_STORAGE_APP_AUTH_TOKEN';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [token, setToken] = useState<string | undefined>();

	useEffect(() => {
		const token = localStorage.getItem(APP_AUTH_TOKEN);
		if (token) {
			setToken(token);
		} else {
			setToken(undefined);
		}
	}, [token]);

	const handleLogin = useCallback(async (email: string, password: string) => {
		const result = await LoginService.getToken(email, password);
		if (result instanceof Error) {
			alert(result.message);
		} else {
			setToken(result.token);
			localStorage.setItem(APP_AUTH_TOKEN, JSON.stringify(result.token));
		}
	}, [token]);

	const handleLogout = useCallback(() => {
		localStorage.removeItem(APP_AUTH_TOKEN);
		setToken(undefined);
	}, []);

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
