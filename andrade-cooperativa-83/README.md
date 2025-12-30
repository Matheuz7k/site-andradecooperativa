# 🏍️ Andrade Cooperativa 83 - Landing Page

Landing page profissional e moderna para a **Andrade Cooperativa 83**, serviço de entregas rápidas e profissionais com motoboys disponíveis 24/7.

## 🌟 Características

- ✅ **Design Responsivo** - Perfeito em desktop, tablet e mobile
- ✅ **Performance Otimizada** - Carregamento rápido e eficiente
- ✅ **Segurança OWASP Top 10** - Proteções contra as principais vulnerabilidades web
- ✅ **SEO Friendly** - Otimizado para mecanismos de busca
- ✅ **Acessibilidade** - Compatível com leitores de tela e navegação por teclado
- ✅ **Integração WhatsApp** - CTAs diretos para contato via WhatsApp
- ✅ **Identidade Visual Premium** - Paleta amarelo dourado + preto profissional

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Roteamento:** Wouter
- **UI Components:** shadcn/ui
- **Ícones:** Lucide React
- **Build Tool:** Vite
- **Server:** Express.js
- **Package Manager:** pnpm

## 📋 Seções da Landing Page

1. **Header Fixo** - Navegação com menu responsivo e CTA WhatsApp
2. **Hero Section** - Headline impactante com imagem profissional do motoboy
3. **Como Funciona** - 4 passos do processo de entrega
4. **Serviços** - Apresentação dos 4 principais serviços
5. **Por Que Confiar** - Posicionamento de marca e diferencial
6. **CTA Final** - Chamada para ação em preto e dourado
7. **Footer** - Informações de contato e links sociais
8. **Botão WhatsApp Flutuante** - Acesso rápido ao atendimento

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Matheuz7k/andrade-cooperativa-83.git
cd andrade-cooperativa-83

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Crie a build otimizada
pnpm build

# Visualize a build em produção
pnpm preview

# Inicie o servidor em produção
pnpm start
```

## 📁 Estrutura do Projeto

```
andrade-cooperativa-83/
├── client/
│   ├── public/
│   │   └── images/              # Imagens do site
│   ├── src/
│   │   ├── components/          # Componentes React reutilizáveis
│   │   ├── config/              # Configurações (segurança, etc)
│   │   ├── contexts/            # React Contexts
│   │   ├── hooks/               # Hooks customizados
│   │   ├── lib/                 # Utilitários e helpers
│   │   ├── pages/               # Páginas da aplicação
│   │   ├── App.tsx              # Componente raiz
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Estilos globais
│   └── index.html               # HTML principal
├── server/
│   └── index.ts                 # Servidor Express
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔒 Segurança

Este projeto implementa todas as proteções do **OWASP Top 10 2021**:

- ✅ Security Headers (CSP, HSTS, X-Frame-Options)
- ✅ Input Sanitization & Validation
- ✅ Rate Limiting
- ✅ CSRF Protection
- ✅ Logging & Monitoring
- ✅ HTTP Method Restriction
- ✅ Request Size Limiting
- ✅ Error Handling Seguro

Para mais detalhes, veja [SECURITY.md](./SECURITY.md)

## 🎨 Customização

### Alterar Cores

Edite as variáveis CSS em `client/src/index.css`:

```css
:root {
  --primary: #F1C40F;  /* Amarelo dourado */
  --background: #FFFFFF;
  --foreground: #0B0B0B;  /* Preto profundo */
}
```

### Alterar Informações de Contato

Edite o arquivo `client/src/components/Header.tsx` e `client/src/components/Footer.tsx`:

```typescript
const whatsappLink = "https://wa.me/5522998485266?text=...";
const instagramLink = "https://instagram.com/andrade_cooperativa83";
```

### Adicionar Novas Seções

1. Crie um novo componente em `client/src/components/`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione a seção ao JSX

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔗 Links Importantes

- **GitHub:** [github.com/Matheuz7k](https://github.com/Matheuz7k)
- **WhatsApp:** [wa.me/5522998485266](https://wa.me/5522998485266)
- **Instagram:** [@andrade_cooperativa83](https://instagram.com/andrade_cooperativa83)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

## 👨‍💻 Desenvolvedor

**Desenvolvido por:** [Matheuz7k](https://github.com/Matheuz7k)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para fazer um fork do projeto e enviar pull requests.

## 📞 Suporte

Para dúvidas ou sugestões sobre o site, entre em contato:

- **WhatsApp:** (22) 99848-5266
- **Instagram:** @andrade_cooperativa83
- **GitHub:** [github.com/Matheuz7k](https://github.com/Matheuz7k)

---

**Desenvolvido com ❤️ por [Matheuz7k](https://github.com/Matheuz7k)**
