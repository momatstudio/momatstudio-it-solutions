import Cover from "@/components/cover/Cover";
import { Metadata } from "next";
import Banner from "@/components/two-section-banner/Banner";
import {
  about,
  generaInfo,
  servicesDetail,
  servicesSummary,
  testimonies,
} from "@/utils/data";
import FullImageDisplay from "@/components/full-image-display/FullImageDisplay";
import TwoSectionFullDisplay from "@/components/two-section-full-display/TwoSectionFullDisplay";
import Spacer from "@/components/spacer/Spacer";
import TwoSectionFullDisplayExtended from "@/components/two-section-full-display-extended/TwoSectionFullDisplayExtended";
import Containers from "@/components/containers/Containers";
import Testimonials from "@/components/testimonials/Testimonials";
// import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Call from "@/components/call/Call";

export const metadata: Metadata = {
  title: generaInfo.title,
  description: generaInfo.description,
  keywords: generaInfo.keywords,
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <section className="mx-auto">
      <Cover />
      {/* OUR SERVICES */}
      <Spacer size={60} id="services" />
      <div>
        <Banner
          mediumTitle={servicesSummary[0].mediumTitle}
          description={servicesSummary[0].description}
          // id="services"
        />
        <Spacer size={60} />
        <Containers />
      </div>
      <Spacer size={60} />
      <div>
        <Banner
          smallTitle={servicesSummary[1].smallTitle}
          mediumTitle={servicesSummary[1].mediumTitle}
          description={servicesSummary[1].description}
          buttonLink={servicesSummary[1].Buttonlink}
          buttonName={servicesSummary[1].buttonName}
        />
        <Spacer size={60} />
        <FullImageDisplay
          imageUrl={servicesSummary[1].imageUrl}
          alt={servicesSummary[1].imageAlt}
        />
      </div>
      <Spacer size={60} />
      <TwoSectionFullDisplay
        imageAtLeft={false}
        title={servicesDetail[0].title}
        description={servicesDetail[0].description}
        imageLink={servicesDetail[0].imageLink}
        imageAlt={servicesDetail[0].imageAlt}
        list={servicesDetail[0].list}
      />
      <Spacer size={60} />
      <div>
        <Banner
          smallTitle={servicesSummary[2].smallTitle}
          mediumTitle={servicesSummary[2].mediumTitle}
          description={servicesSummary[2].description}
          buttonLink={servicesSummary[2].Buttonlink}
          buttonName={servicesSummary[2].buttonName}
        />
        <Spacer size={60} />
        <FullImageDisplay
          imageUrl={servicesSummary[2].imageUrl}
          alt={servicesSummary[2].imageAlt}
        />
      </div>
      <Spacer size={60} />
      <TwoSectionFullDisplay
        imageAtLeft={true}
        title={servicesDetail[1].title}
        description={servicesDetail[1].description}
        imageLink={servicesDetail[1].imageLink}
        imageAlt={servicesDetail[1].imageAlt}
        list={servicesDetail[1].list}
      />
      .
      <Spacer size={30} id="about-us" />
      <div className="bg-black">
        {/* ABOUT US */}
        <Spacer size={30} />

        <TwoSectionFullDisplayExtended
          aboutSummary={about.aboutSummary}
          aboutSections={about.aboutSections}
        />
        <Spacer size={30} />
      </div>
      <Spacer size={30} id="testimonials" />
      <Testimonials testimonies={testimonies} />
      <Spacer size={60} id="contact-us" />
      {/* Faqs */}
      <Contact />
      <Spacer size={60} />
      <Call />
      {/* <Blog /> */}
    </section>
  );
}
