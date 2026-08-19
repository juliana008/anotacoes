
# Como, gerar uma tag:

## Forma geral

```
<tag atributo ="valor">
    Conteúdo
</tag>
```

## Formas de observar

### Configuração da página

* ``<head>``: informações para navegador e mecanismos de
  busca.
* ``<meta charset>``: permite acentos e caracteres especiais.
* viewport: adapta a página a celulares e tablets.
* ``<title>``: texto mostrado na aba do navegado

### Hierarquia de títulos

* ``<h1>``
* ``<h2>``
* ``<h3>``
* ``<h4>``
* ``<h5>``
* ``<h6>``

### Blocos e separações

* ``<p>`` -> Cria um parágrafo completo
* ``<br>`` -> quebra uma linha dentro do mesmo bloco
* ``<hr>`` -> indica mudança ou separação temática (linha horiontal)
* Parágrafos diferentes devem usar tags ``<p>`` diferentes
* ``<img>, <br>, <hr> e <input>`` não envolvem um conteúdo entre abertura e fechamento

### Ênfase

* ``<strong>`` marca conteúdo importamte
  * Preferir ``<strong>`` e ``<em>`` quando houver significado, não somente aparência
* ``<em>`` dá ênfase a expressão (itálico)
* ``<mark>`` destaca um trecho relevante
* ``<small>`` apresenta nota ou informação secundária

### Alterações e notações

* ``<del>`` mostra conteúdo removido ou substituído
* ``<ins>`` identifica copnteúdo acrescentado
* ``<sub>`` cria texto subscrito, útil em fórmulas
* ``<sup>`` cria sobrescrito, útil em potências e notas.

### Conectar arquivos, seções e contatos

* ``<a>`` conecta páginas, arquivos, seções e contatos
  * href: informa o destino do link
  * target="_blank" abre o destino em outra aba
  * Um caminho relativo aponta para arquivo do projeto
  * mailto: inicia uma mensagem de e-mail.
  * ``<a> Textotexto </a>`` Para apresentar um texto

### Imagem

* ``<img>`` inserir imagens
  * src informa o endereço ou caminho da imagem
  * alt descreve o conteúdo e a finalidade
  * width e height podem indicar dimensões
  * A tag não possui fechamento
  * Um bom alt permite compreender a imagem mesmo quando ela não aparece

### Unir mídia e legenda

* ``<figure>`` agrupa uma imagem ou exemplo
* ``<figcaption>`` oferece uma legenda associada
* A legenda pode ficar antes ou depois da mídia
* Esse agrupamento reforça a semântica do documento
  * Exemplo:

  ```
  <figure>
      <img src="aluno.jpeg"
      alt ="Aluno programando">
      <figcaption>
      Estudante criando uma página.
      </figcaption>
  </figure>
  ```

### Construção de listas

* ``<ul>`` Lista sem ordem obrigatória
* ``<ol> `` Sequência, classificação ou passo a passo
* ``<li>`` Cada item dentro da lista
* Listas podem ser aninhadas para criar subitens
  * Exemplo:

  ```
  <ul>
      <li>HTML</li>
      <li>CSS</li>
  </ul>
  ```

### Termos e definições

* ``<dl>`` Envolve uma lista descritiva
* ``<dt>`` Representa o termo ou nome
* ``<dd>`` Apresenta sua descrição ou valor
* É útil em glossários, perguntas e propriedades

### Tabelas

* ``````` envolve a tabela inteira
* ``<thead>`` e ``````` separam cabeçalho e dados
* ``<tr>`` cria uma linha
* ``<th>`` é um cabeçalho; ``<td>`` é célula de dado

### Formulário

* action indica para onde os dados serão enviados.
* method define como serão enviados, geralmente get ou
  post.
* Campos precisam de name para serem identificados no
  envio.
* O formulário agrupa labels, campos e botões
* Exemplo:
  ```
  <form action="/cadastrar" method="post">
      <label for="nome">Nome:</label>
      <input id="nome" name="nome"
      type="text" required>
      <button type="submit">
      Cadastrar
      </button>
  </form>
  ```

### Label

* for deve corresponder ao id do campo.
* Clicar no rótulo posiciona o foco no campo.
* O texto deve explicar claramente o dado esperado.
* placeholder não substitui um label permanente.
* Exemplço:
  ```
  <label for="email">E-mail:</label>
  <input
  type="email"
  id="email"
  name="email"
  placeholder="nome@exemplo.com"
  >
  ```

### Input

* ext, email e password recebem textos específicos.
* number e date oferecem controles adequados
* checkbox permite múltiplas escolhas.
* radio permite uma escolha dentro do mesmo name.
* Exemplo:
  * ```
    <input type="text" name="nome">
    <input type="email" name="email">
    <input type="password" name="senha">
    <input type="number" min="0" max="100">
    <input type="date" name="data">
    <input type="checkbox" name="termos">
    ```

### Textos e escolhas

* <textarea> recebe mensagens com várias linhas.
*  rows sugere a altura inicial do campo.
* <select> cria uma lista de opções.
*  <option> define cada valor disponível.
* Exemplo:
```
    <textarea name="mensagem" rows="5"
    placeholder="Digite sua mensagem"></textarea>
    <select name="curso">
    <option value="">Selecione</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    </select>
```

### Botões

* submit envia o formulário.
* reset restaura os valores iniciais.
* button não envia nada automaticamente.
* O conteúdo pode ter texto ou elementos adicionais.
* Exemplo:
    ```
    <button type="submit">Enviar</button>
    <button type="reset">Limpar</button>
    <button type="button"
    onclick="alert('Olá!')">
    Mostrar mensagem
    </button>
    ```
