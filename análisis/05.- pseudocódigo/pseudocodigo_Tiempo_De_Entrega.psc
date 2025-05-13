Algoritmo TiempoEntrega
	Definir numPedido, fechaCompra, destino, diaCompra, diasEntrega Como Caracter
	Definir tiempoBase, tiempoAdicional, totalDias Como Entero
	
	//Numero de pedido
	Escribir "Digite su numero de pedido: "
	Leer numPedido
	
	//Fecha de compra
	Escribir "Digite su fecha de Compra (Ej:01-01-2025) : "
	leer fechaCompra
	
	//destino
	Repetir 
		Escribir "Introduce el destino de envío (Lima o Provincia):"
		Leer destino
	Hasta Que destino = "Lima" o destino = "Provincia"
	
	Si destino = "Lima" Entonces
		tiempoBase <- 3
	SiNo
		tiempoBase <- 7
	FinSi
	
	//domingo
	Escribir "Introduce el día de la compra (1 = Lunes, 2 = Martes, etc) : "
	leer diaCompra
	
	si diaCompra = "7" Entonces
		tiempoAdicional <- 1
	SiNo
		tiempoAdicional <- 0
	FinSi
	
	//Total dias de entrega
	totalDias <- tiempoBase + tiempoAdicional
	
	Escribir "El tiempo estimado de entrega para el pedido número: ", numPedido, " es de ", totalDias, " días."
FinAlgoritmo
