import { useContext, createContext, useCallback } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface IThemeContextProps {
	toggleTheme: () => void;
}

interface IAppThemeProvideProps {
	children: React.ReactNode;
}

export const ThemeContext = createContext({} as IThemeContextProps);

export const AppThemeProvider = ({ children }: IAppThemeProvideProps) => {

	const handleToggleTheme = useCallback(() => {
		console.log('toggle theme');
	}, []);

	return (
		<ThemeContext.Provider value={{ toggleTheme: handleToggleTheme }}>
			<ThemeProvider theme={createTheme()}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useThemeProvider = () => {
	return useContext(ThemeContext);
};
