import React from "react";

export default function Profile() {
  return (
    <>
      <div>
        <br />
        <div className="flex items-center justify-center text-3xl ">
          Profile
        </div>
        <br />
      </div>
      <div className="flex space-x-10 items-center justify-center h-60">
        <div className="flex">
          <div className="border-4 rounded-xl bg-white drop-shadow-xl shadow-xl   ">
            <p className="text-pink-500 pl-6 font-semibold">
              Basic Information
            </p>
            <br />
            <p className="pl-6">
              <b>Birth Date</b> &nbsp; 12.03.1999
            </p>
            <br />
            <p className="pl-6">
              <b>City of Residence</b> &nbsp; Ankara
            </p>
            <br />
            <p className="pl-6">
              <b>Educational Background</b> &nbsp; TED University BSc in Civil
              Engineering,2022
            </p>
            <br />
            <p className="pl-6">
              <b>Role of Choice</b> &nbsp; Frontend, UI{" "}
            </p>
          </div>
        </div>
        <div>
          About me <br />I am a individual with exceptional problem solving
          skills thanks to <br />
          my engineering background and I am very prone to teamwork ! <br />{" "}
          <br />I like working in a fun and fast-paced environment. <br />I
          believe a developer should be continuously learning and I am <br />
          trying my best to keep up with latest developments in the industry.
          <br /> <br />I am currently studying under Workintech to become a
          Full-Stack Developer
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
