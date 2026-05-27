# Plano de Desenvolvimento do Front-end

Este plano considera o back-end já pronto e prioriza desenvolvimento por fluxo de negócio, do mais estruturante para o mais transacional.

## Sequência lógica (Next.js + API pronta)

1. Definir contrato com a API
2. Montar base do front-end
3. Implementar autenticação e sessão
4. Criar layout e navegação principal
5. Entregar páginas de consulta (read)
6. Entregar páginas de ação (write)
7. Fechar regras de autorização por perfil
8. Tratar estados de UX e erros
9. Testar fluxos ponta a ponta
10. Preparar deploy e observabilidade

## Ordem prática das páginas

1. Login
2. Dashboard inicial
3. Lista de eventos
4. Detalhe do evento
5. Sessões do evento
6. Palestrantes
7. Inscrição em evento/sessão
8. Presença
9. Certificados
10. Administração de usuários

## Por que essa ordem funciona

1. Login destrava os demais fluxos
2. Eventos, sessões e palestrantes formam a base de consulta
3. Inscrição depende dos dados anteriores
4. Presença e certificado dependem de inscrição concluída

## Organização técnica no Next.js

1. Camada única de API
2. Tipos e validação de payloads
3. Hooks de dados por domínio
4. Componentes reutilizáveis (form, tabela, modal, feedback)
5. Rotas protegidas por sessão e perfil
6. Padrão consistente de loading, empty state e error state

## Regra de ouro de integração

1. Desenvolver verticalmente por feature
2. Exemplo: Eventos completo (lista + detalhe + criação/edição), depois Inscrições, depois Presença
3. Evitar construir todas as telas sem integração real

## Plano de 1 semana (MVP funcional)

### Dia 1 - Fundação e autenticação

1. Configurar ambiente, variáveis e cliente HTTP
2. Criar fluxo de login, logout, refresh e usuário logado
3. Proteger rotas privadas

Entrega do dia: usuário consegue autenticar e manter sessão ativa.

### Dia 2 - Base visual e navegação

1. Criar layout principal (header, menu e área de conteúdo)
2. Definir componentes base (botão, input, select, tabela, modal, toast)
3. Montar dashboard inicial com cards e atalhos

Entrega do dia: aplicação navegável com padrão visual consistente.

### Dia 3 - Domínio principal: Eventos e Sessões

1. Implementar listagem de eventos
2. Implementar detalhe de evento
3. Implementar sessões relacionadas ao evento
4. Implementar formulários de criar/editar evento e sessão

Entrega do dia: CRUD de eventos e sessões funcional.

### Dia 4 - Domínio de pessoas: Palestrantes e Usuários

1. Implementar listagem, cadastro e edição de palestrantes
2. Implementar listagem e gestão básica de usuários
3. Aplicar regras de permissão por perfil nas ações sensíveis

Entrega do dia: CRUD de palestrantes e usuários integrado.

### Dia 5 - Fluxo transacional: Inscrições

1. Implementar listagem de inscrições
2. Implementar criação de inscrição (usuário + sessão/evento)
3. Implementar edição/cancelamento de inscrição
4. Tratar conflitos e mensagens claras de erro

Entrega do dia: fluxo de inscrição completo ponta a ponta.

### Dia 6 - Presença e certificados

1. Implementar registro e consulta de presença
2. Implementar tela de certificados (listar, criar e atualizar)
3. Implementar upload de PDF de certificado

Entrega do dia: presença e certificado funcionando em cenário real.

### Dia 7 - QA final e fechamento

1. Testar fluxo completo: login -> evento -> inscrição -> presença -> certificado
2. Revisar loading, estados vazios e tratamento de erros
3. Ajustar UX, responsividade e limpeza técnica

Entrega do dia: MVP estável para demonstração.

## Prioridade de implementação (ordem exata)

1. Auth
2. Layout e navegação
3. Eventos
4. Sessões
5. Palestrantes
6. Inscrições
7. Presença
8. Certificados
9. Usuários/Admin

## Definição de pronto da semana

1. Todos os módulos acima com tela de lista e operações principais
2. Integração real com API, sem dados mockados
3. Rotas protegidas e controle básico de permissão
4. Interface responsiva com tratamento de erro
