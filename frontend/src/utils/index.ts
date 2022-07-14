import toast from "react-hot-toast"

/**
 * @description imprime un mensaje en pantalla
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @param {'success' | 'info' | 'error'} type
 * @param {string} [message]
 * @return {*} {void}
 */
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
			break
	}
}

/**
 * @description formatea un numero como moneda
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @param {number} number
 * @param {string} currency
 * @return {*} {void}
 */
export const currency = (number: number, currency: string = '$', decimals: number = 2): string => {
	return new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: currency, 
		minimumFractionDigits: decimals
	}).format(number)

};