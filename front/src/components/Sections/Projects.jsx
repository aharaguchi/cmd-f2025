import React, { useEffect, useInsertionEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

export default function Projects() {

  const cards = [
    { title: "Easy Setup", subtitle: "Quick Setup, Instant Peace of Mind", description: "Simply enter your email or phone number, set an emergency contact, and you're all set. It takes just a few taps!" },
    { title: "Meeting Timer", subtitle: "Stay on Track with Regular Check-ins", description: "Set a schedule that works for you. If you forget, we’ll remind you." },
    { title: "Instant Alerts", subtitle: "Always One Step Ahead", description: "If you don’t respond to your check-in, we’ll send an alert to your emergency contact, ensuring help is always close." },
    { title: "Customizable", subtitle: "Tailored to Your Needs", description: "Set flexible check-in times and adjust preferences, giving you full control of your safety without overcomplicating things." }
  ];


  const [data, setData] = useState();
  const json = async () => {
    const res = await (await fetch("backend/api/views.py")).json();
    console.log(res);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data/"); //
        console.log(res);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(json);

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Your Safety, Simplified</h1>
            <p className="font13">
              Stay connected and safe with customizable check-ins and instant alerts. 
              Set it up in seconds, so help is always within reach.
            </p>
          </HeaderInfo>
          <CardsContainer>
            {cards.map((card, index) => (
              <TextBox key={index}>
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.description}</p>
              </TextBox>
            ))}
          </CardsContainer>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising>
            <AddRight>
              <h4 className="font15 semiBold">Why Choose Us?</h4>
              <h2 className="font40 extraBold">Your Safety, Our Priority</h2>
              <p className="font12">
                With real-time check-ins and instant alerts, we help you stay safe no 
                matter where you are. A simple setup, but a huge impact on your peace of mind.
              </p>
              <ButtonsRow>
                <FullButton title="Get Started" action={() => alert("Get Started Clicked")} />
                <FullButton title="Contact Us" action={() => alert("Contact Clicked")} border />
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;

  /* Adjusting layout for smaller screens */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TextBox = styled.div`
  background: #f5f5f5;
  padding: 30px; /* Increased padding for a bit bigger card */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 23%; /* Default width for large screens, slightly adjusted to make it bigger */
  
  @media (max-width: 1024px) {
    width: 48%; /* 2 boxes per row on medium screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
  }

  h4 {
    color: var(--secondary-color); /* Ensuring subtitle color is set to --secondary-color */
    margin: 10px 0; /* Add margin for spacing between subtitle and description */
  }

  h3 {
    margin-bottom: 15px; /* Add space between title and subtitle */
  }

  p {
    margin-top: 15px; /* Add space between subtitle and description */
  }
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const AddRight = styled.div`
  max-width: 600px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
`;
