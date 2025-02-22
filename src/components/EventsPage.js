import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard';
import './EventsPage.css';
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'Breaking into the industry - Event',
      date: 'March 21 2025, 4pm - 8pm',
      location: 'University of Toronto Student Commons',
      text: 'The UTBSA is excited to announce our upcoming breaking into the industry event! This will be very useful for anyone looking to secure summer internships or looking for assistance in their professional development. Stay tuned for more details. Click below to sign up!',
      link: 'https://utbsa.org/signup',
    }
    // ,
    // {
    //   title: 'Resume Workshop',
    //   date: 'April 5, 2025',
    //   location: 'Online via Zoom',
    //   text: 'Learn how to build a winning resume with expert advice.',
    //   link: 'https://example.com/workshop',
    // },
    // {
    //   title: 'Entrepreneurship Summit',
    //   date: 'May 15, 2025',
    //   location: 'Downtown Toronto',
    //   text: 'A summit featuring talks from successful entrepreneurs.',
    // },
  ];

  const pastEvents = [
    {
      title: 'How to break into tech consulting ',
      date: 'Jan 25, 2025',
      location: 'Online',
      text: "Join us on January 25th at 3:00 pm for an exclusive online speaker event with Rue Sriharsha, a Trustworthy AI Consultant at Deloitte! Rue is on a mission to build products that improve life convenience. She is a consultant in Deloitte’s Trustworthy AI practice. She graduated from the University of Toronto with a major in Computational Cognitive Science and triple minors in Computer Science, Statistics, and Business. Rue has previously interned at Microsoft, Amazon, and three Canadian startups. She is also an avid hackathon attendee with over 30+ successful projects and 5 wins under her belt.",
    },
    {
      title: 'Case Competition',
      date: 'November 21, 2024',
      location: 'Online',
      text: "New date for the Case Competition announced! This is a great way to meet like minded people interested in business as well as sharpen your problem solving skills. Teams of 2-4 are permitted. Sign up quickly because the deadline is approaching! Link in bio!",
    },
    {
      title: 'Fintech Forum',
      date: 'March 25, 2024',
      location: 'Hart House Debate Room, 6pm-8pm',
      text: "Hart House Finance Committee and the University of Toronto Business Association are proud to announce our Fintech Forum event! Whether you’re a finance enthusiast or just beginning to explore this field, this event is designed to provide you with valuable knowledge and a roadmap to navigate various finance and fintech careers. This event offers you many opportunities. Networking: Connect with professionals, peers, and like-minded individuals who share your passion for finance. Learning: Gain insights from industry leaders about the nuances of different finance careers that involve technology. Inspiring: Discover how to turn your passion for finance into a rewarding and fulfilling career.",
    },
  ];

  // Settings for the React Slick Carousel
  const carouselSettings = {
    dots: true,
    infinite: upcomingEvents.length > 1,
    speed: 500,
    slidesToShow: 2, // Number of cards visible at once
    slidesToScroll: 1, // Scroll one card at a time
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one card on smaller screens
        },
      },
    ],
  };

  return (
    <div className="event-page">
      <h1 className="event-page-title">Events</h1>

      {/* Upcoming Events Carousel */}
      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <Slider {...carouselSettings} className="event-carousel">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </Slider>
      </section>

      {/* Past Events Carousel */}
      <section className="events-section">
        <h2 className="section-title">Past Events</h2>
        <Slider {...carouselSettings} className="event-carousel">
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default EventsPage;
