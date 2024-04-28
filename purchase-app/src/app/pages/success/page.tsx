"use client"
import { useDataContext } from "@/context/data.context";
import { IProductData } from "@/interfaces/data.interfaces";
import OrderSummary from "../../../components/molecules/OrderSummary";
import ShippingDetails from "../../../components/molecules/ShippingDetails";
import ProductOrder from "@/components/molecules/ProductOrder";

const Success = () => {
  const { orderPlaced } = useDataContext()

  return (
    <div className="p-8 m-16 mt-8 min-h-[calc(100vh-64px)]">
      <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
        <div className="flex flex-col gap-4 max-w-4xl h-full w-full py-10" data-testid="order-complete-container">
          <div className="flex flex-col bg-gray-bg p-8 bg-gray-bg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <span className="text-xl font-bold">Thank you!</span>
            <span className="text-lg font-bold">Your order was placed successfully</span>
            <p className="pt-2">Order date: {orderPlaced?.orderData}</p>
          </div>
          <div className="mt-8 bg-gray-bg p-8 bg-gray-bg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex flex-row text-3xl-regular">
              <h2 className="text-xl font-bold">
                Summary
              </h2>
            </div>
            {orderPlaced?.products?.map((product: IProductData) => {
              return (
                <ProductOrder
                  key={product.id}
                  image={product.thumbnail}
                  title={product.title}
                  brand={product.brand}
                  price={product.price ? product.price : 0}
                  quantity={product.quantity!}
                />
              )
            })}
          </div>
          <div className="mt-8 bg-gray-bg p-8 bg-gray-bg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <OrderSummary
              subtotal={orderPlaced?.subtotal!}
              shipping={orderPlaced?.shippingAddress.shipping!}
              total={orderPlaced?.total!}
            />
          </div>
          <div className="mt-8 bg-gray-bg p-8 bg-gray-bg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <ShippingDetails 
              first_name={orderPlaced?.shippingAddress.first_name!}
              last_name={orderPlaced?.shippingAddress.last_name!}
              address={orderPlaced?.shippingAddress.address!}
              city={orderPlaced?.shippingAddress.city!}
              state={orderPlaced?.shippingAddress.state!}
              phone={orderPlaced?.shippingAddress.phone!}
              shipping={orderPlaced?.shippingAddress.shipping!}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;