// definir controller que usan los servicios de carrito
import CartService from "../services/cart.service.js";

export const createCart = async (req, res, next) => {
    try {
        const cart = await CartService.createCart(req.body.userId);
        res.status(201).json(cart);
    } catch (error) {
        next(error);
    }
};

export const getCart = async (req, res, next) => {
    try {
        const cart = await CartService.getCartByUserId(req.params.userId);
        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }
        res.json(cart);
    } catch (error) {
        next(error);
    }
};

export const getAllCarts = async (req, res, next) => {
    try {
        const carts = await CartService.getAllCarts();
        res.json(carts);
    } catch (error) {
        next(error);
    }
};

export const addItem = async (req, res, next) => {   
    try {
        const { productId, quantity, price } = req.body;
        const userId = req.params.userId; // Obtener el userId de los parámetros de la ruta
        const cart = await CartService.addItem(userId, productId, quantity, price);
        res.json(cart);
    } catch (error) {
        next(error);
    }
};

export const updateItemQuantity = async (req, res, next) => {
    try {
        const cart = await CartService.updateItemQuantity(
            req.params.userId, 
            req.params.itemId, 
            req.body.quantity
        );
        res.json(cart);
    } catch (error) {
        next(error);
    }
};

export const removeItem = async (req, res, next) => {
    try {
        const cart = await CartService.removeItem(
            req.params.userId, 
            req.params.itemId
        );
        res.json(cart);
    } catch (error) {
        next(error);
    }
};

export const clearCart = async (req, res, next) => {
    try {
        const cart = await CartService.clearCart(req.params.userId);
        res.json(cart);
    } catch (error) {
        next(error);
    }
};

export const deleteCart = async (req, res, next) => {
    try {
        await CartService.deleteCart(req.params.userId);
        res.json({ message: "Carrito eliminado" });
    } catch (error) {
        next(error);
    }
};

export const countCarts = async (req, res, next) => {
    try {
        const count = await CartService.countCarts();
        console.log(`Cantidad de carritos: ${count}`);
        res.json({
            cantidadCarritos: count 
        });
    } catch (error) {
        next(error);
    }
};

export const removeProductFromAllCarts = async (req, res, next) => {
    try {
        await CartService.removeProductFromAllCarts(req.params.productId);
        res.json({ message: "Producto eliminado de todos los carritos" });

    } catch (error) {
        next(error);
    }
};



