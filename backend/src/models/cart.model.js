import mongoose from "mongoose";
import { Schema } from "mongoose";

const ItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    } 
});

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, 
  },
  items: [ItemSchema],
  total: {
    type: Number,
    min: 0,
  },
});

//Pre-save hook antes de guardar (recalcular el total)
CartSchema.pre("save", function (next) {
    this.total = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    next();
});

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;

