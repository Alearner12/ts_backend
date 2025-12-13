/**
 * Utility Functions
 * Helper functions used across the application
 */

/**
 * Email validation regex pattern
 */
export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

/**
 * Generate a random string
 */
export const generateRandomString = (length: number = 10): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Check if object is empty
 */
export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};
