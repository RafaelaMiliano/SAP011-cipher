# Correio do amor / Cifra de César ![Alt text](imag8.png)

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Marco: Critérios de Aceitação Mínimos do Projeto](#5-marco-critérios-de-aceitação-mínimos-do-projeto)
* [5. Marco Opcional: Adicione suporte para letras minúsculas e outros caracteres](#5-marco-opcional-adicione-suporte-para-letras-minúsculas-e-outros-caracteres)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Para considerar o feedback do projeto](#9-para-considerar-o-feedback-do-projeto)

***

## 1. Prefácio

Encriptar significa ocultar o conteúdo de uma mensagem a olho nu,
para que somente as partes autorizadas possam decifrar um texto cifrado.
A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD



## 2. Resumo do projeto

Neste projeto o usuário irá encontrar um Correio do Amor secreto onde poderá cifrar e decifrar um texto no navegador indicando um deslocamento
específico de caracteres (_offset_) para escrever mensagens secretas de amor.


## 3. Protótipo

![Alt text](prot%C3%B3tipo.jpg)

## 4. Usabilidade


**1. O Usuário será capaz de:**

* **Criptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja criptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_) indicando quantas posições
    ele deseja que a cifra desloque cada caractere do alfabeto.
  - Ver o resultado da mensagem criptografada.


* **Descriptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja descriptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_, que corresponde ao que usamos
    para criptografar) indicando quantas posições ele deseja que a cifra
    desloque cada caractere do alfabeto.
  - Veja o resultado da mensagem descriptografada.


## 5. Experiência

O Correio do amor tem como usuário foco aquelas pessoas que desejam escrever uma mensagem de amor de maneira secreta, para que só ela e o seu destinatário saibam o conteúdo da mesma.
Se destina a toda e qualquer pessoa que queira codificar uma mensagem para alguém.
Com uma usabilidade simples, o usuário será capaz de escrever sua mensagem e a visualizar em seguida sua mensagem codificada, após isso, terá um botão apenas para traduzir esta mensagem também.

## 6. Tecnologias utilizadas

### HTML 5



### CSS 3




### Javascript




## 7. Interface

![Alt text](projeto.png)
