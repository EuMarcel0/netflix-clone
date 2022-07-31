import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { ToastAlert } from '../../components';

interface IToastContexttProps {
	toast: () => void;
}
interface IToastProvidertProps {
	children: ReactNode;
}


export const ToastContext = createContext({} as IToastContexttProps);


export const ToastProvider = ({ children }: IToastProvidertProps) => {
	const [toast, setToast] = useState(false);

	const handleToast = useCallback(() => {
		setToast(true);
	}, []);

	return (
		<ToastContext.Provider value={{ toast: handleToast }}>
			{children}
			{(toast &&
				<ToastAlert horizontal='left' vertical='top' description='Teste de contexo' />
			)}
		</ToastContext.Provider>
	);
};

export const useToastAlert = () => {
	return useContext(ToastContext);
};
