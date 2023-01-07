import React from "react";
import Layout from "../components/Layout";

const About = () => {
  const teamData = [
    {
      name: "Sarvesh Patil",
      img: "https://res.cloudinary.com/sarveshp46/image/upload/v1670222333/ProfilePicturePhoto_sond99.jpg",
      bio: "Software developer with a love for creating cutting-edge applications that boost organisational success's efficacy and efficiency. Well-versed in technology and able to write code to construct dependable and user-friendly solutions. Strong creative and analytical skills. Team player with an eye for detail.",
      website: "https://sarvesh2902.github.io/",
      twitter: "https://twitter.com/sarvesh_2902",
      github: "https://github.com/sarvesh2902",
      linkedin: "https://www.linkedin.com/in/sarvesh2902/",
      instagram: "https://www.instagram.com/patil__sarvesh/",
    },
    {
      name: "Atharva Bhoite",
      img: "https://res.cloudinary.com/atharva7/image/upload/v1660658036/IPLab/profile_pic_cvxlrz.jpg",
      bio: "A tech enthusiast having a firm grip on various programming languages like Java, Python, C and web development, libraries like ReactJS and NextJS. Experience of being an SE Technical Officer in a Non-profit Organization. Second-year student pursuing B.E ( Bachelor of Engineering) - Information Technology in Vivekanand Education Society's Institute of Technology, Mumbai.",
      twitter: "https://twitter.com/atharvabhoite7",
      github: "https://github.com/atharvabhoite7",
      linkedin: "https://www.linkedin.com/in/atharva-bhoite-ba783a22b/",
      instagram: "https://www.instagram.com/atharva_bhoite_7/",
    },
    {
      name: "Shreyansh SIngh",
      img: "https://avatars.githubusercontent.com/u/91277635?s=400&u=233fa0d27a84e891077eb6f171482c89aa264a73&v=4",
      bio: "At Mumbai, where I started my third year in the College of Engineering, I have learned the importance of applying classical strategies to modern-day projects .- Won in hackathons with my engineering team- Experience at Atto Infotech as a summer intern and Firsebooking.com as Front-end developer taught me how to apply development concepts to real word projects.",
      twitter: "https://twitter.com/Shreyan80327061",
      github: "https://github.com/SinghShreyansh",
      linkedin: "https://www.linkedin.com/in/shreyansh-singh-40b4a422b/",
      instagram: "https://www.instagram.com/shreyansh0322/",
    },
    {
      name: "Hrishikesh Kumbhar",
      img: "https://avatars.githubusercontent.com/u/65307083?s=400&u=237f659d05e15248aee91189818084c78f6f3da0&v=4",
      bio: "I am a full-stack developer with a strong background in the MERN stack . I have a passion for building intuitive and scalable web applications that deliver a seamless user experience.I am also an AI and machine learning enthusiast with a passion for using data-driven approaches to solve real-world problems.",
      website: "",
      twitter: "https://twitter.com/Hrishi_156",
      github: "https://github.com/Hrishikesh156",
      linkedin: "https://www.linkedin.com/in/hrishikesh-kumbhar-a86319206/",
      instagram: "https://www.instagram.com/hrishikesh_kumbhar15/",
    },
  ];

  const cards = teamData.map((member) => {
    return (
      <div className="w-80 rounded overflow-hidden shadow-lg mx-2 mb-10">
        <img
          className="w-80 h-80"
          src={member.img}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{member.name}</div>
          <p className="text-gray-700 text-base">{member.bio}</p>
        </div>
        <div className="px-12 pb-5 flex justify-around">
          {/* <a
            target="_blank"
            href={member.website}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {member.website}
          </a> */}
          <a target="_blank" href={member.twitter} className="twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
            </svg>
          </a>
          <a target="_blank" href={member.github} className="github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <a target="_blank" href={member.linkedin} className="linkedin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
            </svg>
          </a>
          <a target="_blank" href={member.instagram} className="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
          </a>
          {member.website && (
            <a target="_blank" href={member.website} className="">
              <img
                src="https://img.icons8.com/ios/50/null/domain--v1.png"
                width={28}
              />
            </a>
          )}
        </div>
      </div>
    );
  });
  return (
    <Layout title="About Us / AudioNotes">
      <div className="text-gray-700 bg-white">
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-4xl font-bold mb-2 text-black">About Us</div>
            <div className="text-2xl mb-8 text-gray-800">
              We are 3rd Year Bachelors of Engineering students motivated to
              build new products for the betterment of society
            </div>
          </div>
        </div>
        <section className="px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Our Team
          </h2>
          <div className="flex flex-wrap justify-evenly">{cards}</div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
