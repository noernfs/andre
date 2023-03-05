import Link from 'next/link'
import Image from 'next/image'

export default function AboutSmall() {
    return (
      <>
        <section className=" dark:bg-gray-800">
    <div className="max-w-screen-xl px-4 pb-8 mx-auto space-y-12 lg:space-y-15 lg:pb-10 lg:px-6">
     
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-blue-900 dark:text-white">Wifi Murah Wifi Stabil</h2>
                <p className="mb-8 font-light lg:text-xl">Harga terbaik yang bisa anda dapatkan, didukung dengan intensitas peningkatan jaringan untuk internet yang lebih stabil. </p>
               
                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li className="flex space-x-3">
                     
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-500 dark:text-white">100% Fiber Optik</span>
                    </li>
                    <li className="flex space-x-3">
                     
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-500 dark:text-white">Pilihan paket yang fleksibel</span>
                    </li>
                    <li className="flex space-x-3">
                     
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-500 dark:text-white">Costumer Service 24 Jam</span>
                    </li>
                </ul>
                <p className="font-light lg:text-xl">Masang wifi gaperlu ribet, cukup teliti. Hubungi kami untuk mendapatkan harga terbaik dan rekomendasi promo bnetfit yang sesuai dengan kebutuhan anda.</p>
            </div>
            <Image className="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/manfaat.webp" width={1138} height={975} alt="dashboard feature image" />
        </div>
  
        
    </div>
  </section>
      </>
    )
  }