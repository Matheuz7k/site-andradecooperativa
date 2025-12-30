# 🔒 Segurança - OWASP Top 10 Implementation

Este documento descreve as proteções de segurança implementadas no site da Andrade Cooperativa 83, baseadas no OWASP Top 10 2021.

---

## 📋 OWASP Top 10 - Proteções Implementadas

### 1. **Broken Access Control** ❌ → ✅
**Problema:** Usuários podem acessar recursos não autorizados.

**Proteções Implementadas:**
- ✅ Validação de entrada em todas as requisições
- ✅ Desabilitação de métodos HTTP desnecessários (PUT, DELETE, PATCH)
- ✅ Roteamento seguro no servidor
- ✅ Sanitização de URLs

**Código:**
```typescript
// server/index.ts - Linha 72-77
app.use((req, res, next) => {
  if (["PUT", "DELETE", "PATCH"].includes(req.method)) {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  next();
});
```

---

### 2. **Cryptographic Failures** 🔐
**Problema:** Dados sensíveis não são criptografados adequadamente.

**Proteções Implementadas:**
- ✅ HTTPS enforçado com HSTS (HTTP Strict Transport Security)
- ✅ Cache control para dados sensíveis
- ✅ Remoção de headers que expõem informações

**Headers de Segurança:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Cache-Control: no-cache, no-store, must-revalidate
```

---

### 3. **Injection** 💉 → 🛡️
**Problema:** Injeção de código malicioso (SQL, XSS, etc).

**Proteções Implementadas:**
- ✅ Content Security Policy (CSP)
- ✅ Sanitização de entrada de usuário
- ✅ Validação de dados antes do processamento
- ✅ Escape de caracteres especiais
- ✅ Validação de URLs

**Hooks Disponíveis:**
```typescript
// client/src/hooks/useSanitize.ts
import { useSanitize } from '@/hooks/useSanitize';

const { sanitizeInput, sanitizeEmail, sanitizeUrl } = useSanitize();

// Uso:
const cleanEmail = sanitizeEmail(userInput);
const cleanUrl = sanitizeUrl(urlInput);
```

**Content Security Policy:**
```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;
  frame-ancestors 'none';
```

---

### 4. **Insecure Design** 🏗️
**Problema:** Falta de controles de segurança no design.

**Proteções Implementadas:**
- ✅ Rate limiting (100 requisições por minuto)
- ✅ Validação de entrada obrigatória
- ✅ Princípio do menor privilégio
- ✅ Referrer Policy configurada

**Rate Limiting:**
```typescript
// server/index.ts - Linha 67-91
const RATE_LIMIT_WINDOW = 60000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 100; // Max 100 requisições
```

---

### 5. **Security Misconfiguration** ⚙️
**Problema:** Configurações de segurança inadequadas.

**Proteções Implementadas:**
- ✅ Headers de segurança configurados
- ✅ Métodos HTTP desnecessários desabilitados
- ✅ Erros não expõem informações sensíveis
- ✅ X-Powered-By header removido
- ✅ MIME type sniffing prevenido

**Headers Configurados:**
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

### 6. **Vulnerable Components** 📦
**Problema:** Dependências com vulnerabilidades conhecidas.

**Proteções Implementadas:**
- ✅ Dependências mantidas atualizadas
- ✅ Uso de bibliotecas confiáveis (shadcn/ui, lucide-react)
- ✅ Sem dependências desnecessárias
- ✅ Verificação regular de vulnerabilidades

**Comando para verificar:**
```bash
npm audit
npm audit fix
```

---

### 7. **Authentication Failures** 🔑
**Problema:** Falhas em autenticação e gerenciamento de sessão.

**Proteções Implementadas:**
- ✅ CSRF token generation e validação
- ✅ Session storage seguro
- ✅ Tokens criptograficamente aleatórios

**Hook Disponível:**
```typescript
// client/src/hooks/useCsrfProtection.ts
import { useCsrfProtection } from '@/hooks/useCsrfProtection';

const { getCsrfToken, addCsrfTokenToRequest } = useCsrfProtection();

// Uso:
const headers = addCsrfTokenToRequest({
  'Content-Type': 'application/json',
});
```

---

### 8. **Data Integrity Failures** 📊
**Problema:** Falhas na integridade dos dados.

**Proteções Implementadas:**
- ✅ CSRF protection
- ✅ Validação de integridade de dados
- ✅ Limite de tamanho de requisição (10KB)
- ✅ Logging de modificações

**Validação:**
```typescript
// Limite de tamanho
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: false }));
```

---

### 9. **Logging & Monitoring Failures** 📊
**Problema:** Falta de logging e monitoramento.

**Proteções Implementadas:**
- ✅ Logging de todas as requisições
- ✅ Logging de erros HTTP
- ✅ Monitoramento de CSP violations
- ✅ Timestamps em todos os logs

**Exemplo de Log:**
```json
{
  "timestamp": "2025-12-30T10:19:00.000Z",
  "method": "GET",
  "path": "/",
  "status": 200,
  "ip": "192.168.1.1",
  "duration": "45ms",
  "userAgent": "Mozilla/5.0..."
}
```

---

### 10. **SSRF (Server-Side Request Forgery)** 🌐
**Problema:** Servidor faz requisições não autorizadas.

**Proteções Implementadas:**
- ✅ Validação de URLs antes de requisições
- ✅ Whitelist de domínios permitidos
- ✅ Protocolo restrito (HTTP/HTTPS apenas)

**Hook Disponível:**
```typescript
// client/src/hooks/useSecurityPolicy.ts
import { useSecurityPolicy } from '@/hooks/useSecurityPolicy';

const { isUrlAllowed } = useSecurityPolicy();

if (!isUrlAllowed(userProvidedUrl)) {
  console.error("URL não permitida");
}
```

---

## 🔧 Como Usar os Hooks de Segurança

### 1. Sanitizar Entrada de Usuário
```typescript
import { useSanitize } from '@/hooks/useSanitize';

const { sanitizeInput, sanitizeEmail } = useSanitize();

const cleanInput = sanitizeInput(userInput);
const cleanEmail = sanitizeEmail(emailInput);
```

### 2. Validar Dados
```typescript
import { useDataValidation } from '@/hooks/useDataValidation';

const { validateEmail, validatePhoneNumber, validateFormData } = useDataValidation();

const emailValidation = validateEmail(email);
if (!emailValidation.isValid) {
  console.error(emailValidation.errors);
}
```

### 3. Adicionar CSRF Token
```typescript
import { useCsrfProtection } from '@/hooks/useCsrfProtection';

const { getCsrfToken, addCsrfTokenToRequest } = useCsrfProtection();

const headers = addCsrfTokenToRequest({
  'Content-Type': 'application/json',
});

// Usar headers em fetch/axios
```

### 4. Validar URLs
```typescript
import { useSecurityPolicy } from '@/hooks/useSecurityPolicy';

const { isUrlAllowed } = useSecurityPolicy();

if (isUrlAllowed(url)) {
  window.location.href = url;
}
```

---

## 📊 Checklist de Segurança

- [x] HTTPS/HSTS configurado
- [x] CSP (Content Security Policy) implementada
- [x] Rate limiting ativo
- [x] Sanitização de entrada
- [x] Validação de dados
- [x] CSRF protection
- [x] Headers de segurança
- [x] Logging e monitoramento
- [x] Métodos HTTP restritos
- [x] Erros não expõem informações

---

## 🚀 Boas Práticas de Segurança

1. **Sempre sanitize entrada de usuário**
   ```typescript
   const clean = sanitizeInput(userInput);
   ```

2. **Valide dados antes de processar**
   ```typescript
   const validation = validateFormData(formData);
   if (!validation.isValid) return;
   ```

3. **Use HTTPS sempre**
   - Certificado SSL/TLS válido
   - HSTS habilitado

4. **Mantenha dependências atualizadas**
   ```bash
   npm audit
   npm update
   ```

5. **Monitore logs de segurança**
   - Verifique logs regularmente
   - Configure alertas para atividades suspeitas

6. **Teste segurança regularmente**
   - OWASP ZAP
   - Burp Suite Community
   - npm audit

---

## 📞 Suporte de Segurança

Se encontrar uma vulnerabilidade, por favor:
1. NÃO publique publicamente
2. Entre em contato com o time de desenvolvimento
3. Descreva a vulnerabilidade em detalhes
4. Aguarde resposta antes de divulgar

---

## 📚 Referências

- [OWASP Top 10 2021](https://owasp.org/Top10/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

---

**Última atualização:** 30 de Dezembro de 2025
**Status:** ✅ Segurança OWASP Top 10 Implementada
