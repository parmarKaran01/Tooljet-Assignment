import { ArrowForward } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import test from "../assets/Macbook Pro 16 mockup.png";
import Layers from "../assets/Layers.png";
import Sisyphus from "../assets/Sisyphus.png";
import Circooles from "../assets/Circooles.png";
import Catalog from "../assets/Catalog.png";
import Quotient from "../assets/Quotient.png";
import Analytics from "../assets/Analytics.png";
import Inbox from "../assets/Inbox.png";
import Deliver from "../assets/Deliver.png";
import Report from "../assets/Report.png";
import FAQ from "./FAQ";

export default function Herosection() {
  return (
    <div className="w-full h-content">
      <div className="flex flex-col items-center justify-center mt-[10rem]">
        <div className="lg:w-[28rem] flex flex-row items-center bg-[#F9F5FF] rounded-full py-[0.25rem] px-2 justify-between w-[80%] md:w-[28rem]">
          <h2 className="sm:w-3/12 bg-white rounded-full text-xs text-[#6941C6] px-2 text-center cursor-pointer lg:text-base lg:w-4/12">
            New Feature
          </h2>
          <h2 className="text-[#6941C6] text-xs cursor-pointer sm:w-[80%] overflow-x-hidden lg:font-normal text-right lg:text-base">
            Check out the team Dashboard <ArrowForward />
          </h2>
        </div>
      </div>
      <div className="lg:text-5xl text-center mt-4 font-medium text-4xl">
        {" "}
        Beautiful analytics to grow smarter
      </div>
      <div className="text-center mt-4 flex flex-row items-center justify-center">
        <p className="lg:w-[45%] md:w-[60%] w-[90%] text-xl text-[#667085]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-center mt-4">
        <div className="lg:flex lg:flex-row items-center lg:justify-evenly md:flex md:flex-row md:justify-evenly flex flex-col lg:w-3/12 md:w-4/12 w-[90%] gap-2">
          <Button
            variant="outlined"
            fullWidth
            style={{
              background: "transparent",
              color: "gray",
              height: "45px",
              border: "1px solid gray",
            }}
          >
            Demo
          </Button>
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#7F56D9",
              height: "45px",
            }}
          >
            Sign up
          </Button>
        </div>
      </div>

      {/* this is the image div */}
      <div className="w-full flex flex-row items-center justify-center mt-16">
        <img src={test} alt="image" className="w-[70%]" loading="lazy" />
      </div>

      {/* this is the companies div
       */}
      <div className="w-full flex flex-col item-center justify-between mt-12">
        <h2 className=" text-lg text-[#667085] text-center">
          Join 4,000+ companies already growing
        </h2>
        <div className="w-full lg:px-24 py-2 flex lg:flex-row lg:items-center flex-wrap lg:justify-between mt-10 px-8  md:flex-row md:items-center md:flex-wrap md:justify-start items-center justify-evenly">
          <img
            src={Layers}
            alt="Layers logo"
            className="p-4 object-cover min-w-fit"
            loading="lazy"
          />
          <img
            src={Sisyphus}
            alt="Sisyphus logo"
            loading="lazy"
            className="p-4 object-cover min-w-fit"
          />
          <img
            src={Circooles}
            alt="Circooles logo"
            className="p-4 object-cover min-w-fit"
            loading="lazy"
          />
          <img
            src={Catalog}
            alt="Catalog logo"
            className="p-4 object-cover min-w-fit"
            loading="lazy"
          />
          <img
            src={Quotient}
            alt="Quotient logo"
            className="p-4 object-cover min-w-fit"
            loading="lazy"
          />
        </div>
      </div>

      {/* this is the testimony div */}

      <div className="bg-[#F9FAFB]">
        <div className="pl-[2rem] pr-[2rem] pt-[3rem] pb-[4rem] flex flex-col items-center justify-center">
          <img
            src={Sisyphus}
            alt="Sisyphus logo"
            className="p-4 object-cover min-w-[150px] max-w-[150px]"
            loading="lazy"
          />
          <h2 className="text-4xl text-center mt-3 font-medium px-[10vw] lg:w-5/6 sm:w-[95%] sm:text-3xl">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </h2>

          <div className="flex flex-col items-center justify-center mt-8">
            <Avatar />
            <h2 className="font-bold">Candice Wu</h2>
            <h2 className="text-[#667085] text-base">
              Product Manager, Sisyphus
            </h2>
          </div>
        </div>
      </div>

      {/* this is the features div */}

      <div className="bg-[#FFFFFF] flex flex-col items-center pt-8">
        <span className="bg-[#F9F5FF] text-[#6941C6] px-3 py-2 rounded-xl">
          Features
        </span>
        <div className="w-full flex flex-col items-center text-center mt-4">
          <h2 className="text-4xl text-center mt-3 font-medium px-[10vw] lg:w-5/6 sm:w-[95%] sm:text-3xl">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="lg:w-[45%] md:w-[60%] w-[90%] text-xl text-[#667085] mt-2">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <img
          src={Analytics}
          alt="Analytics image"
          className="mt-8"
          loading="lazy"
        />

        {/* next section */}

        <div className="lg:px-24 flex flex-row items-center justify-evenly flex-wrap gap-8  w-full">
          <div className="w-[300px] flex flex-col items-center justify-between text-center gap-2">
            <img src={Inbox} alt="inbox image" loading="lazy" />
            <h2 className="text-xl font-medium">Share team inboxes</h2>
            <p className="text-[#667085]">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
            <Button
              style={{
                background: "transparent",
                color: "#6941C6",
              }}
            >
              Learn More <ArrowForward />
            </Button>
          </div>
          <div className="w-[300px] flex flex-col items-center justify-between text-center gap-2">
            <img src={Deliver} alt="inbox image" loading="lazy" />
            <h2 className="text-xl font-medium">Deliver instant answers</h2>
            <p className="text-[#667085]">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
            <Button
              style={{
                background: "transparent",
                color: "#6941C6",
              }}
            >
              Learn More <ArrowForward />
            </Button>
          </div>
          <div className="w-[300px] flex flex-col items-center justify-between text-center gap-2">
            <img src={Report} alt="inbox image" loading="lazy" />
            <h2 className="text-xl font-medium">
              Manage your team with reports
            </h2>
            <p className="text-[#667085]">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
            <Button
              style={{
                background: "transparent",
                color: "#6941C6",
              }}
            >
              Learn More <ArrowForward />
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>

      {/* start your free trial section */}
      <div className="bg-[#F9FAFB] w-full py-16 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-medium">Start your free trial</h2>

        <p className="text-[#667085] mt-4">
          Join over 4,000+ startups already growing with Untitled.
        </p>

        <div className="lg:flex lg:flex-row items-center lg:justify-evenly md:flex md:flex-row md:justify-evenly flex flex-col lg:w-3/12 md:w-4/12 w-[90%] gap-2 mt-8">
          <Button
            variant="outlined"
            fullWidth
            style={{
              background: "transparent",
              color: "gray",
              height: "45px",
              border: "1px solid gray",
            }}
          >
            Learn More
          </Button>
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#7F56D9",
              height: "45px",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
