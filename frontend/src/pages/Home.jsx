import React from "react";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Discover Your Brightest Smile
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  commodo quam sed turpis feugiat, vitae ultrices velit
                  convallis. Vivamus vel quam at quam bibendum cursus. Nullam
                  vestibulum, sem et consectetur pellentesque, ligula quam
                  consequat nunc, ut ullamcorper elit libero vitae leo. Nulla
                  facilisi. Sed fermentum urna ut libero fermentum, non
                  fringilla elit malesuada. Integer id ultricies arcu. Quisque
                  eget hendrerit ligula. Fusce ullamcorper euismod sem, vitae
                  suscipit orci varius ac. Suspendisse potenti. In hac habitasse
                  platea dictumst. Nam ut dolor in justo facilisis imperdiet. Ut
                  vel pharetra nisl. Mauris consectetur facilisis arcu, eu
                  aliquet justo malesuada id.
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* hero image */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="Main Image 1" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="Main Image 2"
                />
                <img className="w-full" src={heroImg03} alt="Main Image 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Dental services
            </h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo quam sed turpis feugiat, vitae ultrices velit convallis.
              Vivamus vel quam at quam bibendum cursus. Nullam vestibulum, sem
              et consectetur pellentesque, ligula quam consequat nunc, ut
              ullamcorper elit libero vitae leo. Nulla facilisi. Sed fermentum
              urna ut libero fermentum, non fringilla elit malesuada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                    Find a Dentist
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <Link
                    to="/doctors"
                    className="w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
