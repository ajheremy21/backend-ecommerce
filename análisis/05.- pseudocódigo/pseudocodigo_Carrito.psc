Algoritmo carritoCompras
	//En este caso lo haremos con productos ya seleccionados
	Definir shampoo, jabon, desinfectante, lavavajillas Como Real
	Definir Cantidadshampoo, Cantidadjabon, Cantidadesinfectante, Cantidadlavavajillas Como Entero
	shampoo = 20
	jabon = 4
	desinfectante = 5
	lavavajillas = 6
	Escribir "Digite  la cantidad de shampoo que desea comprar: "
	leer Cantidadshampoo
	Escribir "Digite la cantidad de jabon que desea comprar: "
	leer Cantidadjabon
	Escribir "Digite la cantidad de desinfectante que desea comprar: "
	leer Cantidadesinfectante
	Escribir "Digite la cantidad de lavavajillas que desea comprar: "
	Leer Cantidadlavavajillas
	//calcular el total
	
	total = (shampoo * Cantidadshampoo) + (jabon * Cantidadjabon) + (desinfectante * Cantidadesinfectante) + (lavavajillas*Cantidadlavavajillas)
	
	Escribir "Resumen de la compra:"
	Escribir "Shampoo: ", cantidadShampoo, " x S/", shampoo, " = S/", shampoo * cantidadShampoo
	Escribir "Jabon: ", cantidadJabon, " x S/", jabon, " = S/", jabon * cantidadJabon
	Escribir "Desinfectante: ", cantidadesinfectante, " x S/", desinfectante, " = S/", desinfectante * cantidadesinfectante
	Escribir "Lavavajillas: ", cantidadLavavajillas, " x S/", lavavajillas, " = S/", lavavajillas * cantidadLavavajillas


	//total
	Escribir "EL MONTO TOTAL A PAGAR ES DE: S/. ", total
	Escribir "Redirigiendo al metodo de pago..."
	Escribir "Gracias"

FinAlgoritmo
