import React from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import liveAloneImg from "../../images/live-alone.jpg";
import WalkAloneImg from "../../images/walk-alone.jpg";
import hikingImg from "../../images/hiking.png";
import activityImg from "../../images/daily-activity.jpg";

export default function Projects() {
  const UseCases = () => {
    const cards = [
      {
        title: "Living Alone, Staying Safe",
        description:
          "Whether you're a student, professional, or senior living alone, our app ensures someone checks in on you daily. If anything happens, your emergency contact gets notified instantly.",
        image: liveAloneImg,
      },
      {
        title: "Daily Activities",
        description:
          "Your day-to-day activities should never feel dangerous or risky. Focus on your responsibilities—we’ve got your safety covered.",
        image: activityImg,
      },
      {
        title: "Adventurers & Solo Travelers",
        description:
          "Love hiking, traveling, or exploring on your own? Set a check-in time before your trip. If you don't respond, your trusted contact will be alerted, ensuring your safety no matter where you are.",
        image: hikingImg,
      },
      {
        title: "Night Shifts & Late Walks",
        description:
          "Walking home alone after work or a night out? Set a quick check-in, and if you don’t confirm your safety, an alert is sent. It’s simple peace of mind in just a few taps.",
        image: WalkAloneImg,
      },
    ];

    return (
      <Wrapper id="projects">
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Lorem ipsum</h1>
              <p className="font13">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
                <br />
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              <CardGrid>
                {cards.map((card, idx) => (
                  <div className="card" key={idx}>
                    <ProjectBox
                      img={card.image}
                      title={card.title}
                      text={card.description}
                      action={() => alert("clicked")}
                    />
                  </div>
                ))}
              </CardGrid>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  };

  return <UseCases />;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards per row by default */
  gap: 1rem;

  .card {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%; /* Ensure card takes up full height */
  }

  /* Ensure the images inside ProjectBox have consistent width and height */
  .card img {
    object-fit: cover; /* Crop the image if necessary */
    width: 100%; /* Set the width to 100% of the card */
    height: 250px; /* Set a fixed height */
    border-radius: 8px; /* Optional: add rounded corners */
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on smaller screens */
  }
`;
