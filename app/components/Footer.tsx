import Image from "next/image"
import EmailLink from "./EmailLink"

export default function Footer() {
  return (
    <footer className="flex justify-center items-center max-w-[1200px] mx-auto h-20 gap-[20px]">
     <Image src='/doticon.jpg' width={60} height={60} alt='illustration' className="block md:hidden"/> <EmailLink/>
    </footer>
  )
}
