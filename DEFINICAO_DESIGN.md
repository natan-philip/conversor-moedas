# Wireframe e Padrões de Design — Sistema de Conversão de Moedas

## 1. Intuito do Sistema

O **Conversor de Moedas** tem como objetivo oferecer **conversões rápidas, claras e confiáveis**, minimizando esforço cognitivo. O usuário deve compreender instantaneamente:

* Qual moeda está convertendo
* Para qual moeda
* Qual taxa está sendo usada
* Qual é o resultado final

O design deve transmitir:

* **Confiança** (dados financeiros)
* **Simplicidade** (uso frequente e rápido)
* **Precisão** (evitar ambiguidades)

---

## 2. Paleta de Cores

### Conceito

Cores associadas a **finanças, estabilidade e clareza**, com alto contraste e poucos elementos distrativos.

### Paleta Sugerida

* **Primária:** Verde suave (#51DE88)

  * Representa confiança e tecnologia
* **Secundária:** Verde escuro (##2FA84F)

  * Associado a dinheiro e confirmação
* **Neutros:**

  * Branco (#FFFFFF) — fundo principal
  * Cinza claro (#F4F6F8) — cards e inputs
  * Cinza médio (#7c7d7e) — textos secundários
  * Cinza escuro (#2B2F33) — textos principais
* **Feedback:**

  * Sucesso: Verde (#2FA84F)
  * Erro: Vermelho (#E5484D)
  * Aviso: Amarelo (#F5A524)

Uso recomendado:

* Fundo limpo e claro
* Destaques apenas no resultado e ações principais

---

## 3. Layout do Projeto

### Estrutura Geral (Mobile First)

**Header**

* Logo ou nome do sistema
* Opção de idioma (ícone discreto)

**Área Principal (Card Central)**

* Campo "Valor de entrada"
* Seletor de moeda origem
* Ícone de troca (↔)
* Seletor de moeda destino
* Botão primário: "Converter"

**Resultado**

* Valor convertido em destaque
* Taxa de câmbio utilizada
* Data/hora da cotação

**Rodapé**

* Fonte da cotação
* Informação legal ou aviso

### Grid

* 8px system
* Margens amplas
* Conteúdo centralizado

---

## 4. Padrão de Arredondamento

### Conceito

Arredondamento transmite **modernidade e suavidade**, sem perder seriedade.

### Padrão

* Inputs e botões: **8px**
* Cards: **12px**
* Chips ou badges: **16px**

Nunca misturar múltiplos padrões no mesmo nível hierárquico.

---

## 5. Padrão de Loading States

### Conversão em andamento

* Skeleton loader no campo de resultado
* Spinner discreto no botão "Converter"
* Botão desabilitado durante o carregamento

### Boas práticas

* Loading nunca deve bloquear a interface inteira
* Mensagem opcional: "Buscando cotação atual"

---

## 6. Padrão de Mensagens ao Usuário

### Tipos de Mensagem

**Sucesso**

* Verde
* Texto claro e direto
* Ex: "Conversão realizada com sucesso"

**Erro**

* Vermelho
* Linguagem humana
* Ex: "Não foi possível obter a cotação no momento"

**Aviso**

* Amarelo
* Ex: "Cotação pode variar conforme o mercado"

### Localização

* Sempre próximas à ação
* Nunca em pop-ups intrusivos

---

## 7. Padrão de Tipografia

### Fonte Recomendada

* **Inter**, **Roboto** ou **SF Pro**

### Hierarquia

* Título principal: 20–24px / Semibold
* Labels: 12–14px / Medium
* Texto padrão: 14–16px / Regular
* Resultado: 28–32px / Bold

### Boas práticas

* Evitar itálico
* Números sempre com alinhamento tabular

---

## 8. Wireframe Textual (Fluxo Principal)

```
[HEADER]
Logo Conversor     🌐

[CARD PRINCIPAL]
Label: Valor
[ 100.00 ]

Label: De
[ USD ▼ ]   ↔   [ BRL ▼ ]

[ Botão Converter ]

[RESULTADO]
R$ 498,32

Cotação: 1 USD = 4,9832 BRL
Atualizado em: 11:42

[RODAPÉ]
Fonte: Banco Central / API XYZ
```

---

## 9. Considerações Finais

Este sistema deve priorizar:

* **Velocidade de uso** (1–2 interações)
* **Leitura instantânea do resultado**
* **Credibilidade visual**

Design simples, consistente e funcional é mais importante do que efeitos visuais avançados.

Se desejar, posso:

* Criar um **Design System completo**
* Converter este wireframe para **Figma**
* Adaptar para **dark mode**
* Criar **microinterações** detalhadas
