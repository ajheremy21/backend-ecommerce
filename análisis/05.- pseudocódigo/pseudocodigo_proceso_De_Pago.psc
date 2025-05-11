Algoritmo ProcesoDePago
	Escribir "Bienvenido a Págalo en linea "
	Escribir "Productos Seleccionados: "
	Escribir " 5 Shampoo = S/ 100.00"
	Escribir " 4 Jabones = S/ 16.00"
	Escribir " 5 desinfectantes = S/ 25.00"
	Escribir " 6 Lavavajillas = 36.00"
	Escribir " Total a Pagar: S/ 167.00"
	Definir metodoPago Como Caracter
	Definir yape, tarjeta, codigoingresado, numtarjeta Como Entero
	yape = 15962
	tarjeta = 1234567890
	Escribir "Elija el metodo de pago (Yape o Tarjeta): "
	leer metodoPago
	//pago yape
	Si metodoPago = "yape" Entonces
		Escribir "Su codigo de pago es: ", yape
		Escribir "Por favor escribe el codigo para realizar el pago: "
		leer codigoingresado
		Si codigoingresado = yape Entonces
			Escribir "Pago realizado con exito, muchas gracias"
		SiNo
			Escribir "Codigo incorrecto, pago no realizado"
		FinSi
	FinSi
	//pago tarjeta
	Si metodoPago = "tarjeta" Entonces
		Escribir  "Ingrese el numero de tarjeta: "
		leer numtarjeta
		Si numtarjeta = tarjeta Entonces
			Escribir "Pago realizado con exito"
		SiNo
			Escribir "Tarjeta no valida, proceso no realizado"
		FinSi
	FinSi
	
	Escribir "Fin proceso de pago"
	
FinAlgoritmo
