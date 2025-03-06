import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mr.Prasenjit Chowdhury.",
    location: "Thiland",
    img: "assets/img/testimonial-2.jpg",
    text: "It was a mind-blowing experience of traveling with Coochbehar Travels,, special thanks to Mr Biplab Chakraborty,as he extended his cordial support to me and my family in every aspect of Thailand Tour.",
  },
  {
    name: "Rajpriya Bera",
    location: "India",
    img: "assets/img/testimonial-2.jpg",
    text: "Our experience at Nepal tour has been awesome this year. We have travelled a lot with this travel agency, never ever got dissatisfied. Road conditions are terrible in Nepal, their driver Chiranjit Das has been awesome 👍",
  },
  {
    name: "Jayita das",
    location: "Inida",
    img: "assets/img/testimonial-3.jpg",
    text: "We recently went to Kashmir with Coochbehar Travels and had the most horrible experience ever. Insolent  behavior of the tour managers ruined our whole trip. There was absolutely no cooperation coupled with utter harassment.",
  },
  {
    name: "Manali Sarkar",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "It was an amazing experience ❤️....looking forward to plan more trips like this mesmerizing one!! Thanking Coochbehar travels for making our trip a successful one with great joy and happiness ❤️",
  },
  {
    name: "Parsomi Biswas",
    location: "India",
    img: "assets/img/testimonial-3.jpg",
    text: "We went to a family tour at  Rajasthan this year with Coochbehar Travel. It is incredible that we didn't even have to call them once during the whole journey. Entire tour is so nicely organised, which is commendable.",
  },
  {
    name: "Debolina Saha",
    location: "India",
    img: "assets/img/testimonial-4.jpg",
    text: "Great experience with Coochbehar Travel this time around. We are a family of 16 members went to Kashmir at 20th October this month. We had a wonderful experience with our Group lead Mr Shubha Chakraborty.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={testimonial.img}
                alt={testimonial.name}
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">{testimonial.name}</h5>
              <p>{testimonial.location}</p>
              <p className="mb-0">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;