import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";

const Cancel = () => {
    return (
        <div className="success-wrapper">
        <div className="success">
            <h2>Checkout canceled</h2>
            <p>
                Your cart is still available and ready for checkout.
            </p>
            <p className="description">
                We are sorry to see your checkout was canceled, your cart is still
                available. We are ready for your order when you are!
                <br/>
                <br/><br/>
                    <Link href="/" passHref>
                        <a className="email">
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </Link>
            </p>

            </div>
        </div>
    );
};

export default Cancel;