import Image from "next/image"

interface IProductOrderProps {
  image: string
  title: string
  brand: string
  price?: number
  quantity: number
}

const ProductOrder = ({ title, image, brand, price=0, quantity }: IProductOrderProps) => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-8">
        <div className="relative w-28 h-28 rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            sizes="fill"
          />
        </div>
        <div className="w-full">
          <p className="text-lg font-semibold">{title}</p>
          <p className="flex justify-between">Brand {" "}
            <span className="float-right">{brand}</span>
          </p>
          <p className="flex justify-between">Price {" "}
            <span className="float-right">${price}</span>
          </p>
          <p className="flex justify-between">Quantity {" "}
            <span className="float-right">{quantity}</span>
          </p>
        </div>
      </div>
    </div>
);
}

export default ProductOrder;