import { IShipping } from "@/interfaces/data.interfaces";

interface IOrderSummary {
  subtotal: number
  shipping: IShipping
  total: number
}

const OrderSummary = ({ subtotal, shipping, total }: IOrderSummary) => {
  return (
    <div>
      <div className="flex flex-row text-3xl-regular">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>
      <div className="text-small-regular text-ui-fg-base mt-8">
        <div className="flex items-center justify-between text-base-regular text-ui-fg-base mb-2">
          <span>Subtotal</span>
          <span>$ {subtotal}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>$ {shipping?.price ? shipping.price : 0}</span>
          </div>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-ui-fg-base mb-2">
          <span>Total</span>
          <span>$ {total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;