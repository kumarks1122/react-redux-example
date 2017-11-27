import moment from 'moment';

export const readableTime = (time) => {
	return moment.unix(time).format("HH:mm")
}

export const readableNumber = (number) => {
	return new Intl.NumberFormat('en-IN').format(number)
}

export const timeInBetween = (time, timeRange) => {
	const format = 'HH:mm:ss';
	const formattedTime = moment(moment.unix(time).format("HH:mm:ss"), format);
	const beforeTime = moment(timeRange.from, format);
  const afterTime = moment(timeRange.to, format);

	return formattedTime.isBetween(beforeTime, afterTime);
}