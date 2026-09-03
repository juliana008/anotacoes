# Anotações Gerais

## REFERÊNCIAS LITERÁRIAS
* [**Arquitetura Limpa**](Livros/Arquitetura%20Limpa%20-%20O%20Guia%20do%20Artes%C3%A3o%20para%20Estrutura%20e%20Design%20de%20Software%20-%20Autor%20(Robert%20C.%20Martin).pdf)

    * _Robert C. Martin_

* [**Clean Code**](Livros/C%C3%B3digo%20limpo%20-%20Habilidades%20pr%C3%A1ticas%20do%20Agile%20Software%20-%20Autor%20(Robert%20C.%20Martin).pdf)
    * _Robert C. Martin_
## Aula 1: Introdução

> Qualidade Interna x Qualidade externa

Qualidade interna: atributos como modularidade, coesão, padronização, cobertura de testes

Qualidade externa: Foco no usuário final, interfce e atributos de comportamento, robustes e disponibilidade

### Padrões
#### PEP8
    Se refere ao layout do código.

    1. Indentação
        Utilização de 4 espaços por nível (não usar tabs)
    2. Tamanho da linha
        Limite de 79 caracteres por linha
    3. Linhas em brando
        2 linhas em branco antes de funções e classes globais
    4. Nomes de variáveis e funções
        snake_case
    5. Nome de classes
        CamelCase
    6. Nome de constantes
        MAIUSCULA_SEPARADA_POR_UNDERLINE
    7. Espaços
        Não devem ser colocados espaços dentro de perênteses, colchetes ou chaves
#### PEP257

    Documentação de docstrings

    1. Aspas triplas ao redor de docstring(""") mesmo se a string ocupar apenas uma linha
    2. A primeira linha deve ser uma frase curta que resume o comportamento do objeto
    3. Em docstrings mais longas, deixar uma linha em branco entre o resumo e a escrição detalhada
    4. Uso de (r""") se houver (\) no texto
    5. O resumo deve conter verbos no imperativo
    6. Documentar 
        - O que a função faz
        - Os parâmetros esperados
        - Valor retornado

#### GOOGLE STYLE

    Hierarquia e padrões de estilo | Boas práticas da escrita

    1. Use um título no início do documento para o nome principal
    2. Organizar seções e subseções com headings coerentes
    3. Clareza utilizando frases curtas
    4. Ações diretas em vez de termos vagos
    5. Empregar marcadores de listas para detalhar itens passo a passo (*)

Exemplo:

```
def connect_to_next_port(self, minimum: int) -> int:
    """Connects to the next available port.

    Args:
        minimum: A port value greater or equal to 1024.
    Returns:
        The new minimum port.
    
    Raises:
        ConnectionError: if no available port is found.
    """
```
---

## Aula 2

* Ao abrir um projeto python, deve ser criado um ambiente para evitar problemas de compatibilidade de versão no futuro
(Acho que deve funcionar como um container)

---

1. Criar o ambiente
```python -m venv .venv```

Para criar um ambiente nomeado venv


2. Acessar o ambiente

Digitar no terminal:

```$ Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser```

Em seguida:

```./.venv/Scripts/activate```

Dentro da venv, é possível executar o código.

Nessa aula, foi criado o jogo [Game2D_Alien](Alta_Qualidade_de_Software\Game2D_Alien\src\alien_invasion.py), onde é possível realizar o passo a passo acima.

Para rodar o jogo, em seguida inserir o comando ```pip install pygame-ce``` 

---

## Aula 3

* Ao finalisar de escrever o código: realizar uma análise estática
    Sem rodar o c´podigo, analisar sua estrutura para identificar pontos de melhora

Ferramentas:
1. 

### Conventional Commits
Padrão de commits

[Documentação](https://www.conventionalcommits.org/pt-br/v1.0.0/)

### Criando branchs

* main
    * develop
        * feature\analise-estatica

#### Comandos

Criar uma branch:
````git switch -c develop```
Cria um abranch chamada branch

```git switch -c feature/analise-estatica```

```git branch -v``` Monstra os branchs criados

### Ruff
Ruff é um aferramenta de análise estática de código para Python usada para verificar qualidade, estilo e possiveis erros no código sem executá-lo
1. ```pip install ruff```

2. Acessar a pasta src 
```$ cd src``` 

    ```ruff check .```
Para checar os erros que o ruff consegue perceber

3. Corrigir os erros que ele encontra:
```ruff check . --fix```

4. Formatar o código:
```ruff format .``` --> De acordo com o pip8

#### Mypy

Verificação de tipagem estática.
Verifica se os tipos das variáveis estão coerentes.

1. Instalação> ```pip install mypy```

2. Entrar na pasta onde estão os arquivos (src)

3. Executar: ```mypy .```

4. Para uma avaliação mais rigorosa: ```mypy --strict .```

### Type Hints

Type hints são anotações de tipos em Python usadas para indicar qual tipo de dado uma variável, parâmetro ou retorno de função deve ter.

Melhora a legibilidade de código e na detecção de erros

Antes:
```
def soma(a, b):
return a+b
```

Depois:
```
def soma(a: int, b: int) -> int:
return a+b
```
* A seta indica o tipo que a função retorna

### Mokey Type
Ferramenta para aplicar o Type Hints

* Gera type Hints a partir da execução

1. Instalar> ```pip install monkeytype```

2. Rodar o arquivo desejado na pasta onde estão localizados os arquivos (src)
```
monkeytype run alien_invasion.py
```

3. Após encerrar o programa, rodar:
```
monkeytype apply alien_invasion
monkeytype apply ship
monkeytype apply alien
monkeytype apply bullet
monkeytype apply settings
```

Em todos os aqruivos que deseja executar as modificações

## Aula 4

### SOLID

* **S** (Single Responsibility Principle): Cada parte do código faz só uma coisa. Tem só um motivo para mudar.
* **O** (Open-Closed Principle): O código fica aberto para receber novas funções, mas fechado para mexer no que já funciona.
* **L** (Liskov Substitution Principle): Objetos filhos devem poder substituir os objetos pais sem quebrar o programa.
* **I** (Interface Segregation Principle): É melhor ter várias regras pequenas e específicas do que uma regra gigante que obriga a usar o que não precisa.
* **D** (Dependency Inversion Principle): O código deve depender de ideias gerais e abstratas, e não de detalhes específicos que mudam fácil

#### Open/Closed Principle:
    Deve haver uma classe mãe, para agir de modo abstrato, e classes filhas implementem funcionalidades específicas possibilitando a escalabilidade.

#### Liskov Substitution Principle
    As subclasses mantém o comportamento esperado da superclasse

#### Interface Segregation Principle