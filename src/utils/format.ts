import moment from 'moment';

export const formatMoney = (amount: number, currencyCode: string = 'USD') => {
  const formatedAmount = Intl.NumberFormat(`en-${currencyCode.slice(0, 2)}`, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  });

  const fraction = Intl.NumberFormat(`en-${currencyCode.slice(0, 2)}`, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
  });

  const number = amount! % 1;
  if (number === 0) {
    return fraction.format(Number(amount));
  } else {
    return formatedAmount.format(Number(amount));
  }
};

export const formatNumber = (number: number, decimalPlaces = 2) => {
  const options = {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  };

  return number?.toLocaleString(undefined, options);
};

export function formatTime(time: string | Date) {
  return moment(time, 'h:mm a').format('h:mm A');
}

export function getCountdown(dateString: string | Date) {
  const targetMoment = moment(dateString, 'DD/MM/YYYY');
  const duration = moment.duration(targetMoment.diff(moment()));

  if (duration.asMilliseconds() <= 0) {
    return '00:00:00';
  }

  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours()) % 24;
  const minutes = Math.floor(duration.asMinutes()) % 60;
  const seconds = Math.floor(duration.asSeconds()) % 60;

  const daysPart = days > 0 ? `${days.toString()}days` : '';
  const hoursPart = hours.toString().padStart(2, '0');
  const minutesPart = minutes.toString().padStart(2, '0');
  const secondsPart = seconds.toString().padStart(2, '0');

  return `${daysPart} ${hoursPart}h  ${minutesPart}m ${secondsPart}s`;
}

export const toCapitalized = (word: string): string => {
  if (word) {
    return word?.charAt(0)?.toUpperCase() + word.slice(1);
  } else {
    return '';
  }
};
