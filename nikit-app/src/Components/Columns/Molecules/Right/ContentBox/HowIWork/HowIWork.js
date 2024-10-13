import React from "react";
import "./HowIWork.scss";
import CollapseComponent from "./Collapse/CollapseComponent";
export default function HowIWork() {
  const data = [
    {
      title: "Strategy",
      about:
        "Asking the Right Questions Before diving into development, I ensure that we are addressing the right challenges. This phase involves thorough market research, competitive analysis, consulting with stakeholders, and exploring potential solutions. It’s crucial to align the technical implementation with user needs and business goals to deliver an optimal product experience.",
    },
    {
      title: "Development",
      about:
        "Problem Solving For me, development is all about problem solving. This is where I focus on implementing solutions for the challenges and questions identified during the previous phase. By translating design concepts into functional, responsive, and user-friendly interfaces, I ensure that the final product addresses both user needs and business goals.",
    },
    {
      title: "Prototyping & Development",
      about:
        "Bringing Designs to Life As a UI/UX Developer, I bridge the gap between design and development. I bring designs to life by coding and collaborating closely with other developers throughout the entire process and beyond. For web projects, I handle the front-end development, ensuring that the final product is both visually appealing and fully functional.",
    },
    {
      title: "Quality assurance",
      about:
        "Transparent Process I prioritize a transparent development process by providing a complete overview of my work through regular meetings. After delivering the initial versions, I conduct user testing with your customers to ensure the best possible solutions that meet their needs and expectations",
    },
  ];
  return (
    <section className="howiWork_Container">
      <div className="workContainer">
        <div className="topLayer">
          <div className="mydesign">My Development Process</div>
          <div>
            <h2>How I Work</h2>
          </div>
          <p className="content">
            As a UI/UX Developer, I approach projects with a holistic mindset,
            considering not only the business goals and user needs but also how
            feedback and the end-to-end experience translate into seamless,
            functional, and visually appealing user interfaces. I ensure that
            the aesthetic complements the performance and usability of the
            product.
          </p>
        </div>
      </div>
      <div className="collapse">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <CollapseComponent value={value} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
