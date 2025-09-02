# 🚀 Hypesoft - Sistema de Gestão de Produtos

Bem-vindo ao **Hypesoft**! 🌟  
Este é um sistema completo de gestão de produtos desenvolvido como parte do desafio técnico da Hypesoft, demonstrando habilidades em arquitetura moderna, boas práticas de desenvolvimento e tecnologias de ponta.

## 🎯 Visão Geral

O Hypesoft é uma aplicação web moderna para gerenciamento de produtos, com dashboard intuitivo, controle de estoque e sistema de autenticação robusto via Keycloak.

**Referência Visual**: [ShopSense Dashboard - Product Page](https://dribbble.com/shots/24508262-ShopSense-Dashboard-Product-Page)

## ✨ Funcionalidades Principais

- **Gestão de Produtos** - Criar, listar, editar e excluir produtos
- **Sistema de Categorias** - Gerenciar categorias e associar produtos
- **Controle de Estoque** - Monitorar quantidades e alertas de estoque baixo
- **Dashboard Interativo** - Métricas e gráficos de produtos por categoria
- **Autenticação Segura** - Integração com Keycloak (OAuth2/OpenID Connect)

## 🛠️ Stack Tecnológica

### Frontend
- React 18 com TypeScript
- Next.js 14 (App Router)
- TailwindCSS + Shadcn/ui
- React Query para gerenciamento de estado
- Recharts para gráficos

### Backend
- .NET 9 com C#
- Clean Architecture + DDD
- CQRS + MediatR pattern
- Entity Framework Core com MongoDB
- FluentValidation + AutoMapper

### Infraestrutura
- MongoDB
- Keycloak
- Docker + Docker Compose
- Nginx

## 🚀 Como Executar

### Pré-requisitos
- Docker Desktop 4.0+
- Node.js 18+ (versão 22 LTS recomendada)
- .NET 9 SDK
- Git

### Execução com Docker Compose

```bash
# Clone o repositório
git clone https://github.com/oRdv/Hypesoft.git
cd Hypesoft

# Execute a aplicação
docker-compose up -d

# Aguarde os serviços inicializarem
# Verifique o status dos containers
docker-compose ps
```

### URLs de Acesso
- **Frontend**: http://localhost:3000
- **API Backend**: http://localhost:8080
- **Swagger**: http://localhost:8080/swagger
- **Keycloak**: http://localhost:9090

### Desenvolvimento Local

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
dotnet restore
dotnet run
```

## 📋 Requisitos do Sistema

### Funcionalidades Implementadas
- ✅ CRUD completo de produtos
- ✅ Sistema de categorias
- ✅ Controle de estoque com alertas
- ✅ Dashboard com métricas e gráficos
- ✅ Autenticação via Keycloak
- ✅ Interface responsiva
- ✅ Validações em tempo real

### Aspectos Técnicos
- ✅ Arquitetura Clean Architecture + DDD
- ✅ Padrão CQRS com MediatR
- ✅ Testes automatizados (backend >85% cobertura)
- ✅ Logs estruturados com Serilog
- ✅ Health checks implementados
- ✅ Rate limiting e segurança
- ✅ Documentação Swagger/OpenAPI

## 🔧 Configuração Avançada

### Variáveis de Ambiente
Copie e configure o arquivo `.env`:
```bash
cp .env.example .env
```

### Keycloak Configuration
Importe o realm configuration no Keycloak:
```bash
# Acesse o Keycloak em http://localhost:9090
# Use usuário/senha: admin/admin
# Importe o arquivo keycloak/realm-export.json
```

## 📊 Estrutura do Projeto

```
hypesoft/
├── backend/                 # API .NET 9
│   ├── Hypesoft.API/       # Camada de Apresentação
│   ├── Hypesoft.Application/# Camada de Aplicação
│   ├── Hypesoft.Domain/    # Camada de Domínio
│   └── Hypesoft.Infrastructure/ # Camada de Infraestrutura
├── frontend/               # Aplicação Next.js
│   ├── components/         # Componentes React
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços de API
│   └── styles/             # Estilos Tailwind
├── keycloak/               # Configuração Keycloak
├── nginx/                  # Configuração Nginx
└── scripts/                # Scripts de auxílio
```

## 🤝 Contribuição

### Padrões de Commit
Utilizamos Conventional Commits:

```bash
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: documentação
style: formatação
refactor: refatoração de código
test: testes
chore: tarefas de manutenção
```

### Executando Testes

```bash
# Backend
cd backend
dotnet test

# Frontend
cd frontend
npm test
```

## ❓ Dúvidas e Suporte

1. Verifique se todos os containers estão rodando: `docker-compose ps`
2. Confirme se as portas 3000 (frontend), 8080 (backend) e 9090 (keycloak) estão livres
3. Verifique os logs em caso de erro: `docker-compose logs`

Caso persista, entre em contato pelo [LinkedIn](https://linkedin.com/in/seu-perfil).

## 📝 Licença

Este projeto foi desenvolvido como parte do desafio técnico da Hypesoft.

---

**Desenvolvido com ❤️ por [oRdv](https://github.com/oRdv)**# HypeSoft-Challenge
