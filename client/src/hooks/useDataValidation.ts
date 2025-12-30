/**
 * useDataValidation Hook - Input Validation
 * 
 * OWASP #3: Injection Prevention
 * OWASP #1: Broken Access Control
 * Validates user input before processing
 */

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function useDataValidation() {
  /**
   * Validate email format
   */
  const validateEmail = (email: string): ValidationResult => {
    const errors: string[] = [];

    if (!email || email.trim().length === 0) {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Invalid email format");
    } else if (email.length > 254) {
      errors.push("Email is too long");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  /**
   * Validate phone number
   */
  const validatePhoneNumber = (phone: string): ValidationResult => {
    const errors: string[] = [];
    const cleanPhone = phone.replace(/\D/g, "");

    if (!phone || phone.trim().length === 0) {
      errors.push("Phone number is required");
    } else if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      errors.push("Phone number must be between 10 and 15 digits");
    } else if (!/^\+?[\d\s\-()]+$/.test(phone)) {
      errors.push("Phone number contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  /**
   * Validate text input length
   */
  const validateTextLength = (
    text: string,
    minLength: number = 1,
    maxLength: number = 1000
  ): ValidationResult => {
    const errors: string[] = [];
    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
      errors.push("Text is required");
    } else if (trimmedText.length < minLength) {
      errors.push(`Text must be at least ${minLength} characters`);
    } else if (trimmedText.length > maxLength) {
      errors.push(`Text must not exceed ${maxLength} characters`);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  /**
   * Validate URL
   */
  const validateUrl = (url: string): ValidationResult => {
    const errors: string[] = [];

    if (!url || url.trim().length === 0) {
      errors.push("URL is required");
      return { isValid: false, errors };
    }

    try {
      const urlObj = new URL(url);

      // Only allow http and https
      if (!["http:", "https:"].includes(urlObj.protocol)) {
        errors.push("Only HTTP and HTTPS URLs are allowed");
      }

      // Check URL length
      if (url.length > 2048) {
        errors.push("URL is too long");
      }
    } catch {
      errors.push("Invalid URL format");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  /**
   * Validate form data
   */
  const validateFormData = (data: Record<string, any>): ValidationResult => {
    const errors: string[] = [];

    // Check for required fields
    Object.entries(data).forEach(([key, value]) => {
      if (!value || (typeof value === "string" && value.trim().length === 0)) {
        errors.push(`${key} is required`);
      }
    });

    // Check for suspicious patterns
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "string") {
        // Check for SQL injection patterns
        if (/('|(--)|;|\/\*|\*\/|xp_|sp_)/i.test(value)) {
          errors.push(`${key} contains suspicious characters`);
        }

        // Check for script injection
        if (/<script|javascript:|onerror|onclick/i.test(value)) {
          errors.push(`${key} contains invalid content`);
        }
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  /**
   * Sanitize and validate input
   */
  const sanitizeAndValidate = (
    input: string,
    type: "email" | "phone" | "text" | "url" = "text"
  ): ValidationResult => {
    const trimmed = input.trim();

    switch (type) {
      case "email":
        return validateEmail(trimmed);
      case "phone":
        return validatePhoneNumber(trimmed);
      case "url":
        return validateUrl(trimmed);
      case "text":
      default:
        return validateTextLength(trimmed);
    }
  };

  return {
    validateEmail,
    validatePhoneNumber,
    validateTextLength,
    validateUrl,
    validateFormData,
    sanitizeAndValidate,
  };
}
