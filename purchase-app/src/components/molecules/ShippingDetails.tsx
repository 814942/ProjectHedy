import { UserAddress } from "@/interfaces/data.interfaces";

const ShippingDetails = ({
  first_name,
  last_name,
  address,
  city,
  state,
  phone,
  shipping
}: UserAddress) => {
  return ( 
    <div>
      <div className="flex flex-row text-3xl-regular">
        <h2 className="text-xl font-bold">
          Delivery
        </h2>
      </div>
      <div className="flex items-start gap-x-8 mt-8">
        <div className="flex flex-col w-1/3" data-testid="shipping-address-summary">
          <p className="txt-medium-plus text-ui-fg-base mb-1 font-semibold">
            Shipping Address
          </p>
          <p className="txt-medium text-ui-fg-subtle">
            {first_name}{" "}
            {last_name}
          </p>
          <p className="txt-medium text-ui-fg-subtle">
            {address}
          </p>
          <p className="txt-medium text-ui-fg-subtle">
            {city}
          </p>
          <p className="txt-medium text-ui-fg-subtle">
            {state}
          </p>
        </div>

        <div className="flex flex-col w-1/3 " data-testid="shipping-contact-summary">
          <p className="txt-medium-plus text-ui-fg-base mb-1 font-semibold">Contact</p>
          <p className="txt-medium text-ui-fg-subtle">
            {phone}
          </p>
        </div>

        <div className="flex flex-col w-1/3" data-testid="shipping-method-summary">
          <p className="txt-medium-plus text-ui-fg-base mb-1 font-semibold">Method</p>
          <p className="txt-medium text-ui-fg-subtle">
            {shipping?.name ? shipping.name : "N/A"} (${shipping?.price ? shipping.price : 0})
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;