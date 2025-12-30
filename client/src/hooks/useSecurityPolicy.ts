/**
 * useSecurityPolicy Hook - Security Policy Validation
 * 
 * OWASP #3: Injection Prevention
 * Validates that external resources comply with CSP
 */

export function useSecurityPolicy() {
  /**
   * Validates if a URL is allowed by Content Security Policy
   */
  const isUrlAllowed = (url: string): boolean => {
    try {
      const urlObj = new URL(url);

      // Whitelist of allowed domains
      const allowedDomains = [
        "wa.me", // WhatsApp
        "instagram.com",
        "www.instagram.com",
        "fonts.googleapis.com",
        "fonts.gstatic.com",
        "cdn.jsdelivr.net",
        window.location.hostname,
      ];

      return allowedDomains.some((domain) => urlObj.hostname.includes(domain));
    } catch {
      return false;
    }
  };

  /**
   * Validates if inline script is safe
   */
  const isSafeInlineScript = (script: string): boolean => {
    // Block dangerous functions
    const dangerousPatterns = [
      /eval\s*\(/i,
      /new\s+Function/i,
      /innerHTML\s*=/i,
      /document\.write/i,
      /setTimeout.*eval/i,
      /setInterval.*eval/i,
    ];

    return !dangerousPatterns.some((pattern) => pattern.test(script));
  };

  /**
   * Get CSP header from response
   */
  const getCspHeader = (): string | null => {
    // In a real scenario, this would be retrieved from response headers
    return (
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com"
    );
  };

  /**
   * Log CSP violations for monitoring
   */
  const setupCspViolationMonitoring = () => {
    document.addEventListener("securitypolicyviolation", (event) => {
      console.warn("🚨 CSP Violation:", {
        blockedURI: event.blockedURI,
        violatedDirective: event.violatedDirective,
        originalPolicy: event.originalPolicy,
        timestamp: new Date().toISOString(),
      });

      // In production, send this to a monitoring service
      // sendToMonitoringService(event);
    });
  };

  return {
    isUrlAllowed,
    isSafeInlineScript,
    getCspHeader,
    setupCspViolationMonitoring,
  };
}
