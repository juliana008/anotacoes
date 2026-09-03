from desconto import *

def aplicar_desconto(desconto: Desconto, valor: float) -> float:
    return desconto.calcular(valor)

def aplicar_cupom(desconto: DescontoVIP, codigo: str) -> bool:
    return desconto.aplicar_cupom(codigo)

if __name__=="__main__":
    

    valor = float(input("Digite o valor da compra: "))


    cliente_normal = normal()
    cliente_premium = premium()
    cliente_vip = DescontoVIP()

    print("Desconto normal: R$ ", aplicar_desconto(cliente_normal, valor))
    print("Desconto vip: R$ ", aplicar_desconto(cliente_vip, valor))
    print("Desconto premium: R$ ", aplicar_desconto(cliente_premium, valor))
    
    print("Cupom VIP: ", aplicar_cupom(cliente_vip, "DESC10"))