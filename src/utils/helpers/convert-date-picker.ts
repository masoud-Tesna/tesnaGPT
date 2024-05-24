import persian from 'react-date-object/calendars/persian';
import gregorian from 'react-date-object/calendars/gregorian';
import { DateObject } from 'react-multi-date-picker';
import { toEnDigit } from '@/utils/helpers/to-en-digit';

export const convertDatePicker = (date: Date | string, format = 'YYYY/MM/DD', local = 'fa') => {
  let object = {
    date,
    format,
    calendar: local === 'fa' ? persian : gregorian
  };
  
  const dateConvert = new DateObject(object).format();
  
  return (toEnDigit(dateConvert));
};