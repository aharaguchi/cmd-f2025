import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

// Reusable Card Component
const CustomCard = ({title, subtitle, description }) => {
  return (
    <Card className={`shadow-lg text-black w-100 h-100`}style={{ minHeight: '300px', minWidth:'200px'}}> 
      <Card.Body>
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text className="text-muted mt-2">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Main Layout Component
const Cards = () => {
  const cards = [
    {title: "Easy Setup", subtitle:"Quick Setup, Instant Peace of Mind", description: "Simply enter your email or phone number, set an emergency contact, and you're all set. It takes just a few taps!"},  
    {title: "Meeting Timer", subtitle: "Stay on Track with Regular Check-ins",description:"Stay on Track with Regular Check-ins" },
    {title: "Instant Alerts", subtitle:"Always One Step Ahead",description: "If you don’t respond to your check-in, we’ll send an alert to your emergency contact, ensuring help is always close."},
    {title: "Customizable", subtitle:"Tailored to Your Needs", description: "Set flexible check-in times and adjust preferences, giving you full control of your safety without overcomplicating things."}
  ];

  return (
    <div className="cards-container">
      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3" >
              <CustomCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Cards;
