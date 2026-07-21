# AYORA — Arte para Memórias

Landing Page institucional para a AYORA, marca brasileira de Design Emocional que transforma a posição real das estrelas em obras personalizadas para preservar momentos especiais.

## Objetivo

Apresentar a proposta de valor da marca de forma editorial, serena e sofisticada, conduzindo a pessoa visitante pela descoberta da marca até o início da personalização de uma peça.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 com design system, Grid e layout mobile-first
- JavaScript Vanilla para menu responsivo, animações leves e validação do formulário
- SVG para favicon

Não há frameworks, bibliotecas externas ou processo de build. O projeto pode ser publicado diretamente no GitHub Pages.

## Estrutura de pastas

```text
/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   │   ├── ayora-logo-dark.jpg
│   │   ├── ayora-logo-gold.jpg
│   │   ├── ayora-logo-light.jpg
│   │   └── ayora-symbol.jpg
│   └── fonts/
└── favicon/
    └── favicon.svg
```

## Funcionalidades

- Navegação responsiva com menu acessível em telas pequenas.
- CTAs internos que levam ao formulário de personalização.
- Formulário com campos de data, horário, local e formato, incluindo validação nativa acessível.
- FAQ com elementos HTML `details`/`summary`, compatíveis com teclado e leitores de tela.
- Animações discretas condicionadas à preferência de movimento do sistema.
- Ano do rodapé atualizado automaticamente.

## Estrutura da Landing Page

1. Hero com proposta de valor e CTA.
2. Manifesto da marca e conceito de Arte para Memórias.
3. Processo de criação em três momentos.
4. Possibilidades de formatos, molduras e edições especiais.
5. Experiência AYORA e diferenciais de produção/entrega.
6. Formulário para iniciar a personalização.
7. Perguntas frequentes.
8. CTA final e rodapé.

## Estratégia de UX

A narrativa foi organizada na sequência “entender → imaginar → confiar → agir”. O layout usa espaço em branco, blocos curtos, uma hierarquia tipográfica editorial e CTA principal repetido em pontos naturais da jornada. Em dispositivos móveis, a navegação e os campos do formulário se reorganizam para uma única coluna.

## Estratégia de SEO

- `title`, meta description, canonical e metas Open Graph/Twitter configurados no `index.html`.
- Estrutura semântica com `header`, `main`, `section`, `nav`, `article`, `form` e `footer`.
- Um único `h1` e títulos seguintes organizados por seção.
- Imagens com texto alternativo e favicon otimizado em SVG.
- Sem dependências externas e com JavaScript carregado com `defer`.

Antes da publicação, atualize a URL canônica e a imagem Open Graph para URLs absolutas do domínio final.

## Estratégia de conversão

O texto evita pressão comercial e convida a pessoa a começar pela própria memória. O formulário fica após os diferenciais da experiência para reduzir insegurança, e o FAQ remove dúvidas comuns antes do CTA final.

## Acessibilidade

- Link para pular direto ao conteúdo.
- Contraste alto entre texto e fundos.
- Navegação completa por teclado e foco visível.
- Rótulos associados a todos os campos.
- Mensagens de formulário anunciadas por `aria-live`.
- Respeito a `prefers-reduced-motion`.

## Como executar localmente

Como é um site estático, abra `index.html` no navegador ou sirva a pasta com qualquer servidor local. Por exemplo, se tiver Python instalado:

```bash
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a branch `main`.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main`, a pasta `/(root)` e salve.
5. Após a publicação, atualize `canonical`, `og:image` e qualquer link de canal de venda com a URL final.

## Como editar os textos

Todos os textos estão em `index.html`. Procure a seção desejada pelo respectivo `id` (`#historia`, `#como-funciona`, `#colecao`, `#personalizar` ou `#perguntas`) e altere apenas o conteúdo dentro das tags.

## Como trocar imagens

Coloque novas imagens em `assets/images/` ou `assets/logos/` e atualize o atributo `src` no `index.html`. Use arquivos WebP ou AVIF para fotografias de produção e inclua sempre uma descrição correta no atributo `alt`.

## Como alterar cores

As cores estão centralizadas no início de `css/style.css`, dentro de `:root`. Os principais tokens são:

- `--forest`: verde institucional
- `--sand`: dourado areia
- `--paper`: off white de fundo
- `--clay`: tom terroso complementar

## Como alterar fontes

As famílias tipográficas estão nos tokens `--serif` e `--sans` de `css/style.css`. Para usar fontes próprias, adicione os arquivos em `assets/fonts/`, declare-os com `@font-face` no começo do CSS e atualize esses tokens. Prefira `woff2` para melhor desempenho.

## Como adicionar novas seções

1. Adicione uma nova `<section>` dentro de `<main>` em `index.html`.
2. Inclua um `id` e um `h2` descritivos.
3. Crie os estilos na área correspondente de `css/style.css`.
4. Se ela precisar aparecer no menu, inclua um link para o novo `id` nas navegações de cabeçalho e rodapé.

## Integração do formulário

O formulário atual demonstra a jornada e valida os campos apenas no navegador; ele não envia informações para nenhum serviço. Para receber pedidos, conecte o evento de envio em `js/script.js` a um endpoint seguro, CRM, ferramenta de formulários ou fluxo de WhatsApp autorizado. Não coloque chaves secretas no JavaScript do site estático.

## Melhorias futuras

- Conectar o formulário ao e-commerce ou atendimento autorizado.
- Integrar gerador de mapa estelar com dados astronômicos reais.
- Incluir fotos reais de produtos e de unboxing em formatos otimizados.
- Adicionar depoimentos reais, quando disponíveis, com autorização das pessoas clientes.
- Configurar analytics, eventos de conversão e banner de cookies conforme a ferramenta escolhida.
- Criar páginas de privacidade, trocas e termos da loja.

## Licença

Todos os direitos reservados à AYORA. Os ativos de marca e os conteúdos deste projeto não devem ser reutilizados sem autorização.
