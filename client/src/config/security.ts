/**
 * Security Configuration
 * 
 * Centralized security settings for the application
 * OWASP Top 10 Compliance
 */

export const SECURITY_CONFIG = {
  // Content Security Policy
  csp: {
    enabled: true,
    reportOnly: false, // Set to true for testing
  },

  // Rate Limiting
  rateLimit: {
    enabled: true,
    windowMs: 60000, // 1 minute
    maxRequests: 100, // Max 100 requests per minute
  },

  // Input Validation
  validation: {
    maxInputLength: 1000,
    maxEmailLength: 254,
    maxPhoneLength: 15,
    minPhoneLength: 10,
  },

  // Allowed Domains (Whitelist)
  allowedDomains: [
    "wa.me",
    "instagram.com",
    "www.instagram.com",
    "fonts.googleapis.com",
    "fonts.gstatic.com",
    "cdn.jsdelivr.net",
  ],

  // Allowed Protocols
  allowedProtocols: ["http:", "https:", "mailto:"],

  // Security Headers
  headers: {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security":
      "max-age=31536000; includeSubDomains; preload",
  },

  // CORS Configuration
  cors: {
    enabled: false, // Disabled for static site
    allowedOrigins: [],
  },

  // Session Configuration
  session: {
    secure: true, // HTTPS only
    httpOnly: true, // No JavaScript access
    sameSite: "Strict", // CSRF protection
  },

  // Logging
  logging: {
    enabled: true,
    logErrors: true,
    logSecurityEvents: true,
    logLevel: "warn", // error, warn, info, debug
  },

  // Feature Flags
  features: {
    enableCsrfProtection: true,
    enableRateLimiting: true,
    enableInputValidation: true,
    enableSecurityHeaders: true,
    enableLogging: true,
  },
};

/**
 * Get security configuration value
 */
export function getSecurityConfig(path: string): any {
  const keys = path.split(".");
  let value: any = SECURITY_CONFIG;

  for (const key of keys) {
    value = value?.[key];
  }

  return value;
}

/**
 * Validate security configuration
 */
export function validateSecurityConfig(): boolean {
  const requiredSettings = [
    "csp.enabled",
    "rateLimit.enabled",
    "validation.maxInputLength",
    "headers",
  ];

  for (const setting of requiredSettings) {
    if (getSecurityConfig(setting) === undefined) {
      console.error(`Missing security configuration: ${setting}`);
      return false;
    }
  }

  return true;
}

/**
 * Initialize security features
 */
export function initializeSecurity(): void {
  if (!validateSecurityConfig()) {
    console.error("Security configuration validation failed");
    return;
  }

  console.log("✅ Security configuration loaded successfully");

  // Log enabled features
  const { features } = SECURITY_CONFIG;
  Object.entries(features).forEach(([feature, enabled]) => {
    if (enabled) {
      console.log(`🔒 ${feature} enabled`);
    }
  });
}
