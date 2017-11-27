import moment from 'moment';

export const readableTime = (time) => {
	return moment.unix(time).format("HH:mm")
}

export const readableNumber = (number) => {
	return new Intl.NumberFormat('en-IN').format(number)
}