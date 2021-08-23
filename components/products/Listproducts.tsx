import {  NextPage } from "next";
import {Product} from "../../product/types";
import Cardproduct from "./Cardproduct";


const Listproducts: NextPage<{products: Product[]}> = ({products}) => {
    return (
        <section className="px-4 mt-24 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Cardproduct key={product.id} product={product} />
        ))}
      </section>
    );
  };
  
  export default Listproducts;