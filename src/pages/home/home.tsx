import type { ReactNode } from "react";
import { Button } from "@/components";
import {
  HeroImagePng,
  HeroImageWebp,
  ImagePng,
  ImageWebp,
} from "@/assets/images";

function Hero() {
  return (
    <section className="px-6 pb-5 md:py-8 md:px-8 lg:py-16">
      <div className="container">
        <div className="justify-between block lg:flex">
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
                src={HeroImagePng}
                alt="Sofa"
                className="h-[428px] rounded-xl w-full"
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
        <h3 className="ml-4 text-lg font-bold">{title}</h3>
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
        <div className="flex flex-col justify-between gap-0 sm:px-8 lg:py-10 lg:gap-16 lg:flex-row xl:gap-6 lg:px-0 xl:py-16">
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
                className="w-full rounded-xl max-h-[550px] xl:h-[428px]"
              />
            </picture>
          </div>
          <div className="block mt-4 text-center lg:text-left md:mt-8 lg:mt-16 lg:flex xl:block xl:mt-0">
            <h2 className="font-black leading-8 md:text-2xl lg:mr-32">
              Long headline on two lines to turn your visitors into users and
              achieve more
            </h2>
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

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <List />
    </>
  );
}
