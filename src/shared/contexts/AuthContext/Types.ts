export interface IAuthContext {
	token: string;
	login: (email: string, password: string) => Promise<string | void>;
	logout: () => void;
	isAuthenticated: boolean;
}

export interface IAuthProvider{
	children: React.ReactNode;
}
