import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Fungsi untuk membuat link WhatsApp
  const handleCheckout = () => {
    const phoneNumber = "6282117461238"; // Nomor WhatsApp kamu (format internasional)
    let message = "Halo, saya ingin memesan:\n";

    // Tambahkan detail item dari keranjang
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        message += `- ${item.name} (x${cartItems[item._id]}): Rp.${item.price * cartItems[item._id]}\n`;
      }
    });

    // Tambahkan subtotal dan total
    const subtotal = getTotalCartAmount();
    const shippingCost = subtotal === 0 ? 0 : 2;
    const total = subtotal + shippingCost;

    message += `\nSubtotal: Rp.${subtotal}\nBiaya Pengiriman: Rp.${shippingCost}\nTotal: Rp.${total}`;

    // Encode pesan dan buat link WhatsApp
    const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsAppLink, "_blank"); // Buka link WhatsApp di tab baru
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Judul</p>
          <p>Harga</p>
          <p>Kuantitas</p>
          <p>Total</p>
          <p>Hapus</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rp.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rp.{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Belanja</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rp.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Biaya Pengiriman</p>
              <p>Rp.{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rp.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={handleCheckout}>LANJUTKAN KE PEMBAYARAN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Jika kamu memiliki kode promo, masukkan di sini</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="kode promo" />
              <button>Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
