/**
 * useSanitize Hook - Input Sanitization
 * 
 * OWASP #3: Injection Prevention
 * Sanitizes user input to prevent XSS attacks and injection vulnerabilities
 */

export function sanitizeInput(input: string): string {
  if (!input || typeof input !== "string") {
    return "";
  }

  // Remove potentially dangerous characters
  return input
    .replace(/[<>\"'`]/g, (char) => {
      const escapeMap: { [key: string]: string } = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      };
      return escapeMap[char] || char;
    })
    .trim();
}

export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== "string") {
    return "";
  }

  try {
    // Only allow http, https, and mailto protocols
    const urlObj = new URL(url);
    if (!["http:", "https:", "mailto:"].includes(urlObj.protocol)) {
      return "";
    }
    return url;
  } catch {
    // If URL parsing fails, return empty string
    return "";
  }
}

export function sanitizeEmail(email: string): string {
  const sanitized = sanitizeInput(email);

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(sanitized) ? sanitized : "";
}

export function sanitizePhoneNumber(phone: string): string {
  const sanitized = sanitizeInput(phone);

  // Remove all non-numeric characters except +
  return sanitized.replace(/[^\d+]/g, "");
}

export function useSanitize() {
  return {
    sanitizeInput,
    sanitizeUrl,
    sanitizeEmail,
    sanitizePhoneNumber,
  };
}
