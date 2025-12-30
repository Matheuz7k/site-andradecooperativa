# 🤝 Guia de Contribuição

Obrigado por se interessar em contribuir para o projeto **Andrade Cooperativa 83**! Este documento fornece diretrizes e instruções para contribuir.

## 📋 Como Contribuir

### 1. Fork o Repositório

Clique no botão "Fork" no GitHub para criar uma cópia do projeto na sua conta.

### 2. Clone seu Fork

```bash
git clone https://github.com/seu-usuario/andrade-cooperativa-83.git
cd andrade-cooperativa-83
```

### 3. Crie uma Branch para sua Feature

```bash
git checkout -b feature/sua-feature
# ou para bug fixes
git checkout -b fix/seu-bug-fix
```

### 4. Faça suas Alterações

- Mantenha o código limpo e bem documentado
- Siga as convenções de estilo do projeto
- Teste suas mudanças localmente

### 5. Commit suas Mudanças

```bash
git add .
git commit -m "Descrição clara da mudança"
```

### 6. Push para sua Branch

```bash
git push origin feature/sua-feature
```

### 7. Abra um Pull Request

Vá para o repositório original e clique em "New Pull Request". Descreva suas mudanças claramente.

## 🎯 Tipos de Contribuição

### 🐛 Reportar Bugs

Se encontrar um bug, abra uma issue com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Seu ambiente (OS, navegador, versão do Node)

### ✨ Sugerir Features

Para sugerir uma nova feature:
- Descreva o caso de uso
- Explique como isso beneficiaria os usuários
- Forneça exemplos ou mockups (se possível)

### 📚 Melhorar Documentação

Contribuições para melhorar o README, comentários de código ou documentação são muito bem-vindas!

## 💻 Padrões de Código

### TypeScript

- Use tipos explícitos sempre que possível
- Evite `any` - use tipos genéricos ou `unknown`
- Mantenha interfaces bem documentadas

### React

- Use functional components com hooks
- Mantenha componentes pequenos e reutilizáveis
- Adicione comentários explicando a lógica complexa

### Tailwind CSS

- Use classes utilitárias em vez de CSS customizado
- Mantenha a consistência com o design system
- Documente classes customizadas em `index.css`

### Commits

Siga o padrão de commit:

```
tipo(escopo): descrição breve

Descrição mais detalhada se necessário.

Closes #issue-number
```

Tipos de commit:
- `feat`: Nova feature
- `fix`: Bug fix
- `docs`: Documentação
- `style`: Formatação de código
- `refactor`: Refatoração sem mudança funcional
- `test`: Testes
- `chore`: Tarefas de manutenção

## 🧪 Testando

Antes de enviar um PR:

```bash
# Instale dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev

# Verifique tipos TypeScript
pnpm check

# Build para produção
pnpm build
```

## 📝 Checklist para Pull Request

- [ ] Meu código segue o estilo do projeto
- [ ] Atualizei a documentação se necessário
- [ ] Testei as mudanças localmente
- [ ] Não há console.log ou debug code
- [ ] As mudanças não quebram funcionalidades existentes
- [ ] Adicionei comentários para código complexo

## 🚀 Processo de Review

1. Um mantenedor revisará seu PR
2. Pode haver solicitações de mudanças
3. Uma vez aprovado, será feito merge
4. Sua contribuição será creditada!

## 📞 Dúvidas?

- Abra uma issue com a tag `question`
- Entre em contato via GitHub Discussions
- Envie um DM no Instagram: [@andrade_cooperativa83](https://instagram.com/andrade_cooperativa83)

## 📜 Código de Conduta

Por favor, siga nosso código de conduta:

- Seja respeitoso com outros contribuidores
- Não tolere assédio de qualquer tipo
- Forneça feedback construtivo
- Seja inclusivo e acolhedor

## 🎉 Obrigado!

Suas contribuições tornam este projeto melhor para todos. Obrigado por fazer parte da comunidade!

---

**Desenvolvido com ❤️ por [Matheuz7k](https://github.com/Matheuz7k)**
