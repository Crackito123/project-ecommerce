import Image from "next/image";
export default function CartIcon({className="w-6 h-6"}) {
    return (
    <Image src="/cart.png" alt="" width={6} height={6}/>
    );
  }