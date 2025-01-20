import type { ReactNode, MouseEventHandler } from "react";
import { Button } from "@/components";
import {
  CallToActionDesktopPng,
  CallToActionDesktopWebp,
  CallToActionMobileWebp,
  CallToActionMobilePng,
  CallToActionTabletWebp,
  CallToActionTabletPng,
  HeroImagePng,
  HeroImageWebp,
  ImagePng,
  ImageWebp,
} from "@/assets/images";
import Carousel from "react-multi-carousel";
import { TESTIMONIALS } from "./constants";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  return (
    <section className="px-6 pb-5 md:py-8 md:px-8 lg:py-16">
      <div className="container">
        <div className="justify-between block lg:flex lg:gap-12">
          <div className="md:max-w-[630px] lg:max-w-none mx-auto lg:mx-[0] text-center lg:text-left md:pt-3 md:pb-16 lg:py-[70px] w-full lg:w-[490px]">
            <h1 className="text-[40px] md:text-[56px] font-black leading-[48px] md:leading-[60px] tracking-[-1px]">
              Medium length display headline
            </h1>
            <p className="mt-6 text-lg">
              Separated they live in Bookmarks right at the coast of the famous
              Semantics, large language
            </p>
            <div className="flex flex-col items-center justify-center mt-6 md:mt-5 md:flex-row lg:mt-10 lg:justify-start">
              <Button>Action</Button>
              <p className="mt-4 text-sm font-semibold md:mt-0 md:ml-5 lg:pr-32">
                5000 people like you have purchased this product!
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <picture>
              <source srcSet={HeroImageWebp} type="image/webp" />
              <img
                fetchPriority="high"
                src={HeroImagePng}
                alt="Sofa"
                width="696"
                height="499"
                className="w-full rounded-xl"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  /** Feature title. */
  title: ReactNode;
  /** Feature description. */
  description: ReactNode;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="p-6 sm:py-5 sm:px-0 lg:py-0">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="bg-black rounded-full size-10" />
        <h2 className="ml-4 text-lg font-bold">{title}</h2>
      </div>
      <p className="text-center lg:text-left mt-[10px] lg:mt-4">
        {description}
      </p>
    </div>
  );
}

function Features() {
  return (
    <section className="bg-[#f3f3f3]">
      <div className="container">
        <div className="flex flex-col justify-between gap-0 sm:px-8 lg:py-10 lg:gap-16 lg:flex-row xl:px-0 xl:gap-6 xl:py-16">
          <Feature
            title="Feature one"
            description="All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
          />
          <Feature
            title="Feature one"
            description="All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
          />
          <Feature
            title="Feature one"
            description="All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
          />
        </div>
      </div>
    </section>
  );
}

function List() {
  return (
    <section className="text-white bg-black">
      <div className="container">
        <div className="block p-6 lg:p-8 xl:py-24 xl:px-0 xl:flex xl:items-center">
          <div className="shrink-0 xl:mr-32">
            <picture>
              <source srcSet={ImageWebp} type="image/webp" />
              <img
                src={ImagePng}
                alt="Shelf"
                width="696"
                height="550"
                className="w-full rounded-xl max-h-[550px] xl:h-[428px]"
              />
            </picture>
          </div>
          <div className="block mt-4 text-center lg:text-left md:mt-8 lg:mt-16 lg:flex xl:block xl:mt-0">
            <h3 className="font-black leading-8 md:text-2xl lg:mr-32 xl:mr-0">
              Long headline on two lines to turn your visitors into users and
              achieve more
            </h3>
            <div className="mt-4 md:mt-8 lg:mt-0 xl:mt-4">
              <p className="text-sm leading-6 md:text-base">
                Separated they live in Bookmarks right at the coast of the
                famous Semantics, large language ocean
              </p>
              <ul className="mt-4 text-sm leading-6 list-disc md:text-base md:mt-8 lg:mt-4">
                <li className="ml-6">Showcase and embed your work with</li>
                <li className="ml-6">
                  Publish across social channels in a click
                </li>
                <li className="ml-6">Sell your videos worldwide</li>
                <li className="ml-6">Embed your work with </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialProps {
  fullName: string;
  description: string;
  avatarUrl: string;
  testimonial: string;
}

export function Testimonial({
  testimonial,
  avatarUrl,
  fullName,
  description,
}: TestimonialProps) {
  return (
    <div className="rounded-[8px] bg-gray-200 p-6 h-full flex flex-col justify-between">
      <p className="text-lg">{testimonial}</p>
      <div className="mt-14">
        <img
          src={avatarUrl}
          alt={fullName}
          className="w-16 h-16 rounded-full"
        />
        <div className="mt-4">
          <h4 className="text-base font-bold">{fullName}</h4>
          <p className="mt-1 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function CustomDot({
  active,
  index,
  onClick,
  carouselState,
}: {
  active?: boolean;
  index?: number;
  onClick?: MouseEventHandler<HTMLElement>;
  carouselState?: {
    slidesToShow?: number;
  };
}) {
  if (carouselState?.slidesToShow === TESTIMONIALS.length) {
    return null;
  }

  return (
    <li>
      <button
        onClick={onClick}
        // @ts-expect-error "God, please forgive me"
        // eslint-disable-next-line
        aria-label={`Go to slide ${index + 1}`}
        className={`mt-8 lg:mt-0 size-5 rounded-full focus-visible:outline-none focus-visible:ring-2 ${active ? "bg-black" : "bg-gray-200"}`}
      />
    </li>
  );
}

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col px-6 py-8 lg:py-12 xl:py-24">
        <Carousel
          arrows={false}
          partialVisbile={false}
          responsive={{
            desktop: {
              breakpoint: { min: 1024, max: Infinity },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 767, min: 0 },
              items: 1,
            },
          }}
          showDots
          renderDotsOutside
          dotListClass="!relative space-x-3"
          itemClass="pr-4 last:pr-0 xl:pr-8 xl:last:pr-0"
          customDot={<CustomDot />}
        >
          {TESTIMONIALS.map((item, index) => (
            <Testimonial key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="text-white ">
      <div className="h-[500px] relative">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={CallToActionDesktopWebp}
            type="image/webp"
          />
          <source
            media="(min-width: 1280px)"
            srcSet={CallToActionDesktopPng}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={CallToActionTabletWebp}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={CallToActionTabletPng}
            type="image/png"
          />
          <source srcSet={CallToActionMobileWebp} type="image/webp" />
          <img
            src={CallToActionMobilePng}
            alt="Room"
            className="w-full h-full"
            loading="lazy"
          />
        </picture>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gradient-to-r from-black">
          <div className="flex flex-col text-center max-w-60 md:max-w-none lg:max-w-[600px]">
            <p className="mb-3 font-medium">Tagline</p>
            <h5 className="text-[28px] md:text-[40px] md:px-16 lg:px-0  leading-[48px] font-black">
              Long headline to turn your visitors into users
            </h5>
            <Button appearance="on-dark" className="self-center mt-3 lg:mt-8">
              Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <List />
      <Testimonials />
      <CTA />
    </>
  );
}
