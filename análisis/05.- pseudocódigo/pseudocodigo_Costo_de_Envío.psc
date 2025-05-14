Algoritmo costoEnvio
	// definir variables
	Definir distritoRango, distritoSeleccionado Como Cadena
	Definir costoFijo, costoNoFijo, costoProvincia Como Real
	Definir destino Como Entero
	Definir encontrado Como Lógico
	Dimensionar distritoRango(5)
	distritoRango[1] <- 'Ate'
	distritoRango[2] <- 'Santa Anita'
	distritoRango[3] <- 'San Luis'
	distritoRango[4] <- 'La molina'
	distritoRango[5] <- 'El Agustino'
	encontrado <- Falso
	// COSTOS
	costoFijo <- 5.90
	costoNoFijo <- 8.90
	costoProvincia <- costoFijo+10.00
	// Solicitar destino
	Escribir 'Analisis de destino, elige el lugar de entrega: '
	Escribir '1.- Distritos'
	Escribir '2.- Provincias'
	Leer destino
	Escribir 'Elegiste la opcion ', destino
	// destino
	Si destino=1 Entonces
		Escribir 'Elegiste Distritos en Lima'
		Escribir 'Elige el distrito de entrega: '
		Leer distritoSeleccionado
		// Distrito en el rango
		Para i<-1 Hasta 5 Hacer
			Si distritoRango[i]=distritoSeleccionado Entonces
				encontrado <- Verdadero
			FinSi
		FinPara
		Si encontrado=Verdadero Entonces
			Escribir 'El costo de envío es de: S/ ', costoFijo
		SiNo
			Escribir 'El costo de envío es de: S/ ', costoNoFijo
		FinSi
	SiNo
		Escribir 'Elegiste provincia'
		Escribir 'El costo de envio  a provincia es de: ', costoProvincia
	FinSi
FinAlgoritmo
