# AYORA — Arte para Memórias

Landing Page institucional da AYORA, marca brasileira de Design Emocional que transforma a posição real das estrelas de uma data, horário e localização em obras de arte personalizadas.

## Objetivo

Apresentar a AYORA como uma marca premium de **Arte para Memórias**: uma experiência de design autoral, significado e cuidado que vai além da decoração. A página guia a pessoa visitante da descoberta da proposta até o início do atendimento via WhatsApp.

## Descrição

O layout foi desenvolvido do zero em uma linguagem editorial, minimalista e contemplativa. A narrativa usa espaço em branco, paleta natural, imagens de produto e uma sequência de leitura pensada para transmitir valor percebido antes da conversão.

Todos os logotipos e o favicon fornecidos foram preservados como arquivos de imagem, sem redesenho ou alteração da marca.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3, com custom properties, Grid e abordagem mobile-first
- JavaScript Vanilla
- Imagens locais em PNG/JPG e favicon local

Não há frameworks, bibliotecas externas ou etapa de build. O projeto pode ser publicado diretamente no GitHub Pages.

## Estrutura das pastas

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
│   │   ├── colecao-mapas.png
│   │   ├── experiencia-embalagem.png
│   │   ├── mapa-estelar-claro.png
│   │   ├── duas-versoes.png
│   │   └── poster-ayora.png
│   ├── icons/
│   ├── logos/
│   │   ├── logo-principal.jpg
│   │   ├── logo-secundario.jpg
│   │   └── submarca.jpg
│   └── fonts/
└── favicon/
    └── favicon.jpg
```

As demais variações de logotipo fornecidas também permanecem em `assets/logos/` para uso futuro.

## Funcionalidades

- Navegação responsiva e acessível, com menu para telas pequenas.
- CTAs distribuídos conforme a jornada de conversão.
- Formulário de personalização com validação nativa.
- Geração de mensagem preenchida para WhatsApp após o envio do formulário.
- FAQ com elementos `details`/`summary`, compatíveis com teclado.
- Animações discretas acionadas por viewport e respeitando `prefers-reduced-motion`.
- Ano do rodapé atualizado automaticamente.
- Favicon, metas SEO, Open Graph e Twitter Card.

## Estrutura da Landing Page

1. Hero: proposta de valor e CTA principal.
2. Essência: manifesto de Arte para Memórias.
3. Como funciona: compartilhar, compor e receber.
4. Coleção: formatos, molduras, arte digital e edições especiais.
5. Experiência AYORA: produção, embalagem e detalhes do presente.
6. Personalização: formulário para iniciar o pedido.
7. Perguntas frequentes.
8. CTA final e rodapé.

## Estratégia de UX

A página segue a sequência **descobrir → compreender → visualizar → confiar → personalizar**. Textos curtos, respiros visuais e CTAs em momentos naturais reduzem a carga cognitiva. No celular, o conteúdo e o formulário passam para uma coluna única e os alvos de toque mantêm área confortável.

## Estratégia de SEO

- `title`, meta description, canonical e robots configurados.
- Metadados Open Graph e Twitter Card para compartilhamento.
- Estrutura semântica com `header`, `nav`, `main`, `section`, `article`, `figure`, `form` e `footer`.
- Um único `h1` e hierarquia de headings por seção.
- Textos alternativos descritivos nas imagens de conteúdo.
- JavaScript com `defer`, carregamento tardio das imagens fora da primeira dobra e sem dependências de terceiros.

Antes de publicar em domínio próprio, substitua o valor relativo de `canonical` e `og:image` em `index.html` pelas URLs absolutas finais.

## Estratégia de conversão

O site não usa linguagem agressiva: a conversão nasce da história que a pessoa deseja preservar. O formulário coleta somente os dados necessários para o primeiro contato e abre uma mensagem estruturada no WhatsApp, facilitando o atendimento humano e a finalização da compra.

## Acessibilidade

- Link para pular diretamente ao conteúdo principal.
- Contraste reforçado entre textos e planos de fundo.
- Foco visível e navegação completa por teclado.
- Labels associados a todos os campos do formulário.
- Mensagens do formulário anunciadas com `aria-live`.
- Menu com estado `aria-expanded`, fechamento por `Escape` e navegação por teclado.
- Redução de animações para pessoas que ativarem essa preferência no sistema.

## Como executar localmente

Abra `index.html` diretamente no navegador ou sirva a pasta com um servidor local. Exemplo usando Python:

```bash
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Configurar o WhatsApp

O número não foi incluído no briefing e, por isso, precisa ser informado antes da publicação:

1. Abra `js/script.js`.
2. Localize `const WHATSAPP_NUMBER = '';` no início do arquivo.
3. Informe somente os dígitos com país e DDD. Exemplo: `5511999999999`.

Ao enviar o formulário, a pessoa será direcionada ao WhatsApp com os dados da personalização já preenchidos. Sem essa configuração, o site mostra uma orientação em vez de encaminhar para um contato inexistente.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o conteúdo desta pasta para a branch `main`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/(root)`.
5. Salve e aguarde a URL de publicação.
6. Atualize a URL canônica, a imagem Open Graph e o número de WhatsApp antes de divulgar o site.

## Como editar os textos

Todos os textos ficam em `index.html`. Cada área possui um `id` identificável, como `#historia`, `#como-funciona`, `#colecao`, `#personalizar` e `#perguntas`. Altere o texto dentro das tags preservando os títulos, `alt` das imagens e a hierarquia de headings.

## Como trocar imagens

1. Coloque a nova imagem em `assets/images/` ou uma marca em `assets/logos/`.
2. Atualize o `src` correspondente no `index.html`.
3. Ajuste `alt`, `width` e `height` quando aplicável.

Para fotos novas, prefira WebP ou AVIF e uma dimensão próxima ao espaço exibido. Os arquivos de logo atuais devem permanecer sem edição para preservar a marca.

## Como alterar cores

As cores ficam centralizadas no começo de `css/style.css`, dentro de `:root`:

- `--forest`: verde institucional (`#33423b`)
- `--sand`: dourado de detalhes (`#be9763`)
- `--paper`: off white de fundo (`#f1ebe4`)
- `--ink` e `--muted`: cores de leitura

Altere os tokens, não cada regra individual, para manter consistência no design system.

## Como alterar fontes

As famílias estão centralizadas nos tokens `--serif` e `--sans` em `css/style.css`, preparados respectivamente para **Tropical Avenue Personal Use On Regular** e **Montserrat**.

Para usar os arquivos licenciados da marca, adicione versões `.woff2` em `assets/fonts/`, declare-as com `@font-face` no topo de `style.css` e mantenha os nomes dos tokens. Enquanto elas não forem adicionadas, o site utiliza fontes de sistema semelhantes como fallback.

## Como adicionar novas seções

1. Inclua uma nova `<section>` dentro de `<main>` em `index.html`.
2. Dê um `id` único e um `h2` descritivo à seção.
3. Adicione os estilos correspondentes em `css/style.css`.
4. Inclua o novo link nas navegações, se ele fizer parte da jornada principal.
5. Mantenha o padrão de espaçamento e os tokens de cor existentes.

## Melhorias futuras

- Integrar um gerador de mapa estelar baseado em dados astronômicos reais.
- Conectar o formulário a CRM, e-commerce ou automação de atendimento autorizada.
- Criar página de produto e fluxo de checkout próprio.
- Incluir avaliações reais e autorizadas de clientes.
- Adicionar páginas de privacidade, trocas, termos e política de cookies.
- Converter as imagens de produto para WebP/AVIF quando a curadoria final for concluída.
- Configurar analytics, Search Console e eventos de conversão.

## Licença

Todos os direitos reservados à AYORA. O código, os conteúdos e principalmente os ativos de marca não devem ser reutilizados sem autorização.
