from abc import ABC, abstractmethod
from interfaces import *


class Desconto(ABC):
    @abstractmethod
    def calcular(self):
        pass
    
    
class normal(IDesconto):             
    def calcular(self, valor) -> float:
        return (valor*0.1)

class DescontoVIP(IDesconto, ICupom, IVIP):
    def calcular(self, valor):
        return valor * 0.2
    
    def aplicar_cupom(self, codigo):
     return True
 
    def validar_usuario_vip(self, usuario):
        return usuario=="vip"
    

class premium(IDesconto):
    
    def calcular(self, valor) -> float:
        return (valor*0.3)
    