Algoritmo Registrar_Usuario
	Definir user, CONTRASENA Como Cadena
	Definir validacion Como Entero
	Escribir 'Ingrese su usuario: '
	Leer user
	Escribir 'Escriba una contraseña: '
	Leer CONTRASENA
	Si user='' O CONTRASENA='' Entonces
		Escribir 'Error, el usuario y/o contraseña no puede estar vacio.'
	SiNo
		Escribir 'Registro exitoso'
	FinSi
FinAlgoritmo
