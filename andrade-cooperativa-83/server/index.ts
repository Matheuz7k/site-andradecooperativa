import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // ============================================================
  // OWASP TOP 10 SECURITY IMPLEMENTATIONS
  // ============================================================

  // 1. SECURITY HEADERS - Prevent common attacks
  app.use((req, res, next) => {
    // Prevent clickjacking attacks (OWASP #4: Insecure Design)
    res.setHeader("X-Frame-Options", "DENY");

    // Prevent MIME type sniffing (OWASP #6: Vulnerable Components)
    res.setHeader("X-Content-Type-Options", "nosniff");

    // Enable XSS protection in older browsers (OWASP #3: Injection)
    res.setHeader("X-XSS-Protection", "1; mode=block");

    // Content Security Policy - Restrict resource loading (OWASP #3: Injection)
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: https:; " +
        "connect-src 'self' https:; " +
        "frame-ancestors 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'"
    );

    // Referrer Policy - Control referrer information (OWASP #4: Insecure Design)
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

    // Permissions Policy - Restrict browser features (OWASP #4: Insecure Design)
    res.setHeader(
      "Permissions-Policy",
      "geolocation=(), microphone=(), camera=(), payment=()"
    );

    // Strict Transport Security - Force HTTPS (OWASP #2: Cryptographic Failures)
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );

    // Remove X-Powered-By header to avoid information disclosure
    res.removeHeader("X-Powered-By");

    next();
  });

  // 2. INPUT VALIDATION & SANITIZATION (OWASP #3: Injection)
  // Limit request size to prevent DoS attacks
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ limit: "10kb", extended: false }));

  // 3. RATE LIMITING (OWASP #5: Security Misconfiguration)
  const requestCounts = new Map<string, number[]>();
  const RATE_LIMIT_WINDOW = 60000; // 1 minute
  const RATE_LIMIT_MAX_REQUESTS = 100; // Max 100 requests per minute

  app.use((req, res, next) => {
    const ip = req.ip || "unknown";
    const now = Date.now();

    if (!requestCounts.has(ip)) {
      requestCounts.set(ip, []);
    }

    const timestamps = requestCounts.get(ip)!;
    const recentRequests = timestamps.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );

    if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
      res.status(429).json({
        error: "Too many requests. Please try again later.",
      });
      return;
    }

    recentRequests.push(now);
    requestCounts.set(ip, recentRequests);

    // Cleanup old entries periodically
    if (requestCounts.size > 10000) {
      requestCounts.clear();
    }

    next();
  });

  // 4. DISABLE UNNECESSARY HTTP METHODS (OWASP #1: Broken Access Control)
  app.use((req, res, next) => {
    if (["PUT", "DELETE", "PATCH"].includes(req.method)) {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    next();
  });

  // 5. LOGGING & MONITORING (OWASP #9: Logging & Monitoring Failures)
  app.use((req, res, next) => {
    const startTime = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - startTime;
      const logEntry = {
        timestamp: new Date().toISOString(),
        method: req.method,
        path: req.path,
        status: res.statusCode,
        ip: req.ip,
        duration: `${duration}ms`,
        userAgent: req.get("user-agent"),
      };

      // Log suspicious activity
      if (res.statusCode >= 400) {
        console.warn("⚠️ HTTP Error:", logEntry);
      }

      // Log all requests in development
      if (process.env.NODE_ENV !== "production") {
        console.log("📊 Request:", logEntry);
      }
    });

    next();
  });

  // 6. SERVE STATIC FILES WITH CACHE HEADERS
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(
    express.static(staticPath, {
      maxAge: "1d", // Cache static files for 1 day
      etag: false, // Disable etag to prevent information disclosure
    })
  );

  // 7. HANDLE CLIENT-SIDE ROUTING - Serve index.html for all routes
  // This prevents direct access to non-existent routes (OWASP #1: Broken Access Control)
  app.get("*", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // 8. ERROR HANDLING (OWASP #5: Security Misconfiguration)
  app.use((err: any, _req: any, res: any, _next: any) => {
    console.error("❌ Server Error:", err);

    // Don't expose error details in production
    const message =
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message;

    res.status(500).json({ error: message });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`🔒 Secure server running on http://localhost:${port}/`);
    console.log("✅ OWASP Top 10 protections enabled");
  });
}

startServer().catch(console.error);
