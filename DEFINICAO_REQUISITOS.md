# MVP – Sistema de Conversão de Moedas

Este documento descreve as **principais funcionalidades do MVP** de um sistema de conversão de moedas, com foco em simplicidade, confiabilidade e clareza para o usuário.

---

## 1. Conversão em tempo real com fonte confiável

Permite a conversão de moedas utilizando taxas de câmbio atualizadas em tempo real a partir de uma fonte confiável.

**Detalhes principais:**

* Integração com uma única API de câmbio.
* Atualização automática das taxas.
* Exibição da data e hora da última atualização.
* Uso da última taxa válida em caso de falha temporária da API.

---

## 2. Conversão simples e direta

Facilita a conversão de valores com o mínimo de interações possíveis.

**Detalhes principais:**

* Campo para valor base.
* Seleção de moeda de origem e destino.
* Conversão automática em tempo real.
* Botão para inverter moedas.
* Validação para aceitar apenas valores numéricos positivos.

---

## 3. Transparência no cálculo

Garante que o usuário entenda claramente como o valor convertido foi obtido.

**Detalhes principais:**

* Exibição explícita da taxa de câmbio utilizada.
* Demonstração da fórmula do cálculo.
* Indicação do arredondamento aplicado.
* Confirmação de ausência de taxas adicionais no sistema.

---

## 4. Conjunto essencial de moedas

Disponibiliza apenas as moedas mais relevantes para o público-alvo, reduzindo complexidade.

**Detalhes principais:**

* Lista fixa de moedas pré-definidas.
* Uso do padrão ISO 4217.
* Exibição de código, nome e símbolo da moeda.
* Busca por nome ou código.

---

## 5. Principais pares de moedas

Oferece acesso rápido às conversões mais utilizadas.

**Detalhes principais:**

* Lista de pares de moedas populares (ex: USD/BRL, EUR/USD).
* Seleção rápida com preenchimento automático das moedas.
* Atualização da taxa conforme o par selecionado.

---

## 6. Gráfico em tempo real do histórico de altas e baixas

Permite visualizar a variação recente da taxa de câmbio do par selecionado.

**Detalhes principais:**

* Gráfico de linha com histórico de variação.
* Atualização automática conforme novas taxas.
* Seleção de período (ex: 1h, 24h, 7d).
* Indicação do maior e menor valor do período exibido.

---

## Objetivo do MVP

Entregar uma solução de conversão de moedas **rápida, confiável e transparente**, validando o uso do produto antes da evolução para funcionalidades mais avançadas.
