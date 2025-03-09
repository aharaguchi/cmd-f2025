import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const UseCaseCard = ({ title, description }) => {
  return (
    <Card className="shadow-lg text-black w-100 h-100" style={{ minHeight: '300px', width:'200px'}} >
      <Card.Body>
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text className="text-muted mt-2">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const UseCases = () => {
  const cards = [
    {
      title: "Living Alone, Staying Safe",
      description:
        "Whether you're a student, professional, or senior living alone, our app ensures someone checks in on you daily. If anything happens, your emergency contact gets notified instantly.",
    },
    {
      title: "Daily Activities",
      description:
        "Your day-to-day activities should never feel dangerous or risky. Focus on your responsibilities—we’ve got your safety covered.",
    },
    {
      title: "Adventurers & Solo Travelers",
      description:
        "Love hiking, traveling, or exploring on your own? Set a check-in time before your trip. If you don't respond, your trusted contact will be alerted, ensuring your safety no matter where you are.",
    },
    {
      title: "Night Shifts & Late Walks",
      description:
        "Walking home alone after work or a night out? Set a quick check-in, and if you don’t confirm your safety, an alert is sent. It’s simple peace of mind in just a few taps.",
    },
  ];

  return (
    <div className="cards-container">
      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-sm-6" >
              <UseCaseCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
