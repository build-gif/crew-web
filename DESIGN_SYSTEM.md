# Crew of Builders - Design System (Extract-Then-Build V2)

## 1. Typography (Studio Editorial)
O core do design é baseado em 3 famílias tipográficas, refletindo o PRD (Are.na / Read.cv style):
- **Wordmark / Logo:** Hand-lettered asset (PNG). Proibido usar texto puro.
- **Display (Serif):** `Fraunces` ou `GT Sectra` (fallback para \`ui-serif, Georgia, Cambria, "Times New Roman", Times, serif\`). Usado em manchetes, nomes de membros e títulos de seção.
- **Body / UI (Sans):** `Inter` ou `Söhne`. Peso padrão: 450-500. Proibido usar peso 400 (normal).
- **Mono Accent:** `Berkeley Mono` ou `JetBrains Mono`. Usado para metadados, contadores, datas e footnotes.

## 2. Color Palette (Strict Tokens)
O site é exclusivamente **Light Mode** (o "moat" visual).
- `--ink`: \`#111111\` (Textos principais, botões sólidos primários).
- `--paper`: \`#F5F1E8\` (Fundo do site, off-white quente. Proibido #FFFFFF puro no body).
- `--mint`: \`#B8E0C8\` (Acento 1. Fundo de seções, pills ativas, callouts).
- `--butter`: \`#F5E6A8\` (Acento 2. Underlines de hover, tags de "new", markers de destaque).
- `--whisper`: \`#E8E4DA\` (Bordas, esqueletos, divisórias sutis).
- `--muted`: \`#6B6B6B\` (Texto secundário, metadata monoespaçada).

*Regra de Saturação:* Mint e Butter nunca devem brigar na mesma seção. Máximo de 2 superfícies de acento por scroll-view.

## 3. UI Components & Interaction
- **Buttons (Primary):** Fundo sólido \`--ink\`, texto \`--paper\`. Radius de 6-8px. Font-weight 500. Proibido gradientes ou glassmorphism.
- **Hover States:** Links possuem um "marker" da cor \`--butter\` que desliza/aparece na base (underline animado). Cards não crescem no hover (proibido scale transform), apenas mudam a cor da borda de \`--whisper\` para \`--ink\`.
- **Shadows:** Restrição estrita. Máximo 4px blur, apenas para destaque sutil. O design é "flat" e editorial.
- **Loading/Empty States:** Esqueletos na cor \`--whisper\`. Proibido animação de "shimmer" (típico de SaaS). Estados vazios usam em-dash e fonte mono (ex: \`— No applications yet.\`).

## 4. Spacing & Grid System
- Escala base: 8px.
- Coluna de leitura (texto): \`max-width: 640px\`.
- Superfícies de UI/Grid: \`max-width: 1120px\`.
- Padding interno de Cards: 24px a 32px (Proibido 12px ou 16px apertado estilo Slack).

## 5. Curation Signals (Micro-Patterns)
- **Monospace Footnotes:** Usar mono para regras, IDs de batch e metadados.
- **Inline Photo Expansion:** Quando houver imagens de membros, expandir in-line (estilo Read.cv), não em modal.
- **The WE Heart Bridge:** No footer ou nav superior, adicionar a tag monospaced e opacidade reduzida \`Powered by WE\`.

## 6. Anti-Patterns (BANNED)
- Proibido mascotes, emojis no chrome do produto.
- Proibido bordas ultra arredondadas (estilo botão de app mobile).
- Proibido gradientes de fundo.
