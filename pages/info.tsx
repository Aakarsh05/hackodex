import React from "react";
import Timeline from "@/components/timeline";
import ContributorGuidelines from "@/components/contributors";
import Resources from "@/components/resources";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

const Info: React.FC = () => {
  return (
    <div className=" bg-[#e3c598] p-8 sm:h-screen md:h-full lg:h-full">
      <div className="mb-8 flex items-center">
        <img className="mr-4 h-10" src="/logo.png" alt="Logo" />
      </div>
      <div className="mx-auto grid grid-cols-2 items-center justify-center gap-40 py-8 ">
        <h2 className="mb-4 ml-5 text-left text-5xl font-bold text-[#6e352c]">
          Begin Your Open Source Journey with Hackodex 2.0
        </h2>
        <img
          src="/octocat.png"
          alt="Hackodex 2.0 Logo"
          className="h-full w-full object-contain "
        />
      </div>

      <div>
        <h1 className="mb-10 text-4xl font-bold text-[#6e352c]">About</h1>
        <p className="mb-4 w-5/6 text-lg text-[#6e612f]">
          HACKODEX is an initiative by CODEX Club of ITER, SOA University for
          the students, who have little or no experience in open source software
          development, to get them involved during the whole month and break the
          ice of Open Source contributions. All the work is going to be on
          GitHub.
        </p>
        <p className="mb-4 w-5/6 text-lg text-[#6e612f]">
          HACKODEX similarly, is aimed at introducing new students to the area
          and helping them make PRs, in fact, a first for many of them, and also
          gaining confidence that will help them continue their open source
          journey.
        </p>
      </div>

      {/*-- Event timeline --*/}

      <div className="mt-24 w-3/5 pl-2">
        <h2 className="mb-2 text-2xl font-bold text-[#6e352c]">
          Event Details
        </h2>
        <Timeline />
      </div>
      {/*-- Contributor guideline --*/}
      <div className="mt-24 w-5/6 pl-2">
        <ContributorGuidelines />
      </div>
      {/*-- Resources --*/}
      <div className="w-1/2">
        <h2 className="my-24 text-2xl font-bold text-[#6e352c]">
          Resources For Beginners
        </h2>
        <Resources />
      </div>
      {/*-- FAQs --*/}
      <div className="w-2/3">
        <h2 className="my-24 text-2xl font-bold text-[#6e352c]">FAQS</h2>
        <Faq />
      </div>
      <div className="w-full mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Info;
