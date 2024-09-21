export const getMonthName = (date: Date): string => {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleString('es-ES', { month: 'long' });
};
