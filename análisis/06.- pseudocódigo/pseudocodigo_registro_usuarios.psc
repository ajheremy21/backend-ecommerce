Algoritmo Registrar_Usuario
	Definir user, CONTRASENA Como Cadena
	Definir validacion Como Entero
	Escribir 'Ingrese su usuario: '
	Leer user
	Escribir 'Escriba una contrase�a: '
	Leer CONTRASENA
	Si user='' O CONTRASENA='' Entonces
		Escribir 'Error, el usuario y/o contrase�a no puede estar vacio.'
	SiNo
		Escribir 'Registro exitoso'
	FinSi
FinAlgoritmo
