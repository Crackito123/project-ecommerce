import Image from "next/image";
export default function BarsIcon({className = 'w-6 h-6'}) {
    return (
      <Image src="/bars.png" alt="" width={6} height={6}/>
    );
  }