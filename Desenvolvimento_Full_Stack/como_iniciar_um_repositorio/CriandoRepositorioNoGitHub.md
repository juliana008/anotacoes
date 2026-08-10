# Guia Prático: Como Criar um Repositório no GitHub e Vinculá-lo ao VS Code

> Um guia passo a passo, didático e objetivo para você dominar o controle de versão e publicar seus projetos na nuvem com segurança.

---

## Objetivo
Ao final deste guia, você será capaz de:
1. Compreender a diferença entre **Git** e **GitHub**.
2. Criar um repositório local e conectá-lo a um repositório remoto no GitHub.
3. Dominar o ciclo fundamental de versionamento: `pull` $\rightarrow$ `add` $\rightarrow$ `commit` $\rightarrow$ `push`.
4. Executar o fluxo completo tanto via **Terminal (Bash)** quanto pela **Interface do VS Code**.

---

## O Ciclo de Trabalho (Workflow)

Toda alteração no seu projeto segue uma rotina lógica e simples de 4 passos:

$$\text{1. Editar} \longrightarrow \text{2. Add (Staging)} \longrightarrow \text{3. Commit (Histórico)} \longrightarrow \text{4. Push (GitHub)}$$

1. **Editar**: Você cria ou modifica arquivos no VS Code.
2. **Add**: Seleciona quais arquivos modificados farão parte do próximo registro.
3. **Commit**: Salva um "ponto de restauração" no histórico local com uma mensagem explicativa.
4. **Push**: Envia os commits locais para o repositório remoto no GitHub.

> **Dica de Ouro:** Se você trabalha em equipe ou acessa o projeto de mais de um computador, **sempre comece com o `git pull`** para baixar as atualizações mais recentes do servidor antes de editar seus arquivos!

---

## Pré-requisitos & Preparação

Certifique-se de ter as ferramentas configuradas antes de prosseguir:

1. **Conta no GitHub**: Crie sua conta gratuitamente em [github.com](https://github.com).
2. **Git Instalado**: Verifique no terminal digitando:
   ```bash
   git --version
# Configuração de Identidade (Primeira Vez)

Para garantir que seus commits fiquem vinculados ao seu perfil do GitHub, configure seu nome e e-mail no terminal:

```bash
# Configura seu nome de exibição
git config --global user.name "Seu Nome"

# Configura o e-mail
# Deve ser o mesmo associado à sua conta do GitHub
git config --global user.email "seuemail@exemplo.com"

# Verifica as configurações aplicadas
git config --global --list
```

---

# Passo a Passo: Método 1 — Via Terminal (Git Bash)

## Passo 1: Criar o Repositório no GitHub

1. Acesse [github.com](https://github.com/) e clique em **New repository** ou no ícone `+` no canto superior direito.
2. Informe um **Repository name** claro, por exemplo:

   ```text
   meu-primeiro-projeto
   ```
3. Escolha a visibilidade:

   * **Public**
   * **Private**
4. Se você estiver enviando um projeto local existente, deixe as opções de inicialização, como **README** e **.gitignore**, desmarcadas.
5. Clique em **Create repository**.
6. Copie a **URL HTTPS** gerada pelo GitHub.

Exemplo:

```text
https://github.com/seuusuario/meu-primeiro-projeto.git
```

---

## Passo 2: Inicializar o Repositório Local

Abra o terminal dentro da pasta do seu projeto.

No VS Code, você pode utilizar:

**Terminal → Novo Terminal**

Ou, no Windows, clique com o botão direito dentro da pasta e selecione **Git Bash Here**.

Execute:

```bash
# Inicializa o repositório Git local
# Isso cria a pasta oculta .git
git init

# Verifica o estado atual dos arquivos
git status
```

### Entendendo o `git status`

O comando `git status` mostra o estado atual do seu projeto.

| Status                    | Significado                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `Untracked files`         | Arquivos novos que o Git ainda não está acompanhando         |
| `Changes not staged`      | Arquivos alterados, mas ainda não selecionados para o commit |
| `Changes to be committed` | Arquivos preparados e prontos para serem registrados         |
| `Working tree clean`      | Não existem alterações pendentes                             |

---

## Passo 3: Preparar e Criar o Primeiro Commit

Primeiro, adicione os arquivos à área de preparação (*staging area*):

```bash
# Adiciona todos os arquivos da pasta
git add .
```

Depois, crie o primeiro commit:

```bash
# Registra a primeira versão no histórico local
git commit -m "Primeira versão do projeto"
```

### Boas práticas para mensagens de commit

A mensagem do commit deve explicar claramente o que foi alterado.

### Bons exemplos

```text
Adiciona página inicial
```

```text
Corrige validação do formulário
```

```text
Atualiza documentação
```

### Evite mensagens vagas

```text
teste
```

```text
alterações
```

```text
atualização
```

> **Dica:** prefira mensagens curtas e objetivas que permitam entender o que foi feito apenas olhando para o histórico.

---

## Passo 4: Conectar ao GitHub e Enviar (`Push`)

Agora vamos conectar o repositório local ao repositório criado no GitHub.

```bash
# Define o repositório remoto como "origin"
git remote add origin https://github.com/seuusuario/meu-primeiro-projeto.git

# Define "main" como a branch principal
git branch -M main

# Envia o projeto para o GitHub
# O -u cria o vínculo entre a branch local e a remota
git push -u origin main
```

Depois do `push`, atualize a página do repositório no GitHub. Os arquivos do seu projeto deverão aparecer lá.

---

# Passo a Passo: Método 2 — Via Interface do VS Code

O VS Code oferece uma interface gráfica que permite executar o fluxo do Git sem precisar digitar todos os comandos manualmente.

## 1. Abrir o Projeto

Abra a pasta do seu projeto no VS Code:

**Arquivo → Abrir Pasta**

Selecione a pasta que contém os arquivos do projeto.

---

## 2. Acessar o Controle de Código-Fonte

Na barra lateral esquerda do VS Code, clique no ícone:

**Controle do Código-Fonte**

Ou utilize o atalho:

```text
Ctrl + Shift + G
```

---

## 3. Inicializar o Repositório

Se o projeto ainda não possuir um repositório Git, o VS Code exibirá a opção:

**Inicializar Repositório** (*Initialize Repository*)

Clique nela.

Isso corresponde ao comando:

```bash
git init
```

---

## 4. Adicionar os Arquivos (`git add`)

Na lista de **Alterações**, você verá os arquivos modificados ou novos.

Clique no botão:

```text
+
```

ao lado do arquivo para **Preparar a Alteração** (*Stage*).

Para adicionar todos os arquivos de uma vez, utilize o `+` da seção **Alterações**.

Isso corresponde ao:

```bash
git add .
```

Depois de preparados, os arquivos aparecerão em:

**Alterações Preparadas** (*Staged Changes*).

---

## 5. Realizar o Commit (`git commit`)

Na parte superior do painel **Controle do Código-Fonte**, digite uma mensagem para o commit.

Exemplo:

```text
Cria primeira versão do projeto
```

Depois clique em:

**Commit**

Ou utilize:

```text
Ctrl + Enter
```

Isso corresponde ao comando:

```bash
git commit -m "Cria primeira versão do projeto"
```

---

## 6. Publicar o Projeto no GitHub (`git push`)

Na primeira vez que você enviar o projeto, o VS Code poderá apresentar a opção:

**Publicar Branch** (*Publish Branch*)

Clique nela.

O VS Code poderá solicitar que você faça login ou autorize o acesso à sua conta do GitHub.

Depois, escolha se o repositório será:

* **Public**
* **Private**

Após a publicação, o projeto estará disponível no GitHub.

### Nos próximos envios

Depois que o projeto já estiver conectado ao GitHub, utilize:

**Sincronizar Alterações** (*Sync Changes*)

Essa opção permite enviar suas alterações e receber alterações do repositório remoto.

---

# Rotina Diária de Trabalho

Depois que o projeto estiver conectado ao GitHub, o processo de atualização fica simples.

## Via Terminal

```bash
# 1. Baixa as atualizações do GitHub
git pull origin main

# 2. Prepara as alterações locais
git add .

# 3. Registra uma nova versão
git commit -m "Atualiza a página de contato"

# 4. Envia as alterações para o GitHub
git push
```

---

## Via VS Code

### 1. Sincronizar

Antes de começar, utilize **Sync Changes** ou **Pull** para receber possíveis atualizações do GitHub.

### 2. Editar

Faça as alterações necessárias no código.

### 3. Preparar

Abra o **Controle do Código-Fonte** e clique no:

```text
+
```

para preparar as alterações.

### 4. Commit

Escreva uma mensagem descrevendo a alteração e clique em:

**Commit**

### 5. Enviar

Clique em:

**Sync Changes**

para enviar suas alterações ao GitHub.

---

# Equivalência de Comandos: Bash vs. VS Code

| Ação                  | Comando no Git Bash    | Ação equivalente no VS Code            |
| --------------------- | ---------------------- | -------------------------------------- |
| **Verificar status**  | `git status`           | Painel **Controle do Código-Fonte**    |
| **Preparar arquivos** | `git add .`            | Botão **`+`**                          |
| **Registrar versão**  | `git commit -m "..."`  | Campo de mensagem + **Commit**         |
| **Enviar alterações** | `git push`             | **Sync Changes** ou **Publish Branch** |
| **Baixar alterações** | `git pull origin main` | **Sync Changes** ou **Pull**           |

---

# Erros Frequentes e Como Evitá-los

## Esquecer o `git add`

Se você tentar fazer um commit sem preparar os arquivos, as alterações podem não ser incluídas no registro.

Antes do commit, confira o painel **Controle do Código-Fonte** e certifique-se de que os arquivos estão em **Staged Changes**.

No terminal, você pode verificar com:

```bash
git status
```

---

## Fazer `push` sem dar `pull`

Se o repositório remoto possuir alterações que você ainda não possui localmente, o `push` poderá ser rejeitado.

Antes de começar a trabalhar em um projeto compartilhado, faça:

```bash
git pull origin main
```

No VS Code, você pode utilizar **Pull** ou **Sync Changes**.

---

## Publicar arquivos sensíveis

🚨 **NUNCA** envie para o GitHub:

* senhas;
* chaves de API;
* tokens;
* credenciais;
* senhas de banco de dados;
* arquivos `.env` que contenham informações sensíveis.

Utilize um arquivo:

```text
.gitignore
```

para informar ao Git quais arquivos e pastas devem ser ignorados.

Por exemplo:

```gitignore
.env
node_modules/
```

> **Regra de ouro:** se um arquivo contém uma informação que não deveria ser pública, não o envie para o GitHub.
