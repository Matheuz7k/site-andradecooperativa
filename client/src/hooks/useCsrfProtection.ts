/**
 * useCsrfProtection Hook - CSRF Token Management
 * 
 * OWASP #8: Data Integrity Failures - CSRF Prevention
 * Generates and validates CSRF tokens for form submissions
 */

export function generateCsrfToken(): string {
  // Generate a random token using crypto API
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

export function useCsrfProtection() {
  const getCsrfToken = (): string => {
    let token = sessionStorage.getItem("csrf-token");

    if (!token) {
      token = generateCsrfToken();
      sessionStorage.setItem("csrf-token", token);
    }

    return token;
  };

  const validateCsrfToken = (token: string): boolean => {
    const storedToken = sessionStorage.getItem("csrf-token");
    return storedToken === token && token.length === 64;
  };

  const addCsrfTokenToRequest = (headers: Record<string, string>) => {
    const token = getCsrfToken();
    return {
      ...headers,
      "X-CSRF-Token": token,
    };
  };

  return {
    getCsrfToken,
    validateCsrfToken,
    addCsrfTokenToRequest,
  };
}
