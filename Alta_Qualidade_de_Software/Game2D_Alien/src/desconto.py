from abc import ABC, abstractmethod

class Desconto(ABC):
    @abstractmethod
    def calcular(self):
        pass
    
    
class normal(Desconto):
    
    def __init__(self, valor):
        self.valor = valor
                

    def calcular(self) -> float:
        return (self.valor*0.1)

class vip(Desconto):

    def __init__(self, valor):
            self.valor = valor
                    
    
    def calcular(self) -> float:
        return (self.valor*0.2)


class premium(Desconto):

    def __init__(self, valor):
            self.valor = valor
                    
    
    def calcular(self) -> float:
        return (self.valor*0.3)
    