Algoritmo AGREGAR_PRODUCTOS
	Definir nombre, marca, producto_existente Como Cadena
	Definir precio Como Real
	Definir stock Como Entero
	Escribir 'Ingresa el nombre del producto: '
	Leer nombre
	Escribir 'Ingresa la descripcion del producto: '
	Leer marca
	Escribir 'Ingresa el precio del producto: '
	Leer precio
	Escribir 'Ingresa el stock que desee agregar: '
	Leer stock
	Si nombre='' O marca='' O precio<=0 O stock<=0 Entonces
		Escribir 'Error: Faltan datos'
	FinSi
	Si producto_existente<>'' Entonces
		Escribir 'Error, el producto ya existe'
	SiNo
		Escribir 'producto agregado correctamente'
	FinSi
	Escribir 'Producto agregado, detalles:  '
	Escribir 'Nombre: '+nombre
	Escribir 'Marca: '+marca
	Escribir 'Precio: S/ ', precio
	Escribir 'Stock: ', stock, ' Unidades'
FinAlgoritmo
