import Image from "next/image";
import {useContext, useState} from "react";
import world from "/public/world.svg";
import { Product } from "../../product/types";

const Cardproduct = ({product}: {product: Product}): JSX.Element => {
    const [isHover, setIsHover] = useState(false);


  const handleHover = () => {
    setIsHover((v) => !v);
  };

  return (
    <section className="mx-auto w-full">
      <button
        className="flex justify-center relative w-full border-b-2"
        style={{
          background: "linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Image alt={product.name} height="538" src={product.image} width="400" />

        {isHover && (
          <>
            <div className="absolute transform" style={{top: "50%", transform: "translateY(-50%)"}}>
              <Image alt="world icon" src={world} />
            </div>
            <p
              className="absolute transform text-4xl text-black uppercase"
              style={{
                WebkitTextStroke: "1px #fff",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              Add to cart
            </p>
          </>
        )}
      </button>
      <div className="mt-2 flex justify-between text-xl">
        <p>{product.name}</p>
        <p>$ {product.price}</p>
      </div>
    </section>
  );
};

export default Cardproduct;