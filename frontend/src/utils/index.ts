import toast from "react-hot-toast"


export const openNotification = (
	type: 'success' | 'info' | 'error',
	message: string,
): void => {
	switch (type) {
		case 'success':
			toast.success(message)
			break;
		case 'error':
			toast.error(message)
			break;
		case 'info':
			toast(message, {
				icon: '👏',
			})
			break;
	}
};