import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const cartAlert = ({ product }: { product: any }) => {
  const { title, image, price } = product;

  // Mostrar la notificación
  toast.dark(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={image} alt={title} style={{ width: '50px', marginRight: '10px' }} />
      <div>
        <p>{title}</p>
        <p>Precio: ${price}</p>
      </div>

    </div>,
    //href={`pages/cart}`
    {
      position: 'bottom-right',
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );

  return null; 
};

export default cartAlert;
