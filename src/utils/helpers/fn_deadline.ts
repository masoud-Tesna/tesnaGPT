/**
 * Calculate the deadline based on the provided time.
 * @param time Time string in the format 'hh:mm:ss'.
 * @returns The deadline timestamp in milliseconds.
 */
export const fn_deadline = (time: string): number => {
  const [ hours, minutes, seconds ] = time.split(':').map(parseFloat);
  const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000;
  return Date.now() + totalMilliseconds;
};

export const fn_deadline2 = (time: string): number => {
  const [ hoursStr, minutesStr, secondsStr ] = time.split(':');
  
  // Parsing and validation
  const hours = parseInt(hoursStr);
  const minutes = parseInt(minutesStr);
  const seconds = parseInt(secondsStr);
  
  // Check for valid numeric values
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    throw new Error('Invalid time format. Please provide time in the format "hh:mm:ss"');
  }
  
  const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000;
  return Date.now() + totalMilliseconds;
};
