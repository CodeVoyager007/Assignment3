import React from "react";
import Header from "./components/nav_bar";
import ContactSection from "./components/Contact";
import AboutSection from "./components/About_Section";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container">
        <div className="image-container mt-8">
          <Image
            src="/images/profile-image.png"
            alt="Profile Picture"
            width={500} 
            height={600} 
            className="object-contain"
          priority
          />
        </div>
        <div className="content">
          <div className="text-container">
            <p className="intro-text">𝙃𝙞, 𝙄 𝙖𝙢</p>
            <h1 className="name">𝘼𝙮𝙚𝙨𝙝𝙖 𝙈𝙪𝙜𝙝𝙖𝙡</h1>
            <h2 className="title">𝙒𝙚𝙗 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧</h2>
          </div>
          <div className="icons">
            <a
              href="mailto:your-ayeshamughal2162@gmail.com"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://github.com/CodeVoyager007"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="border border-black" />
      <div>
        <AboutSection />
      </div>
      <div>
        <ContactSection />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}