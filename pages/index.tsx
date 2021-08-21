import type {NextPage} from "next";
import React from "react";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div className="h-full flex bg-black">
       <section>
         <Header/>
       </section>
      
    </div>
  );
};

export default Home;
