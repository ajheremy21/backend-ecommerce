Algoritmo MostrarPedidos
	// Definir variables
	definir numeroPedido, mostrarEstado Como Entero
	
	// Pedido predefinido para la simulación
	numeroPedido <- 11
	
	// Solicitar el número de pedido
	Escribir "Ingrese su número de Pedido: "
	Leer numeroPedido
	
	// Verificar si el pedido existe
	Si numeroPedido = 11 Entonces
		Escribir "Pedido encontrado, Analizando estado"
		Escribir "Digite los días que pasaron desde que hizo el pedido:"
		Leer mostrarEstado
		
		// Validar que el valor ingresado sea positivo
		Repetir
			Si mostrarEstado < 0 Entonces
				Escribir "Error, valor incorrecto. Digite un número mayor o igual a 0."
				Leer mostrarEstado
			FinSi
		Hasta Que mostrarEstado >= 0
		
		// Evaluar el estado del pedido
		Si mostrarEstado >= 5 Entonces
			Escribir "Su pedido ya fue entregado."
		Sino
			Si mostrarEstado >= 3 Entonces
				Escribir "Pedido en tránsito, lo contactaremos tan pronto como llegue."
			Sino
				Escribir "Pedido pendiente."
			FinSi
		FinSi
		
	Sino
		Escribir "El pedido no se encuentra o no existe."
	FinSi
	
FinAlgoritmo
	
	
	

