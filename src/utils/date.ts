import moment from 'moment';

const formatDate = (date: Date): string => moment(date).format('D MMMM YYYY');

export default formatDate;
