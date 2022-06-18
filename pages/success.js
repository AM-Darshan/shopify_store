import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../lib/utils';
import { useStateContext } from '../context/StateContext';
const Success = () => {
    const {setTotalQuantities,setTotalPrice,setCartItems} = useStateContext();
    
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalQuantities(0);
        setTotalPrice(0);
        runFireworks();
    },[]);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order</h2>
            <p className='email-msg'>Please check your for further details</p>
            <p className='description'>
                If you have any queries, Please reach us through email
                <a className='email' href="mailto:order@example.com">
                    order@example.com
                </a>
            </p>
            <Link href={"/"}>
                <button type="button" className='btn' width="300px">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success
