"use client";
import Linker from "@/components/linker";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="call-to-action"
      className="relative flex w-full flex-col items-center justify-start overflow-hidden px-[24px] pb-[64px] pt-[112px] text-white md:px-12 md:pt-[144px] xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="w-full sm:w-[400px] md:w-full xl:w-[1090px]"
      >
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-center text-[40px] leading-[43.2px] tracking-[-2px] md:text-[64px] md:leading-[69.12px] xl:text-[80px] xl:leading-[86.4px]">
                {children}
              </h2>
            ),
            em: ({ children }) => (
              <em className="pr-1 !not-italic text-[#ff6d00]">{children}</em>
            ),
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="mt-8 flex w-min items-center gap-2"
      >
        <Linker
          className="mt-2 inline-flex w-max justify-center rounded-full bg-gradient-to-b from-[#ff6d00]/10 to-[#ff6d00]/[50%] px-7 py-4 text-base font-medium leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#ff6d00]/60"
          field={slice.primary.contact}
        />

        <Linker
          className="mt-2 inline-flex w-max justify-center rounded-full bg-gradient-to-b from-[#fff]/10 to-[#fff]/[50%] px-7 py-4 text-base font-medium leading-[23.04px] tracking-[-0.16px] text-white outline outline-2 -outline-offset-[2px] outline-white/[12%] backdrop-blur-[50px] transition-all duration-300 hover:bg-[#fff]/60"
          field={slice.primary.about}
        />
      </motion.div>

      <div className="relative -z-10 mt-4 flex w-full items-center justify-center gap-[71.33px] xl:items-start xl:!-mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
        >
          <PrismicNextImage
            field={slice.primary.imageleft}
            className="w-full p-16 md:px-52 xl:!w-[320px] xl:!p-[45px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="hidden xl:block"
        >
          <PrismicNextImage
            field={slice.primary.imagecenter}
            className="hidden p-[70px] xl:mt-20 xl:block xl:min-w-[320px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="hidden xl:block"
        >
          <PrismicNextImage
            field={slice.primary.imageright}
            className="hidden xl:block xl:w-[320px] xl:p-[45px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
