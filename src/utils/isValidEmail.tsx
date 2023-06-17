const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const isValidEmail = function(email: string) {
  return regex.test(email);
};
