import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import AccordionIcon from "../components/AccordionIcon";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div className="max-w-screen relative">
      <nav className="flex relative max-w-full bg-white/90 backdrop-blur-sm px-3 pl-0 lg:px-8 py-3 lg:py-5 justify-between items-center h-[60px] sticky top-0 z-20">
        <Link href="/">
          <div className="bg-[url('/QUB2-Blue.png')] bg-no-repeat bg-center bg-cover h-[50px] w-[140px] recolor-png focus-visible:outline-none"></div>
        </Link>

        {/* Mobile Menu toggler */}
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className={`${showMobileNav ? "hidden": ""} focus-visible:outline-none h-[35px] w-[30px] bg-transparent md:hidden relative flex items-center`}
        >
          <span
            className={`${
              showMobileNav ? "onclick" : ""
            } mobile-nav-toggler bg-azure left-1/2 -translate-x-1/2 before:bg-azure before:left-0 after:bg-azure after:left-0`}
          ></span>
        </button>
        <div className="md:space-x-2 lg:space-x-10 lg:ml-4 hidden md:flex">
          <Link
            className="no-underline uppercase text-dover-gray hover:text-azure text-sm font-medium"
            href="/"
          >
            LIFESTYLE
          </Link>
          <Link
            className="no-underline uppercase text-dover-gray hover:text-azure text-sm font-medium"
            href="/"
          >
            BACKPACKS
          </Link>
          <Link
            className="no-underline uppercase text-dover-gray hover:text-azure text-sm font-medium"
            href="/"
          >
            TRAVEL
          </Link>
          <Link
            className="no-underline uppercase text-dover-gray hover:text-azure text-sm font-medium"
            href="/"
          >
            BEHIND THE PACKS
          </Link>
          <Link
            className="no-underline uppercase text-dover-gray hover:text-azure text-sm font-medium"
            href="/"
          >
            STORIES
          </Link>
        </div>

        <div className="relative md:max-w-[20%] hidden md:inline">
          <input
            type="text"
            placeholder="Search Qubix"
            className="px-2 py-2 rounded-md border-2 min-w-full max-w-full border-azure focus-visible:outline-none"
          />
          <FiSearch className="absolute top-1/2 -translate-y-1/2 right-2 -translate-x-1/2 text-dove-grey" />
        </div>

        {/* Mobile Nav Menu*/}

        <div
          className={`min-h-screen ${
            showMobileNav ? "" : "hidden"
          } bg-[#007FD2]/95 flex flex-col w-full items-center justify-center backdrop-blur-md transition absolute top-0 z-50`}
        >
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="focus-visible:outline-none h-[35px] w-[30px] bg-transparent absolute top-[3%] right-[7%] flex items-center"
          >
            <TfiClose className="text-concrete text-2xl absolut "/>
          </button>
          <ul className="h-full space-y-12 flex flex-col w-50 place-items-center">
            <li onClick={() => setShowMobileNav(!showMobileNav)}>
              <Link
                className="text-3xl no-underline uppercase text-concrete font-medium"
                href="/"
              >
                LIFESTYLE
              </Link>
            </li>
            <li onClick={() => setShowMobileNav(!showMobileNav)}>
              <Link
                className="text-3xl no-underline uppercase text-concrete font-medium"
                href="/"
              >
                BACKPACKS
              </Link>
            </li>
            <li onClick={() => setShowMobileNav(!showMobileNav)}>
              <Link
                className="text-3xl no-underline uppercase text-concrete font-medium"
                href="/"
              >
                TRAVEL
              </Link>
            </li>
            <li onClick={() => setShowMobileNav(!showMobileNav)}>
              <Link
                className="text-3xl no-underline uppercase text-concrete font-medium"
                href="/"
              >
                BEHIND THE PACKS
              </Link>
            </li>
            <li onClick={() => setShowMobileNav(!showMobileNav)}>
              <Link
                className="text-3xl no-underline uppercase text-concrete font-medium"
                href="/"
              >
                STORIES
              </Link>
            </li>
          </ul>
          <div className="relative mt-12 w-2/3">
            <input
              type="text"
              placeholder="Search Qubix"
              className="bg-concrete w-full px-2 py-2 rounded-md focus-visible:outline-none"
            />
            <FiSearch className="absolute top-1/2 -translate-y-1/2 right-2 -translate-x-1/2" />
          </div>
        </div>
      </nav>

      <main>
        {/* Headline */}
        <section className="min-h-[calc(100vh_-_60px)] flex relative before:z-0 before:absolute before:w-full before:min-h-full before:bg-dove-gray/90">
          <div className="absolute min-h-full min-w-full max-w-full flex flex-col w-50 md:flex-row -z-10 justify-around">
            <div className="min-h-full flex-1 bg-[url('/LTweb2-packingcubes-productimage-png-002.png')] bg-no-repeat bg-center bg-contain blur-sm "></div>
            <div className="min-h-full flex-1 bg-[url('/LTweb2-packingcubes-productimage-png-008.png')] bg-no-repeat bg-center bg-contain blur-sm "></div>
            {/* <Image src="/LTweb2-packingcubes-productimage-png-002.png" alt="background bag image" className="h-[33%] w-auto md:h-auto md:w-[20%]" width={400} height={400}/>
            <Image src="/LTweb2-packingcubes-productimage-png-008.png" alt="background bag image" className="h-[33%] w-auto md:h-auto md:w-[20%]" width={400} height={400}/>
            <Image src="/LTweb2-packingcubes-productimage-png-009.png" alt="background bag image" className="h-[33%] w-auto md:h-auto md:w-[20%]" width={400} height={400}/> */}
            <div className="min-h-full flex-1 bg-[url('/LTweb2-packingcubes-productimage-png-009.png')] bg-no-repeat bg-center bg-contain blur-sm "></div>
          </div>

          <div className="relative flex flex-col w-50 md:flex-row min-h-full min-w-full place-items-center justify-between px-2 md:px-4 lg:px-12">
            <div className="text-concrete max-w-full md:max-w-2/5 text-center md:text-left flex justify-center flex-col mt-8 md:mt-0">
              <h1 className="text-5xl md:text-7xl mb-4">Qubix2</h1>
              <h1 className="text-2xl md:text-3xl mb-3">
                Double Compression Packing Cubes that hang
              </h1>
              <ul>
                <li className="text-lg md:text-xl mb-2">
                  Save up to 66% of luggage space with double compression
                  zippers.
                </li>
                <li className="text-lg md:text-xl mb-2">
                  Unpack in seconds with the world{"'"}s first hook & hand
                  system.
                </li>
                <li className="text-lg md:text-xl mb-2">
                  Travel with peace of mind and keep everything perfectly
                  organized.
                </li>
                <p className="mb-3 mt-4">
                  <span className="text-4xl">$150</span> <del>$300</del>
                </p>
                <button className="py-3 px-4 bg-azure text-white rounded-md hover:rounded-none transition font-semibold text-xl">
                  BUY NOW!
                </button>
              </ul>
            </div>

            {/* Image div */}
            <Image
              src="/LTweb2-packingcubes-productimage-png-009.png"
              alt="Set of bags"
              className="w-full lg:w-1/2 xl:w-[40%] h-auto"
              width={1000}
              height={600}
            />
            {/* <div className="min-h-[65%] min-w-[40%] bg-[url('/LTweb2-packingcubes-productimage-png-009.png')] bg-no-repeat bg-center bg-cover"></div> */}
          </div>
        </section>

        {/* Problem to Solution to Result */}
        <section className="bg-concrete py-10 md:py-20 lg:py-28 px-4 md:px-8 lg:px-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
            What Qubix gets you...
          </h2>
          <div className="flex flex-col w-50 md:flex-row md:space-x-6">
            <div className="flex flex-col w-50 flex-1 items-center text-center">
              <Image
                src="/packingcubes-icon-the frustration-01.png"
                alt="The problem"
                className="h-auto w-auto"
                width={80}
                height={80}
              />
              <h2 className="text-3xl font-medium">The Problem</h2>
              <p className="text-lg">Wasting hours packing and unpacking</p>
            </div>
            <div className="flex flex-col w-50 flex-1 items-center text-center mt-6 md:mt-0">
              <Image
                src="/packingcubes-icon-our solution-02.png"
                alt="The solution"
                className="h-auto w-auto"
                width={80}
                height={80}
              />
              <h2 className="text-3xl font-medium">The Solution</h2>
              <p className="text-lg">Packing cubes that can hang anywhere</p>
            </div>
            <div className="flex flex-col w-50 flex-1 items-center text-center mt-6 md:mt-0">
              <Image
                src="/packingcubes-icon-the results-03.png"
                alt="The result"
                className="h-auto w-auto"
                width={80}
                height={80}
              />
              <h2 className="text-3xl font-medium">The Result</h2>
              <p className="text-lg">Make unpacking a thing of the past</p>
            </div>
          </div>
        </section>

        {/* ...There's more */}
        <section className="py-10 md:py-20 lg:py-28 px-4 md:px-8 lg:px-24 bg-[#007FD2] text-concrete">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 md:mb-16">
            ...there{"'"}s more
          </h2>
          <div className="flex flex-col w-50 lg:flex-row items-center lg:justify-between text-center lg:text-start">
            <div className="lg:max-w-[45%]">
              <div className="mb-5">
                <p className="text-2xl">Perfect for anyone who travels</p>
                <p className="md:w-4/5 lg:w-full mx-auto">
                  Qubix2 packing cubes save you from wasted time, frustration
                  and struggle, so you can spend more time making the most out
                  of your trip.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-2xl">Unpack In Seconds With Hook And Hang</p>
                <p className="md:w-4/5 lg:w-full mx-auto">
                  With Qubix2’s hook and hang system, simply hook and hang your
                  cubes on the rail, on a hanger, or anywhere you want, without
                  needing to unpack.
                </p>
              </div>
              <div className="mb-5 hidden lg:block">
                <p className="text-2xl">Quick Easy Access To Your Clothes</p>
                <p className="md:w-4/5 lg:w-full mx-auto">
                  Getting access to your clothes is an absolute breeze. Simply
                  unzip your cube without decompressing it and that’s it.{" "}
                </p>
              </div>
              <div className="mb-5 hidden lg:block">
                <p className="text-2xl">Save Up To 66% Luggage Space</p>
                <p className="md:w-4/5 lg:w-full mx-auto">
                  The centre compression zipper wraps twice around each cube,
                  giving you the added flexibility of a 2 level compression.{" "}
                </p>
              </div>
              <div className="mb-5 hidden lg:block">
                <p className="text-2xl">Super Strong & Super Lightweight</p>
                <p className="md:w-4/5 lg:w-full mx-auto">
                  Qubix2 features a super lightweight RipStop parachute fabric
                  that is woven using a special reinforcing technique, making it
                  resistant to tearing and ripping.{" "}
                </p>
              </div>
            </div>
            <Image
              src="/QUBIX2-1000px-gifs-001.gif"
              className="rounded-xl mb-4 md-mb-0 w-[300px] lg:w-[400px] h-auto"
              alt="Qubix offers"
              width={500}
              height={400}
            />
            <div className="block lg:hidden">
              <div className="mb-5">
                <p className="text-2xl">Quick Easy Access To Your Clothes</p>
                <p className="mx-auto md:w-4/5">
                  Getting access to your clothes is an absolute breeze. Simply
                  unzip your cube without decompressing it and that’s it.{" "}
                </p>
              </div>
              <div className="mb-5">
                <p className="text-2xl">Save Up To 66% Luggage Space</p>
                <p className="mx-auto md:w-4/5">
                  The centre compression zipper wraps twice around each cube,
                  giving you the added flexibility of a 2 level compression.{" "}
                </p>
              </div>
              <div className="mb-5">
                <p className="text-2xl">Super Strong & Super Lightweight</p>
                <p className="mx-auto md:w-4/5">
                  Qubix2 features a super lightweight RipStop parachute fabric
                  that is woven using a special reinforcing technique, making it
                  resistant to tearing and ripping.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20 lg:py-28 px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
            Qubix{"'"}s description
          </h2>

          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Autoplay, Navigation]}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 7,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.7,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
              1560: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },
            }}
            className="mySwiper relative mt-16 description min-h-min flex"
          >
            <SwiperSlide className="h-full py-4">
              <Image
                src="/LTweb2-packingcubes-benefitimage-004.jpg"
                className="bg-center"
                alt="reviewer 1"
                width={1000}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <Image
                src="/LTweb2-packingcubes-corecubes-001.jpg"
                className="bg-center"
                alt="reviewer 2"
                width={1000}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <Image
                src="/LTweb2-packingcubes-corecubes-002.jpg"
                className="bg-center"
                alt="reviewer 2"
                width={1000}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <Image
                src="/LTweb2-packingcubes-productspecs-001.jpg"
                className="bg-center"
                alt="reviewer 2"
                width={1000}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <Image
                src="/LTweb2-packingcubes-productspecs-002.jpg"
                className="bg-center"
                alt="reviewer 2"
                width={1000}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="bg-[#007FD2] py-5 md:py-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 md:mb-16 pt-6 text-mystic">
            Qubix{"'"}s core cubes
          </h2>
          <div className="flex justify-around max-w-full md:max-w-[90%] lg:max-w-[85%] mx-auto flex-wrap space-y-5 text-mystic">
            <div className="flex flex-col md:w-[45%] lg:w-[40%] px-3 md:px-0">
              <h2 className="text-2xl font-medium">Large Cube</h2>
              <p className="text-lg">
                The large cube fits 11 big clothing items and a folding board of
                its own.
              </p>
            </div>
            <div className="flex flex-col md:w-[45%] lg:w-[40%] px-3 md:px-0 !mt-0">
              <h2 className="text-2xl font-medium">Medium Cube</h2>
              <p className="text-lg">
                The medium cube fits 13 clothing items and a folding board in
                the same size
              </p>
            </div>
            <div className="flex flex-col md:w-[45%] lg:w-[40%] px-3 md:px-0">
              <h2 className="text-2xl font-medium">Toiletry Cube</h2>
              <p className="text-lg">
                7 optimised pockets, 4 small mesh pockets, 1 toothbrush
                compartment, 1 big mesh pocket and 1 big pouch for all your
                toiletry items.
              </p>
            </div>
            <div className="flex flex-col md:w-[45%] lg:w-[40%] px-3 md:px-0">
              <h2 className="text-2xl font-medium">Waterproof material</h2>
              <p className="text-lg">
                Hang it directly in the shower for fast and easy access to your
                toiletries. Tear away pouch. The extra tear-away pouch has a
                waterproof zipper and it’s perfect for bigger toiletry bottles.
              </p>
            </div>
            <div className="flex flex-col md:w-[45%] lg:w-[40%] px-3 md:px-0">
              <h2 className="text-2xl font-medium">Electronics Cube</h2>
              <p className="text-lg">
                4 pockets. Optimised compartments help you organise cables,
                adapters, memory cards, flash drives and more. 18 elastic grid
                slots. Neatly pack all kinds of cables so they never tangle
                again. Padded outer shell. Extra protection for your valuable
                devices.
              </p>
            </div>
            <div className="flex flex-col md:w-[45%] lg:w-[40%] px-3 md:px-0">
              <h2 className="text-2xl font-medium">Laundry bag</h2>
              <p className="text-lg">
                Folds tiny and it’s super useful whenever you need it.
              </p>
              <h2 className="text-2xl font-medium mt-4">Shoe bag</h2>
              <p className="text-lg">
                Helps keep your shoes tidy and your clothes clean.
              </p>
            </div>
          </div>
        </section>

        {/* Featured By */}
        <section className="py-10 md:py-20 lg:py-28">
          <h2 className="text-3xl max-w-[80%] mx-auto md:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
            Qubix has been featured by
          </h2>

          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3.4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4.8,
                spaceBetween: 20,
              },
              1560: {
                slidesPerView: 5.1,
                spaceBetween: 50,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-30 w-[90%] md:w-full relative"
          >
            <SwiperSlide>
              <Image
                src="/500px-250px-afar-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-benzinga-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-gear-patrol-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-gearjunkie-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-geeky-gadgets-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-mashable-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-mental-floss-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-theawsomer-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/500px-250px-trendhunter-logo1.png"
                className="w-auto h-1/2 mx-auto"
                alt="description image 5"
                width={600}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Reviews */}
        <section className="py-12 px-2">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 md:mb-16 #007FD2 text-[#007FD2]">
            What people say
          </h2>

          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              480: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3.4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.7,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            className="mySwiper relative mt-6 md:mt-16 min-h-min"
          >
            <SwiperSlide className="h-full py-4">
              <div className="flex flex-col w-50 text-center items-center rounded-2xl shadow-xl md:shadow-lg pt-7 pb-10 h-full">
                <Image
                  src="/avatar-f3ea648e45b1d4195846fae498b5e657.jpg"
                  className="rounded-full w-[100px] h-[100px]"
                  alt="reviwer 1"
                  width={200}
                  height={200}
                />
                <h3 className="mt-4 text-2xl">⭐⭐⭐⭐⭐</h3>
                <h3 className="mt-4 text-2xl w-4/5 mx-auto">
                  “Love My Qubix2 Set!” - Darren
                </h3>
                <p className="mt-3 text-lg w-4/5">
                  I just recently went to Taiwan for 7days. Using the toiletries
                  bag, small packing cube and the tech pouch. I hang the packing
                  cube in the hotel and the toiletries bag in the toilet(duh)
                  Everything is packed so small and well, and the quality of the
                  cube is a job well done.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <div className="flex flex-col w-50 text-center items-center rounded-2xl shadow-xl md:shadow-lg pt-7 pb-10 h-full">
                <Image
                  src="/avatar-97e8166e45337883c438702ab41020aa.jpg"
                  className="rounded-full w-[100px] h-[100px]"
                  alt="reviwer 1"
                  width={200}
                  height={200}
                />
                <h3 className="mt-4 text-2xl">⭐⭐⭐⭐⭐</h3>
                <h3 className="mt-4 text-2xl w-4/5 mx-auto">
                  “Made Life Easier!” - Tanya
                </h3>
                <p className="mt-3 text-lg w-4/5">
                  Been out travelling a few times now and they are perfect. Good
                  strong material and great quality. Would also like to buy
                  more!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <div className="flex flex-col w-50 text-center items-center rounded-2xl shadow-xl md:shadow-lg pt-7 pb-10 h-full">
                <Image
                  src="/avatar-eeeb244e611c03ca964b450e7a2f6621.jpg"
                  className="rounded-full w-[100px] h-[100px]"
                  alt="reviwer 1"
                  width={200}
                  height={200}
                />
                <h3 className="mt-4 text-2xl">⭐⭐⭐⭐⭐</h3>
                <h3 className="mt-4 text-2xl w-4/5 mx-auto">
                  “Very Pleased with My Set and Enjoying Using Them.” - Nansi
                </h3>
                <p className="mt-3 text-lg w-4/5">
                  Well made, do the job, & no strong chemical or pesticide smell
                  so didn{"'"}t need off-gassing before 1st use. Will definitely
                  buy again from this company, & likely to buy more cubes.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full py-4">
              <div className="flex flex-col w-50 text-center items-center rounded-2xl shadow-xl md:shadow-lg pt-7 pb-10 h-full">
                <Image
                  src="/avatar-f8fa52d69bb0ac63f0f94ade1b44ca5b.jpg"
                  className="rounded-full w-[100px] h-[100px]"
                  alt="reviwer 1"
                  width={200}
                  height={200}
                />
                <h3 className="mt-4 text-2xl">⭐⭐⭐⭐⭐</h3>
                <h3 className="mt-4 text-2xl w-4/5 mx-auto">
                  “Rough And Tough Built!” - Kelsey
                </h3>
                <p className="mt-3 text-lg w-4/5">
                  I have been on several trips with my Qbix 2 and they{"'"}re
                  great! I was worried about the light material (I am so rough
                  on my bags) but they have held up perfectly.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* FAQs */}
        <section className="py-10 px-4 md:px-8 lg:px-24">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
            FAQs
          </h2>
          <>
            <Accordion
              icon={<AccordionIcon id={1} open={open} />}
              open={open === 1}
              animate={customAnimation}
              className="w-full md:w-2/3 lg:w-2/3 mx-auto"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-start"
              >
                How do I care for my Qubix2?
              </AccordionHeader>
              <AccordionBody className="text-xl font-medium">
                Ripstop nylon is one of the easiest fabrics to clean. Simply put
                your cube into the tub or sink with cold water. Use a soft
                sponge and some laundry detergent to lather and gently scrub.
                Rinse thoroughly with cold water and hang or lay flat to dry.
              </AccordionBody>
            </Accordion>
            <Accordion
              icon={<AccordionIcon id={2} open={open} />}
              open={open === 2}
              animate={customAnimation}
              className="w-full md:w-2/3 lg:w-2/3 mx-auto"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-start"
              >
                What size should my luggage be to fit Qubix2?
              </AccordionHeader>
              <AccordionBody className="text-xl font-medium">
                Qubix2 fits perfectly into all kinds of luggage sizes. For a
                shorter trip, you can even fit the small, medium and electronics
                cube into your backpack for neat, lightweight travels.
              </AccordionBody>
            </Accordion>
            <Accordion
              icon={<AccordionIcon id={3} open={open} />}
              open={open === 3}
              animate={customAnimation}
              className="w-full md:w-2/3 lg:w-2/3 mx-auto"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-start"
              >
                How does the compression zipper work?
              </AccordionHeader>
              <AccordionBody className="text-xl font-medium">
                The middle zipper is the compression one. When it’s unzipped,
                the cube is fully expanded and gives you maximum packing
                capacity. After you close the lid, you can compress the bag in 2
                stages using the compression zipper, which wraps around your
                Qubix2 twice for increased flexibility. This brings together the
                top and bottom of the bag, gradually flattening out the cube
                content and reducing by up to 66% the space your stacked clothes
                would otherwise take.
              </AccordionBody>
            </Accordion>
          </>
        </section>

        <section className="px-4 md:px-8 lg:px-24 py-5 mt-7">
          <div className="flex flex-col w-50 md:flex-row items-center justify-around">
            <Image
              src="/LTweb2-packingcubes-productimage-png-008.png"
              alt="bag image"
              className="h-auto w-auto"
              width={400}
              height={370}
            />
            <button className="text-2xl font-semibold px-4 py-3 shadow-lg bg-azure rounded-lg hover:rounded-none text-white">
              SHOP NOW
            </button>
          </div>
        </section>

        <section className="py-5 shadow-[0px_0_3px_rgba(0,0,0,0.3)]">
          <p className="text-center">
            © Copyright 2022. Made by Ayomide M. Oguntuase
          </p>
        </section>
      </main>
    </div>
  );
}
