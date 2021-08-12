import React from "react";
import { Link } from "react-router-dom";

import "./cart-empty.css";
import cartSmileImg from "../../assets/img/cart-smile.png";
import cartEmptyImg from "../../assets/img/cart-empty.png";

const CartEmpty = () => {
    return (
        <div className="cart-empty animate__animated animate__fadeIn">
            <div className="cart-empty__title">
                <span>Корзина пустая</span>
                <img alt="smile" src={cartSmileImg} />
            </div>
            <div className="cart-empty__subtitle">
                Вероятней всего, Вы еще не заказывали пиццу.
                Для заказа перейдите на главную страницу
            </div>
            <img
                className="cart-empty__img"
                alt="empty-card"
                src={cartEmptyImg}
            />
            <Link to="/">
                <button className="btn cart-empty__btn">Вернуться назад</button>
            </Link>
        </div>
    );
};

export default CartEmpty;
