import Hero from "@/components/Hero"
import Link from "next/link"
import { QRCodeIcon, ImageIcon, KeyboardIcon } from "@/components/Icon"

export default function Home() {
  return (
    <div>
      <Hero />
      <div id='projects' className="py-28 bg-gray-100 text-[#18182c]">
        <div className="flex flex-wrap justify-center align-center gap-8">
          <Link href="#">
            <div className='w-72 border-2 border-[#18182c] rounded-3xl p-8 text-center flex flex-col items-center gap-1'>
              <QRCodeIcon />
              <h3 className="font-[#18182c] font-bold text-2xl">QRCode Generator</h3>
              <p>Project 1 description</p>
            </div>
          </Link>
          <Link href="#">
            <div className='w-72 border-2 border-[#18182c] rounded-3xl p-8 text-center flex flex-col items-center gap-1'>
              <ImageIcon />
              <h3 className="font-[#18182c] font-bold text-2xl">WebP Converter</h3>
              <p>Project 2 description</p>
            </div>
          </Link>
          <Link href="#">
            <div className='w-72 border-2 border-[#18182c] rounded-3xl p-8 text-center flex flex-col items-center gap-1'>
              <KeyboardIcon />
              <h3 className="font-[#18182c] font-bold text-2xl">Typing Test</h3>
              <p>Project 3 description</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}