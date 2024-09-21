export const extractUsername = (email: string): string => {
  const emailParts = email.split('@');
  return emailParts[0];
};
