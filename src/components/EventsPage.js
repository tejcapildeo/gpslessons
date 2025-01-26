import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard';
import './EventsPage.css';
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'Business Networking Gala',
      date: 'March 10, 2025',
      location: 'Toronto Conference Center',
      text: 'Join us for an evening of networking with top industry leaders.',
      link: 'https://example.com/gala',
    },
    {
      title: 'Resume Workshop',
      date: 'April 5, 2025',
      location: 'Online via Zoom',
      text: 'Learn how to build a winning resume with expert advice.',
      link: 'https://example.com/workshop',
    },
    {
      title: 'Entrepreneurship Summit',
      date: 'May 15, 2025',
      location: 'Downtown Toronto',
      text: 'A summit featuring talks from successful entrepreneurs.',
    },
  ];

  const pastEvents = [
    {
      title: 'Fall Networking Event',
      date: 'October 15, 2024',
      location: 'University of Toronto',
      text: 'A successful event connecting students and professionals.',
    },
    {
      title: 'Case Competition',
      date: 'November 20, 2024',
      location: 'Myhal Building, UofT',
      text: 'Teams competed to solve real-world business challenges.',
    },
    {
      title: 'Summer Business Bootcamp',
      date: 'July 30, 2024',
      location: 'Online',
      text: 'An intensive program focused on business basics.',
    },
  ];

  // Settings for the React Slick Carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
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
