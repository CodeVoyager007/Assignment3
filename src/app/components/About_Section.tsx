"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF] mix-blend-normal min-h-screen ">
      <section className="mt-0">
        {/* About Me Section */}
        <div className="flex flex-col items-center text-center px-4 py-16 space-y-12">
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
            ABOUT ME
          </button>

          <p className="max-w-2xl text-[20px] sm:text-[16px] lg:text-[20px] leading-[138.68%] text-[#050505]">
            👋 Hi! I&apos;m Ayesha Mughal, I am 15 year old girl, CS student studying
            at Govt.Girls Degree College, Clifton. dedicated web developer and
            graphic designer. I love bringing ideas to life through code and
            creative design. 🚀 With skills in HTML 🟧, CSS 🟦, JavaScript 🟨,
            and Python 🐍, I craft responsive websites and dynamic web apps that
            both look great and work flawlessly. 🎨✨ 🎯 I&apos;m always learning and
            pushing my limits to deliver exceptional results. Let&apos;s connect and
            create something amazing! 💻......
          </p>

          <Image
            src="/images/image.png"
            alt="svg"
            className="object-contain"
            width={200}
            height={200}
          />
        </div>
      </section>
      {/* Sections: Experience, Passion and Interests */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        {/* Skills Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Skills
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            I have strong expertise in HTML 🌐, CSS 🎨, and JavaScript 💻, with
            hands-on experience in React ⚛️, Next.js 🚀, and Bootstrap for
            building responsive applications. I’m familiar with jQuery 🧩 and
            TypeScript 📜, which enhance my development capabilities. In
            addition, I have skills in SASS for styling 🎨, and I&apos;m proficient
            in Git 🗂️ for version control. My knowledge of Python 🐍 allows me
            to tackle various programming challenges.
          </p>
        </div>

        {/* Passion and Interests Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Passion and Interests
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            I&apos;m passionate about web development, cyber security, and ethical
            hacking. I enjoy transforming complex ideas into user-friendly
            applications while exploring the realms of AI and UI/UX design. My
            drive for continuous learning keeps me engaged with new technologies
            and creative projects. 🚀
          </p>
        </div>
      </div>
      {/* Skills Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Experience
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            I&apos;m currently interning at GAO TECH.INC 🚀, where I&apos;m gaining
            hands-on experience in web development and sharpening my technical
            skills. Outside of my internship, I&apos;ve independently developed a
            range of exciting projects! 🌟 I created a Weather App ☀️🌧️ for
            real-time forecasts, a Pomodoro Timer ⏲️ to enhance productivity,
            and a GitHub Profile Viewer 📁 for exploring GitHub profiles
            effortlessly. My Currency Converter 💱 simplifies exchanges, and my
            Expense Tracker 💸 keeps budgeting easy and efficient. Additionally,
            I built a Password Generator 🔑 for secure password creation and a
            BMI Calculator ⚕️ to help users monitor their health. Currently, I&apos;m
            working on a JARVIS-like Assistant 🤖 to assist users with coding
            problems in a fast and efficient way. 🚀 Through both my internship
            and independent projects, I&apos;m continually driven by a passion for
            learning, innovation, and tackling real-world problems! ✨
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-12">
        <Image
          src="/images/image.png"
          alt="svg"
          className="w-32 h-32 object-contain"
          width={200} 
          height={200}
        />
      </div>
    </div>
  );
}
