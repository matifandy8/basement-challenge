import type {GetStaticProps, NextPage} from "next";
import React from "react";
import Header from "../components/header";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Listproducts from "../components/products/Listproducts";
import { Product } from "../product/types";


export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then((res) => res.default);
  return {props: {products}};
};

const Home: NextPage<{products: Product[]}> = ({products}) =>{
  return (
    <div className="h-full flex bg-black">
       <section>
       <Navbar />
         <Header/>
          <Listproducts products={products}/>
         <Footer />
       </section>
    </div>
  );
};

export default Home;
