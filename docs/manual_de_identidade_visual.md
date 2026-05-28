# Manual de Identidade Visual

**AcademyFlow**

Conectando conhecimento e experiencias

**Logo do cabecalho do aplicativo:** BookOpen em bloco com degradê, acompanhado do nome AcademyFlow.

---

## Ficha Tecnica

| Campo              | Informacao                      |
| ------------------ | ------------------------------- |
| Projeto            | AcademyFlow                     |
| Aplicacao          | Front-end em Next.js            |
| Autor do manual    | Equipe de front-end AcademyFlow |
| Versao             | 1.0                             |
| Data de criacao    | Maio de 2026                    |
| Ultima atualizacao | Maio de 2026                    |
| Mantido por        | Equipe de front-end AcademyFlow |

---

## Sumario

1. Introducao
2. Sobre a marca
3. Objetivo do manual
4. Logotipo e uso no cabecalho
5. Processo criativo
6. Paleta de cores oficial
7. Tipografia
8. Aplicacoes da marca
9. Proibicoes de uso
10. Prototipo e prints
11. Historico de versoes
12. Creditos

---

## 1. Introducao

Este documento registra a identidade visual oficial do front-end AcademyFlow. O objetivo e manter consistencia entre telas publicas, autenticacao e dashboards, garantindo uma experiencia visual coesa, acessivel e facilmente reconhecivel.

AcademyFlow e uma interface web para gestao de eventos academicos, inscricoes, presenca, usuarios e certificados. A identidade visual do projeto foi desenhada para transmitir organizacao, confianca, modernidade e clareza operacional.

## 2. Sobre a Marca

AcademyFlow representa o fluxo completo de um ecossistema academico digital: do cadastro do participante ao acompanhamento de eventos, presenca e emissao de certificados.

O nome combina dois conceitos:

- Academy: contexto academico, institucional e educacional.
- Flow: continuidade, fluidez e navegacao sem atrito.

## 3. Objetivo do Manual

O front-end foi construido para resolver a fragmentacao comum em sistemas de eventos academicos, centralizando em uma unica interface:

- autenticacao de usuarios;
- visualizacao e gestao de eventos;
- inscricoes e acompanhamento;
- controle de presenca;
- emissao e consulta de certificados.

O design prioriza legibilidade, escaneabilidade e baixa carga cognitiva, para que o usuario encontre rapidamente a acao que precisa executar.

## 4. Logotipo e Uso no Cabecalho

### 4.1 Composicao do logo

O front-end nao utiliza um arquivo grafico separado em `public/`. A representacao oficial da marca no aplicativo e composta no cabecalho por:

- simbolo BookOpen;
- bloco com degradê em azul, verde e amber;
- nome AcademyFlow ao lado do simbolo;
- slogan exibido em texto auxiliar.

### 4.2 Representacao do cabecalho

```text
[ BookOpen ]  AcademyFlow
			  Conectando conhecimento e experiencias
```

### 4.3 Significado visual

O simbolo em degradê comunica:

- conhecimento e conteudo academico;
- energia e dinamismo de uma plataforma ativa;
- transicao fluida entre secoes e fluxos do sistema.

### 4.4 Area de protecao

O conjunto marca + texto deve sempre ter area de respiro ao redor. Como regra pratica:

- manter pelo menos a altura do icone como margem minima nas laterais;
- nao encostar a marca em bordas, menus ou outros elementos;
- preservar leitura clara do nome e do slogan.

### 4.5 Tamanho minimo recomendado

- Icone: 28 px de altura.
- Conjunto marca + texto: 160 px de largura no minimo em telas desktop.

### 4.6 Variacoes do logotipo

#### Versao principal

Uso recomendado:

- header;
- tela inicial;
- paginas de login e cadastro;
- materiais institucionais digitais.

#### Versao reduzida

Uso recomendado:

- favicon;
- telas com pouco espaco;
- elementos compactos de interface;
- mobile quando a area horizontal for limitada.

#### Versao monocromatica

Uso recomendado:

- fundos muito complexos;
- impressos em preto e branco;
- situacoes em que a marca precise reduzir informacao cromatica.

#### Versao negativa

Uso recomendado:

- sobre fundos escuros;
- paineis, hero sections ou areas de destaque com pouco contraste.

## 5. Processo Criativo

A identidade visual foi definida a partir de tres diretrizes principais:

- abordagem institucional, sem excesso decorativo;
- linguagem visual digital, leve e contemporanea;
- componentes com estados claros, bordas suaves e foco em acessibilidade.

O sistema utiliza um conjunto de fontes Google, paleta fria com acentos vibrantes e cards com forte hierarquia visual. A composicao privilegia espacamento generoso, cantos arredondados e contrastes suaves.

## 6. Paleta de Cores Oficial

A paleta atual do projeto foi derivada dos tokens visuais da aplicacao e prioriza azul institucional, ciano/verde de apoio, amber de destaque e neutros frios.

### 6.1 Cores primarias

| Nome              | Hex     | Uso                                                 |
| ----------------- | ------- | --------------------------------------------------- |
| Academy Primary   | #0070D6 | Acoes primarias, links, foco, identidade principal  |
| Academy Secondary | #00B35A | Estados de apoio, sucesso, elementos complementares |
| Academy Accent    | #FFAA00 | Destaques, chamadas e pontos de atencao             |

### 6.2 Cores de superficie e texto

| Nome            | Hex     | Uso                                       |
| --------------- | ------- | ----------------------------------------- |
| Academy Surface | #F5F7FA | Fundo geral e superficies suaves          |
| Academy Text    | #202C3A | Texto principal e titulos                 |
| Academy Muted   | #7892A8 | Texto secundario e informacoes auxiliares |

### 6.3 Neutros de apoio

| Nome      | Hex     | Uso                                     |
| --------- | ------- | --------------------------------------- |
| Branco    | #FFFFFF | Cards, superficies elevadas e contraste |
| Slate 100 | #E2E8F0 | Bordas, separadores e inputs            |
| Slate 500 | #64748B | Icones, placeholders e textos discretos |

### 6.4 Regras de uso

- Academy Primary deve concentrar a identidade da marca.
- Academy Secondary deve complementar, nao competir com a cor principal.
- Academy Accent deve ser usada com moderação, apenas para destacar informacoes relevantes.
- Fundos muito saturados devem ser evitados em areas de leitura longa.

## 7. Tipografia

O sistema utiliza quatro familias tipograficas carregadas via `next/font/google`.

### 7.1 Titulos

- Familia: Montserrat
- Uso: H1, H2, H3, chamadas principais e elementos de destaque
- Sensacao: institucional, moderna e precisa

### 7.2 Texto de interface

- Familia: Open Sans
- Uso: navegacao, labels, textos de apoio e componentes gerais
- Sensacao: clara, neutra e legivel

### 7.3 Texto de leitura

- Familia: Lato
- Uso: corpo de texto, descricoes e blocos editoriais
- Sensacao: humana, fluida e confortavel para leitura prolongada

### 7.4 Monoespaco

- Familia: Roboto Mono
- Uso: codigos, dados tecnicos, valores que exigem alinhamento e campos de identificacao
- Sensacao: tecnica e precisa

### 7.5 Hierarquia recomendada

- H1: Montserrat, 48-56 px, bold.
- H2: Montserrat, 32-40 px, semibold/bold.
- H3-H5: Montserrat, 20-28 px, bold.
- Corpo: Lato ou Open Sans, 16 px, line-height 1.5 a 1.7.
- Mono: Roboto Mono, 13-15 px.

### 7.6 Regras tipograficas

- nao misturar fontes fora do padrao oficial da interface;
- manter titulo forte e corpo mais discreto;
- evitar uso excessivo de caixa alta em textos longos;
- privilegiar contraste e espacamento em vez de peso visual excessivo.

## 8. Aplicacoes da Marca

### 8.1 Header

O cabecalho atual utiliza:

- fundo branco translucido;
- borda inferior suave;
- efeito de blur;
- marca com bloco em degradê;
- menu com acoes objetivas.

Boas praticas:

- manter o header limpo e fixo;
- nao adicionar informacoes excessivas no topo;
- garantir contraste suficiente entre marca, links e fundo.

### 8.2 Telas de autenticacao

As telas de login, cadastro e recuperar senha usam cards centrais, bordas suaves e foco claro em campos de formulario.

Diretrizes:

- manter campos com borda sutil e foco visivel;
- destacar titulos com Montserrat;
- reduzir ruido visual ao redor do formulario;
- priorizar a conclusao da tarefa com poucos passos.

### 8.3 Dashboards

As areas administrativas e de participante seguem um layout funcional com:

- navegacao lateral;
- cards de resumo;
- tabelas e filtros;
- estados visuais para sucesso, erro e alerta.

Diretrizes:

- usar cores semanticas de forma consistente;
- manter espaco entre blocos para leitura rapida;
- usar monospace apenas quando o dado exigir precisao visual;
- preservar a hierarquia entre resumo, detalhe e acao.

### 8.4 Componentes principais

Componentes que definem a linguagem visual do projeto:

- Button com borda arredondada e efeito de elevacao;
- Card com fundo branco, borda suave e sombra discreta;
- Input com foco em azul e cantos arredondados;
- Badge para estados e etiquetas;
- Side nav com destaque em gradiente e item ativo evidente.

## 9. Proibicoes de Uso

### 9.1 Nao alterar a paleta oficial

Nao substituir as cores da interface por tons fora da identidade do projeto sem justificativa de acessibilidade ou produto.

### 9.2 Nao distorcer a marca

Nao esticar, comprimir, rotacionar ou aplicar filtros agressivos sobre o simbolo da marca.

### 9.3 Nao comprometer o contraste

Nao aplicar texto claro sobre fundo claro, nem texto escuro sobre fundos insuficientemente contrastados.

### 9.4 Nao misturar tipografias aleatorias

Nao inserir fontes decorativas, manuscritas ou incompativeis com o tom institucional do sistema.

### 9.5 Nao exagerar em efeitos

Nao usar sombras pesadas, neon, blur excessivo ou animacoes que prejudiquem a leitura e a performance.

### 9.6 Nao sobrecarregar o cabecalho

O topo da pagina deve permanecer objetivo. Evite excesso de links, textos promocionais ou elementos que reduzam a clareza da navegacao.

## 10. Prototipo e Prints

Este manual deve ser acompanhado de capturas reais do front-end em uso para validar a consistencia visual ao longo do tempo.

Imagens recomendadas para insercao futura:

- tela inicial;
- login;
- cadastro;
- dashboard do administrador;
- dashboard do participante;
- formulario de edicao;
- visualizacao de certificados.

Referencias de implementacao no codigo:

- [app/layout.tsx](app/layout.tsx)
- [app/globals.css](app/globals.css)
- [tailwind.config.ts](tailwind.config.ts)
- [components/layout/site-header.tsx](components/layout/site-header.tsx)

## 11. Historico de Versoes

| Versao | Data         | Mudancas                                                                                                                     |
| ------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 1.0    | Maio de 2026 | Estruturacao formal do manual, com ficha tecnica, identificacao da marca e consolidacao das diretrizes visuais do front-end. |

## 12. Creditos

### Projeto

AcademyFlow - front-end em Next.js para gestao academica.

### Autor do manual

2️⃣ Jose Paulo Archetti Conrado
Função: Desenvolvedor Full stack / Documentação

Responsabilidades:
Front-end, Back-end e documentação
Otimização de performance
Testes e validação

📧 ppconrado@yahoo.com.br

🔗 @ppconrado

Front-end com base na implementacao atual da interface e nos padroes visuais do aplicativo.

### Tecnologias utilizadas na interface

- Next.js
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React
- next/font

### Observacao final

A identidade visual deve ser tratada como parte do produto. Quando a interface evoluir, este manual deve ser atualizado junto com os tokens de cor, a tipografia e os principais componentes de navegacao.
