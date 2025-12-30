# 🚀 Guia de Deploy - Andrade Cooperativa 83

## Deploy no Vercel (Recomendado)

### Passo 1: Preparar o Repositório GitHub
```bash
# 1. Crie um novo repositório no GitHub
# Nome: andrade-cooperativa-83
# Descrição: Landing page da Andrade Cooperativa 83 - Entregas Rápidas e Profissionais

# 2. Clone este projeto e configure o remote
git remote set-url origin https://github.com/SEU_USUARIO/andrade-cooperativa-83.git

# 3. Faça push para o GitHub
git push -u origin main
```

### Passo 2: Deploy no Vercel
```bash
# Opção 1: Via CLI do Vercel
npm i -g vercel
vercel

# Opção 2: Via Dashboard do Vercel
# 1. Acesse https://vercel.com
# 2. Clique em "New Project"
# 3. Selecione seu repositório GitHub
# 4. Clique em "Deploy"
```

### Passo 3: Configurar Variáveis de Ambiente (se necessário)
No dashboard do Vercel, vá para **Settings > Environment Variables** e adicione:
```
# Nenhuma variável obrigatória por enquanto
# Mas se precisar adicionar no futuro, adicione aqui
```

## Deploy em Outros Serviços

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Railway
```bash
# 1. Conecte seu repositório GitHub
# 2. Selecione este projeto
# 3. Configure as variáveis de ambiente
# 4. Deploy automático
```

## Verificar o Deploy

Após fazer o deploy, acesse:
- **Vercel**: `https://seu-projeto.vercel.app`
- **Netlify**: `https://seu-projeto.netlify.app`
- **Railway**: `https://seu-projeto.up.railway.app`

## Troubleshooting

### Erro de Build
Se receber erro de build, verifique:
```bash
# 1. Instale as dependências
pnpm install

# 2. Verifique se há erros de TypeScript
pnpm check

# 3. Teste o build localmente
pnpm build
```

### Erro de Deploy
Se o deploy falhar:
1. Verifique os logs no dashboard do Vercel/Netlify
2. Certifique-se de que todas as dependências estão instaladas
3. Verifique se o `package.json` está correto

## Atualizações Futuras

Para atualizar o site após fazer mudanças:
```bash
# 1. Faça as mudanças localmente
# 2. Teste com: pnpm dev
# 3. Faça commit e push
git add .
git commit -m "feat: descrição da mudança"
git push origin main

# 4. O Vercel/Netlify fará deploy automático
```

---

**Desenvolvido por:** Matheuz7k  
**GitHub:** https://github.com/Matheuz7k
