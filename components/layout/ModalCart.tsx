import React, { MouseEventHandler} from "react";



const ModalCart = ({ closeModal,}: {closeModal: MouseEventHandler<HTMLButtonElement>;}): JSX.Element => {
  return (
    <div className="h-full w-full bg-black fixed top-0 bottom-0 right-0 left-0 z-10 bg-opacity-70">
      <section className="fixed top-0 right-0 max-h-screen bg-black border border-t-0 border-r-0 overflow-y-auto z-10">
        <div className="py-10 px-8 flex flex-col content-end justify-end">
          <button
            className="mb-2 ml-auto text-2xl uppercase"
            onClick={closeModal}
          >
            → Close
          </button>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-10 uppercase text-8xl text-center font-bold">
            <p className="">Your</p>{" "}
            <p className="text-black" style={{ WebkitTextStroke: "2px #fff" }}>
              Cart
            </p>
          </div>
          <div className="grid gap-4">
           {/* products length */}
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 text-4xl uppercase sm:border sm:border-r-0"
          style={{
            gridTemplateColumns: "1fr",
          }}
        >
          <p className="px-8 py-6 border-b sm:border-r">Total: $</p>
          <button
            className="px-8 py-6  text-black uppercase"
            style={{ WebkitTextStroke: "2px #fff" }}
          >
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalCart;
