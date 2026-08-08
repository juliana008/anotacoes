# Anotações Gerais

## REFERÊNCIAS LITERÁRIAS
* **Arquitetura Limpa**
    * _Robert C. Martin_

* **Clean Code**
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

