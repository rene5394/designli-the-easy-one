export const getMonthName = (dateString: string): string => {
  const parsedDate = new Date(dateString);
  return parsedDate.toLocaleString('es-ES', { month: 'long' });
};
