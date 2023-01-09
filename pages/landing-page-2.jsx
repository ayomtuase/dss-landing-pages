import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { BsPlayCircle } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import AccordionIcon from "../components/AccordionIcon";

import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import Head from "next/head";

export default function LandingPage2() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    console.log("value is", value);
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Head>
        <title>Qubix</title>
      </Head>
      <div className="max-w-screen relative font-montserrat">
        <nav className="min-w-full flex max-w-full bg-transparent backdrop-blur-2xl px-3 pl-0 lg:px-8 py-3 lg:py-5 justify-between items-center h-[60px] absolute top-0 z-20">
          <Link href="/">
            <div className="bg-[url('/QUB2-Black.svg')] bg-no-repeat bg-center bg-cover h-[50px] w-[140px] recolor-png focus-visible:outline-none"></div>
          </Link>

          {/* Mobile Menu toggler
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className={`${
            showMobileNav ? "hidden" : ""
          } focus-visible:outline-none h-[35px] w-[30px] bg-transparent md:hidden relative flex items-center`}
        >
          <span
            className={`${
              showMobileNav ? "onclick" : ""
            } mobile-nav-toggler bg-black left-1/2 -translate-x-1/2 before:bg-black before:left-0 after:bg-black after:left-0`}
          ></span>
        </button> */}

          {/* Desktop Links
        <div className="md:space-x-2 lg:space-x-10 lg:ml-4 hidden md:flex">
          <Link
            className="no-underline uppercase text-black hover:text-azure text-sm font-medium"
            href="/"
          >
            LIFESTYLE
          </Link>
          <Link
            className="no-underline uppercase text-black hover:text-azure text-sm font-medium"
            href="/"
          >
            BACKPACKS
          </Link>
          <Link
            className="no-underline uppercase text-black hover:text-azure text-sm font-medium"
            href="/"
          >
            TRAVEL
          </Link>
          <Link
            className="no-underline uppercase text-black hover:text-azure text-sm font-medium"
            href="/"
          >
            BEHIND THE PACKS
          </Link>
          <Link
            className="no-underline uppercase text-black hover:text-azure text-sm font-medium"
            href="/"
          >
            STORIES
          </Link>
        </div> */}

          {/* <div className="relative md:max-w-[20%] hidden md:inline">
          <input
            type="text"
            placeholder="Search Qubix"
            className="px-2 py-2 rounded-md border-2 min-w-full max-w-full border-azure focus-visible:outline-none"
          />
          <FiSearch className="absolute top-1/2 -translate-y-1/2 right-2 -translate-x-1/2 text-dove-grey" />
        </div> */}
          <ScrollLink
            to="products-catalog"
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="bg-black text-white px-4 py-3 text-md rounded-xl">
              SHOP QUBIX
            </button>
          </ScrollLink>

          {/* Mobile Nav Menu*/}

          {/* <div
          className={`min-h-screen ${
            showMobileNav ? "" : "hidden"
          } bg-[#007FD2]/95 flex flex-col w-full items-center justify-center backdrop-blur-md transition absolute top-0 z-50`}
        >
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="focus-visible:outline-none h-[35px] w-[30px] bg-transparent absolute top-[3%] right-[7%] flex items-center"
          >
            <TfiClose className="text-concrete text-2xl absolute " />
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
        </div> */}
        </nav>

        <main>
          {/* Hero */}
          <section className="page-2-hero h-min md:h-screen bg-gradient-to-r from-concrete to-[#007FD2] w-full relative">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              autoplay={{
                delay: 15000,
                disableOnInteraction: true,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay, Navigation]}
              navigation={true}
              className="mySwiper h-full w-full"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: -20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: -120,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: -200,
                },
                1280: {
                  slidesPerView: 1,
                  spaceBetween: -300,
                },
                1560: {
                  slidesPerView: 1,
                  spaceBetween: -300,
                },
              }}
            >
              {[
                {
                  valueText: "Save Up To 66% Luggage Space",
                  valueExplainer:
                    "The centre compression zipper wraps twice around each cube, giving you the added flexibility of a 2 level compression.",
                  imgSrc: "/LTweb2-packingcubes-lifestyleimages-014.jpg",
                  reviewText: "Love My Qubix2 Set!” - Darren",
                  reviewImgSrc: "/avatar-f3ea648e45b1d4195846fae498b5e657.jpg",
                },
                {
                  valueText: "Unpack in seconds with hook and hang",
                  valueExplainer:
                    "With Qubix2’s hook and hang system, simply hook and hang your cubes on the rail, on a hanger, or anywhere you want, without needing to unpack.",
                  imgSrc: "/LTweb2-packingcubes-lifestyleimages-012.jpg",
                  reviewText: "“Made Life Easier!” - Tanya",
                  reviewImgSrc: "/avatar-97e8166e45337883c438702ab41020aa.jpg",
                },
                {
                  valueText: "Quick Easy Access To Your Clothes",
                  valueExplainer:
                    "Getting access to your clothes is an absolute breeze. Simply unzip your cube without decompressing it and that’s it.",
                  imgSrc: "/LTweb2-packingcubes-lifestyleimages-003.jpg",
                  reviewText:
                    " “Very Pleased with My Set and Enjoying Using Them.” - Nansi",
                  reviewImgSrc: "/avatar-eeeb244e611c03ca964b450e7a2f6621.jpg",
                },
                {
                  valueText: "Perfect For Anyone Who Travels",
                  valueExplainer:
                    "Qubix2 packing cubes save you from wasted time, frustration and struggle, so you can spend more time making the most out of your trip.",
                  imgSrc: "/LTweb2-packingcubes-lifestyleimages-017.jpg",
                  reviewText: "Love My Qubix2 Set!” - Darren",
                  reviewImgSrc: "/avatar-f3ea648e45b1d4195846fae498b5e657.jpg",
                },
                {
                  valueText: "Super Strong & Super Lightweight",
                  valueExplainer:
                    "Qubix2 features a super lightweight RipStop parachute fabric that is woven using a special reinforcing technique, making it resistant to tearing and ripping.",
                  imgSrc: "/LTweb2-packingcubes-lifestyleimages-001.jpg",
                  reviewText: "“Made Life Easier!” - Tanya",
                  reviewImgSrc: "/avatar-97e8166e45337883c438702ab41020aa.jpg",
                },
              ].map((ad, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full min-w-full flex flex-col md:flex-row items-center justify-between pb-4 md:pb-0 px-3 md:px-8 lg:px-24 xl:px-32"
                >
                  <div className="w-full md:w-[45%] mt-[60px] md:mt-0 pt-5 md:pt-0">
                    <h1 className="font-semibold text-3xl md:text-5xl mb-4 md:mb-6">
                      Qubix2
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {ad.valueText}
                    </h2>
                    <p className="text-md lg:text-xl mt-3 md:mt-8 font-medium">
                      {ad.valueExplainer}
                    </p>
                    <div className="flex items-center mt-4">
                      <ScrollLink
                        to="products-catalog"
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        <button className="bg-black text-mystic px-4 py-3 text-base md:text-2xl font-medium rounded-lg mr-4">
                          SHOP NOW
                        </button>
                      </ScrollLink>
                    </div>
                    <div className="flex justify-between mt-3 md:mt-5 items-center lg:w-4/5">
                      <div>
                        <p className="text-lg md:text-xl font-medium">
                          {ad.reviewText}
                        </p>
                      </div>
                      <Image
                        src={ad.reviewImgSrc}
                        className="rounded-full w-[70px] md:w-[100px] h-[70px] md:h-[100px]"
                        alt="reviwer 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <Image
                    src={ad.imgSrc}
                    className="w-auto md:w-[45%] h-[200px] md:h-auto rounded-2xl mt-3 mt:md-0"
                    alt="display image 1"
                    width={2000}
                    height={2000}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="py-10 md:py-16 md:pt-20">
            <h2 className="max-w-[80%] mx-auto text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 md:mb-8 text-[#007FD2]">
              Qubix has been featured by
            </h2>

            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              autoplay={{
                delay: 2000,
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
                  spaceBetween: 40,
                },
                1560: {
                  slidesPerView: 5.1,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="mySwiper h-30 w-[90%] md:w-full relative"
            >
              <SwiperSlide className="h-[5rem]">
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

          <section className="py-6 md:py-16 px-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
              how it helps you
            </h2>
            <div className="mt-8 w-full md:w-[35rem] md:h-[20rem] relative mx-auto rounded-xl">
              <Image
                src="/packingcubes-video-thumbnail-002.jpg"
                alt="video thumbnail"
                width={600}
                height={600}
              />
              <div className="absolute bottom-0 top-0 right-0 left-0 bg-gradient-to-r from-concrete/30 to-[#007FD2]/30 rounded-xl shadow-md flex justify-center items-center cursor-pointer">
                <BsPlayCircle className="black text-5xl md:text-8xl" />
              </div>
            </div>
            <ScrollLink
              to="products-catalog"
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="mx-auto mt-5 bg-black text-white text-2xl px-4 py-3 block rounded-xl">
                SHOP NOW
              </button>
            </ScrollLink>
          </section>

          <section className="py-10 px-4 md:px-8 lg:px-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
              faqs
            </h2>
            {[
              {
                headerText: "How do I care for my Qubix2?",
                bodyText:
                  "Ripstop nylon is one of the easiest fabrics to clean. Simply put your cube into the tub or sink with cold water. Use a soft sponge and some laundry detergent to lather and gently scrub. Rinse thoroughly with cold water and hang or lay flat to dry.",
              },
              {
                headerText: "What size should my luggage be to fit Qubix2?",
                bodyText:
                  "Qubix2 fits perfectly into all kinds of luggage sizes. For a shorter trip, you can even fit the small, medium and electronics cube into your backpack for neat, lightweight travels.",
              },
              {
                headerText: "How does the compression zipper work?",
                bodyText:
                  "The middle zipper is the compression one. When it’s unzipped, the cube is fully expanded and gives you maximum packing capacity. After you close the lid, you can compress the bag in 2 stages using the compression zipper, which wraps around your  Qubix2 twice for increased flexibility. This brings together the top and bottom of the bag, gradually flattening out the cube content and reducing by up to 66% the space your stacked clothes would otherwise take.",
              },
            ].map((faq, index) => (
              <Accordion
                key={index + 1}
                icon={<AccordionIcon id={index + 1} open={open} />}
                open={open === index + 1}
                className="w-full md:w-2/3 lg:w-2/3 mx-auto my-6"
              >
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="text-start bg-gradient-to-r from-concrete to-[#007FD2]/90 px-4 rounded-xl text-black"
                >
                  {faq.headerText}
                </AccordionHeader>
                <AccordionBody className="text-xl font-medium !scale-100 text-black">
                  {faq.bodyText}{" "}
                </AccordionBody>
              </Accordion>
            ))}
          </section>

          <section className="bg-white py-6 md:py-16 px-4 lg:16 xl:px-32">
            <ScrollElement name="products-catalog">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 md:mb-16 text-[#007FD2]">
                our products
              </h2>
            </ScrollElement>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 lg:gap-6 items-center justify-center">
              {[
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-009.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-001.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-002.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-003.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-004.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-006.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-007.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
                {
                  imgSrc: "/LTweb2-packingcubes-productimage-png-008.png",
                  name: "Complete Qubix set",
                  price: 500,
                  oldPrice: 700,
                  description: "Acquire the entire set",
                },
              ].map((product, index) => (
                <div key={index} className="flex group flex-col items-start">
                  <div className="bg-[#EEEEED] p-4 w-full md:w-80 h-60 md:h-80 rounded-xl relative">
                    <Image
                      src={product.imgSrc}
                      alt={`product-image-${index}`}
                      className="w-auto h-[110%] md:h-full mx-auto"
                      width={600}
                      height={600}
                    />
                    <div className="transition-all ease-in-out group flex items-center justify-center h-0 overflow-hidden group-hover:h-[75px]  absolute bottom-0 right-0 rounded-b-xl left-0 bg-gradient-to-r from-concrete to-[#007FD2]">
                      <button className="bg-black text-mystic px-4 py-3 text-base font-medium rounded-xl">
                        BUY
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mt-2">
                      <p className="text-lg font-medium">{product.name}</p>
                      <p className="mx-3 text-lg font-medium">{`$${product.price}`}</p>
                      <del className="text-sm opacity-75">{`$${product.oldPrice}`}</del>
                    </div>
                    <p className="text-base">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="h-min-full w-full md:h-[24rem] lg:h-[30rem] flex flex-col md:flex-row justify-end pt-10">
            <div className="bg-[#E4DFE1] px-3 py-6 md:pl-6  lg:p-8 flex flex-col justify-center items-start md:bg-gradient-to-t from-[#EFEFEE] to-[#E5E0E2] min-h-full flex-1">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
                Make unpacking a thing of the past
              </h2>
              <ScrollLink
                to="products-catalog"
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="bg-black text-mystic mt-6 px-4 py-3 text-base md:text-2xl font-medium rounded-lg mr-4">
                  SHOP NOW
                </button>
              </ScrollLink>
            </div>
            <div className="w-full h-full shadow-[0_0_2px_8px_#E5E0E2_inset] md:w-1/2 xl:w-2/5 bg-cover bg-no-repeat bg-center">
              <Image
                src="/packingcubes-video-thumbnail-005.jpg"
                alt="big image"
                className="w-full h-full md:w-auto"
                width={3000}
                height={3000}
              />
            </div>
          </section>
          <section className="py-5 shadow-[0px_0_3px_rgba(0,0,0,0.3)] bg-[#EEEEED]">
            <p className="text-center">
              © Copyright 2022. Digital Super Systems. Designed by Ayomide M.
              Oguntuase
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
