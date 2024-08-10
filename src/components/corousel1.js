"use client";

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";

const $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const items = [
  {
    image: "assets/img/blog/s2.JPG",
    category: "Family Event",
    subtitle: "Daughter's Birthday",
    date: "Jun 23, 2022",
    title:
      "Joyously marked my daughter's birthday in the company of our family.",
    link: "/",
  },
  {
    image: "assets/img/blog/s4.JPG",
    category: "Corporate Meeting",
    subtitle: "Met Maj Gen Abid",
    date: "Jul 21, 2023",
    title:
      "It is an honor to serve clients of esteemed positions from prestigious organizations.",
    link: "/",
  },
  {
    image: "assets/img/blog/ofce.jpg",
    category: "Corporate Meeting",
    subtitle: "CRESCO Sales Seminar",
    date: "May 18, 2024",
    title: "Speaker at the seminar on sales with the Cresco official team.",
    link: "/",
  },
  {
    image: "assets/img/blog/s5.JPG",
    category: "Corporate Event",
    subtitle: "Meet My Team",
    date: "March 10, 2021",
    title:
      "Led a team of accomplished realtors, successfully achieving our goals.",
    link: "/",
  },
  {
    image: "assets/img/blog/s3.JPG",
    category: "Family Event",
    subtitle: "Daughter's Birthday",
    date: "Jun 23, 2022",
    title:
      "She is the essence of my existence, and celebrating her birth brought immense happiness.",
    link: "/",
  },
  {
    image: "assets/img/blog/s6.JPG",
    category: "Corporate Event",
    subtitle: "Award Ceremony",
    date: "Aug 13, 2018",
    title:
      "Top real estate consultant of the year, bestowed by the esteemed Shafiq Akbar, Chairman of Agency 21.",
    link: "/",
  },
  {
    image: "assets/img/blog/s10.JPG",
    category: "Corporate Meeting",
    subtitle: "Appreciation by President Pakistan",
    date: "Feb 16, 2020",
    title:
      "President Arif Alvi, who commended our endeavors in real estate sector.",
    link: "/",
  },
  {
    image: "assets/img/blog/s12.JPG",
    category: "Corporate Meeting",
    subtitle: "Collaboration with One Eleven",
    date: "March 17, 2022",
    title:
      "Explored potential business ventures with the Chairman of One Eleven Group.",
    link: "/",
  },
  {
    image: "assets/img/blog/s8.JPG",
    category: "Hobbies & Interests",
    subtitle: "Personal car fleet",
    date: "April 01, 2022",
    title:
      "Have a deep appreciation for the sophistication and thrill of driving luxury cars.",
    link: "/",
  },
  {
    image: "assets/img/blog/s16.JPG",
    category: "Hobbies & Interests",
    subtitle: "Literary treasures",
    date: "Sep 07, 2023",
    title:
      "I dedicate a significant portion of my time to the pursuit of wisdom through reading books.",
    link: "/",
  },
];

const Carousel = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {items.map((item, index) => (
        <div
          className="post grid-post"
          data-aos="fade"
          data-aos-delay={300 + index * 100}
          key={index}
        >
          <div className="grid-post__thumb position-relative">
            <Link
              href={item.link}
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    {item.category}
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gold-600 fw-medium">{item.subtitle}</div>
                <span className="vr" />
                <div>{item.date}</div>
              </div>
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href={item.link}>{item.title}</Link>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Carousel;
