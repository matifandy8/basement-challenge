import Image from "next/image"
import header from "/public/header.svg"

import asteriskone from "/public/asterisk-one.svg";
import asterisktwo from "/public/asterisk-two.svg";

const Header = () => {
  return (
   <>
    <header className="flex flex-col mt-3 text-white text-center">
      <Image alt="Header" src={header} />
    </header>
     <div className="relative">
     <div
      className="overflow-x-hidden w-full relative border-t border-b"
      style={{height: "72px", transform: "translate3d(0, 0, 0)"}}
    >
      <p
        className="my-4 absolute left-0 top-0 font-bold text-4xl animate-slideshow"
        style={{width: "400%", transform: "translate3d(0, 0, 0)"}}
      >
        A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag
      </p>
    </div>
    <div className="mx-auto relative top-0 h-full w-full max-w-screen-xl hidden lg:block">
      <div className="absolute -top-20 left-20">
        <Image alt="first asterisk" src={asteriskone} />
      </div>
      <div className="absolute bottom-8 right-20">
        <Image alt="second asterisk" src={asterisktwo} />
      </div>
    </div>
      </div>
      </>
  )
}

export default Header