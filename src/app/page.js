"use client"
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderComponent from './components/header/header';
import Banner from '@/../public/banner.svg';
import LandingPageImage1 from '@/../public/landing1.svg';
import FooterComponent from './components/footer/footer';
import Contactphoto from '@/../public/contactphoto.svg'
import { motion } from 'framer-motion';
import imagem1 from './assets/portifolio/imagem1.jpeg';
import imagem2 from './assets/portifolio/imagem2.jpeg';
import imagem3 from './assets/portifolio/imagem3.jpeg';
import imagem4 from './assets/portifolio/imagem4.jpeg';
import imagem5 from './assets/portifolio/imagem5.jpeg';
import imagem6 from './assets/portifolio/imagem6.jpeg';
import imagem7 from './assets/portifolio/imagem7.jpeg';
import imagem8 from './assets/portifolio/imagem8.jpeg';
import imagem9 from './assets/portifolio/imagem9.jpeg';
import imagem10 from './assets/portifolio/imagem10.jpeg';
import imagem11 from './assets/portifolio/imagem11.jpeg';
import imagem12 from './assets/portifolio/imagem12.jpeg';
import imagem13 from './assets/portifolio/imagem13.jpeg';
import imagem14 from './assets/portifolio/imagem14.jpeg';
import imagem15 from './assets/portifolio/imagem15.jpeg';
import emailjs from '@emailjs/browser';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Home() {

  const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12, imagem13, imagem14, imagem15];

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 1)
  }, [])

  const handleCarouselScroll = () => {
    const scrollPosition = carousel.current.scrollLeft;
    const fullWidth = carousel.current.scrollWidth;
    const visibleWidth = carousel.current.offsetWidth;

    if (scrollPosition === fullWidth - visibleWidth) {
      carousel.current.scrollLeft = 0;
    } else if (scrollPosition === 0) {
      carousel.current.scrollLeft = width;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_y3kay5k', 'template_rxuwe1b', form.current, 'fkTiTLTO1bWNiDaMy')
      .then((result) => {
        console.log(result.text);
        alert("Seu email foi enviado com sucesso!")
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section>
      <HeaderComponent />
      <div>
        <div className="relative">
          <div className="w-full">
            <Image src={Banner} alt="Banner" className='w-full' />
          </div>
          <div className="relative top-10 left-0 z-10 text-black p-10 mb-4 w-full sm:w-full md:w-1/2 sm:p-15  md:text-white md:absolute">
            <p className="text-sm sm:text-base font-light">Innovative designs, lasting flooring solutions</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Empower your space with the freedom to choose your dream floor, and let us bring it to life with our expert installation services.</h1>
            <p className="mt-2 text-sm sm:text-base font-light">
              Explore vinyl flooring, known for its quality and durability. Ideal for renovations or new constructions, it offers a stylish, reliable solution that withstands heavy use without compromising aesthetics.
            </p>
            <button onClick={() => {
              window.location.href = '/catalog'
            }} className="bg-[#ff3434] p-2 w-full mt-4 </div>font-bold text-white">
              Discover more
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-10 justify-center  gap-10 my-32 ">
          <div className=" md:block sm:hidden">
            <Image src={LandingPageImage1} alt="Landing Page Image 1" />
          </div>
          <div className="text-black  text-center md:text-left md:w-1/2">
            <p>
              Transform your space with Exceptional flooring solutions
            </p>
            <h1 className="text-3xl font-bold text-red-500">
              Thinking of changing your floor?
            </h1>
            <p className="mt-2">
              Considering upgrading to vinyl flooring could be an excellent decision. Vinyl flooring is known for its durability and resilience. It's water-resistant, making it a good choice for kitchens, bathrooms, and laundry rooms. Furthermore, it's easy to clean and maintain, and it comes in a variety of designs and styles to suit any decor. So, if you're contemplating a floor change, vinyl is a superb option to consider.
            </p>
            <button
              onClick={() => {
                window.location.href = '/contact'
              }}
              className="bg-[#ff3434] p-2 w-full mt-4 font-bold text-white">
              Discover more
            </button>
          </div>
        </div>
        <div className="p-10 text-center my-24">
          <h1 className="text-3xl font-bold text-red-500">Why choose us?</h1>
          <p className="w-full mx-auto mt-2 text-black">
            We offer superior services, dedicated customer support, and competitive pricing. Our team of professionals is committed to ensuring your satisfaction.
          </p>
          <div className="flex flex-col flex-wrap md:flex-nowrap justify-center gap-5 mt-10">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-5">
              <div className="card rounded-lg p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-black font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-black">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
              <div className="card rounded-lg p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                
                <h1 className="text-black font-bold my-2">Exemplary Customer Service</h1>
                <hr />
                <p className="my-2 text-black">
                  Our team is dedicated to ensuring the total satisfaction of our customers, providing high quality service.
                </p>
              </div>
              <div className="card rounded-lg p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-black font-bold my-2">High Quality Materials</h1>
                <hr />
                <p className="my-2 text-black">
                  We only use top-tier materials in our installations, ensuring durability and beauty.
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-10">
              <div className="card rounded-lg p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-black font-bold my-2">Proven Experience</h1>
                <hr />
                <p className="my-2 text-black">
                  With years of experience in the market, we have the necessary knowledge to execute all projects with excellence.
                </p>
              </div>
              <div className="card rounded-lg p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-black font-bold my-2">Competitive Prices</h1>
                <hr />
                <p className="my-2 text-black">
                  We offer fair prices without compromising the quality of our work.
                </p>
              </div>
              <div className="card rounded-lg p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-black font-bold my-2">Compliance with Deadlines</h1>
                <hr />
                <p className="my-2 text-black">
                  We respect established deadlines, ensuring the completion of projects on time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ff3434] h-fit p-10 App">
          <h1 className='font-bold text-center text-4xl mt-10 mb-0 text-white'>Our Portfolio</h1>
          <p className='text-center italic'>Drag to side</p>
          <motion.div ref={carousel}
            className='carousel'
            whileTap={{ cursor: "grabbing" }}
            onScroll={handleCarouselScroll}
          >
            <motion.div
              className='inner'
              drag="x"
              dragConstraints={{ right: width + 1, left: -width }}
              initial={{ x: 0 }}
              animate={{ x: 50 }}
              transition={{ duration: 0.8 }}
            >
              {imagens.map(imagens => (
                <motion.div className='item' key={Math.floor(Math.random() * 321)}>
                  <Image src={imagens} alt="Texto alt" loading='lazy' />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className='flex justify-center gap-5'>
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#efefef]  p-10 py-32">
        <p className="text-2xl text-center italic text-black">
          Reviews
        </p>
        <h1 className="text-center text-md italic font-light text-black mt-4 w-9/12 mx-auto">
          Recently, I hired the services of Alvim Floor for the installation of vinyl flooring in my residence.
          I was extremely satisfied with the efficiency of the team and the quality of the installed floor.
          The new floor gave a modern and cozy look to my house. Definitely, I would recommend their services to my friends and family.Recently,
          I hired the services of Alvim Floor for the installation of vinyl flooring in my residence. I was extremely satisfied with the efficiency
          of the team and the quality of the installed floor. The new floor gave a modern and cozy look to my house. Definitely,
          I would recommend their services to my friends and family.
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-10 p-10 md:p-0">
        <div className="hidden w-full md:block md:w-1/2">
          <Image src={Contactphoto} alt="Landing Page Image 1" />
        </div>
        <div className="w-full my-auto mx-10 md:w-full">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
            <form
              onSubmit={(e) => sendEmail(e)}
              ref={form}
              className='text-black'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#ff3434] text-white px-4 py-2 rounded-md font-bold w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <FooterComponent />

    </section >
  );
}

