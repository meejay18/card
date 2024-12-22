// import React from "react";
// import "./index.css";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import pix from "./assets/mije.jpg";

// const App = () => {
//   return (
//     <div className="card">
//       <Avatar />

//       <div className="data"></div>
//       <Intro />
//       <SkillList />
//     </div>
//   );
// };

// const Avatar = () => {
//   return <img className="avatar" src={pix} alt="" />;
// };

// const Intro = () => {
//   return (
//     <div>
//       <h1>Digban Mije</h1>
//       <p>
//         Fullstack web developer. When not coding or preparing a course, I like
//         to play football and video games
//       </p>
//     </div>
//   );
// };

// const SkillList = () => {
//   return (
//     <div className="skill-list">
//       <Skill stack="React" emoji="❤️" color="red" />
//       <Skill stack="Typescript" emoji="🚀" color="red" />
//       <Skill stack="Html and CSS" emoji="❤️" color="pink" />
//       <Skill stack="Javascript" emoji="❤️" color="green" />
//       <Skill stack="Node js" emoji="❤️" color="blue" />
//     </div>
//   );
// };

// const Skill = (props) => {
//   return (
//     <div
//       style={{ backgroundColor: props.color, borderRadius: "5px" }}
//       className="skill-list"
//     >
//       <span>{props.stack}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// };
// // const skill = () => {
// //   return <div className="skill"> React</div>;
// // };

// export default App;

import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import data from "./data.json";

const App = () => {
  return (
    <div className="w-full h-screen bg-[gray] ">
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <div className="w-[95%] h-[90%] bg-[gray] justify-between items-center flex rounded-md">
          <div className="flex w-[100%] items-center  justify-between h-[100%]">
            {" "}
            {data.map((profileCard) => (
              <ProfileCard
                img={profileCard.img}
                name={profileCard.name}
                description={profileCard.description}
                price={profileCard.price}
                avatar={profileCard.avatar}
                button={profileCard.button}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
