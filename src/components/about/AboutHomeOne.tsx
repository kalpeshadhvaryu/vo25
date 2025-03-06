'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Mission",
    title: `Unleashing Creativity & Technology to Transform Your Business`,
    des: `VeravalOnline is dedicated to driving business transformation through innovation, technology, and creativity. We harness the power of AI & ML, cutting-edge IT solutions, strategic business services, and modern design to help you stay ahead in a competitive digital landscape. From custom software development and AI-driven automation to UI/UX design and branding, we empower businesses with smart, scalable, and future-ready solutions. Whether you're looking to optimize operations, enhance customer experiences, or unlock new growth opportunities, VeravalOnline is your trusted partner in success.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Why Us",
    title: `Over 18 Years of Excellence in Serving Dynamic Industries`,
    des: `With over 18 years of excellence, VeravalOnline has been a trusted partner for diversified industries, including healthcare, manufacturing, exports, service providers, tourism, and government & semi-government sectors. We specialize in AI & ML, custom software development, UI/UX design, automation, designing, and branding, helping businesses simplify their processes, enhance efficiency, and drive innovation.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "How we can help you",
    title: `Your Business with Tailored, Reliable, and Scalable Solutions`,
    des: `At VeravalOnline, we have built strong in-house capabilities, including our own design studio, data center, and a network of reliable vendors, enabling us to deliver end-to-end solutions with efficiency and precision. Whether it's AI & ML, software development, UI/UX design, automation, branding, or IT infrastructure, we ensure our clients receive cutting-edge solutions that enhance productivity and drive growth—all while maintaining full control and reliability.`,
  },
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;