from desconto import *


valor = int(input("Digite o valor da compra: "))


cliente_normal = normal(valor)
cliente_vip = vip(valor)
cliente_premium = premium(valor)

print(f"Desconto normal: R$ {cliente_normal.calcular():.2f}")
print(f"Desconto vip: R$ {cliente_vip.calcular():.2f}")
print(f"Desconto premium: R$ {cliente_premium.calcular():.2f}")