import React from "react";
import "./portfolio.css";
import img1 from "../../images/one.png";
import img2 from "../../images/two.png";
import img3 from "../../images/Screenshot from 2022-10-19 13-04-07.png";

// const data = [
//   {
//     id: 1,
//     image: img1,
//     title: 'OLHOMES',
//     demo: 'https://www.olhomes.ng/',
//   },

//   {
//     id: 2,
//     image: img2,
//     title: 'INVOICEMAKER-WEBSITE',
//     demo: 'https://invoicemakerfree.com/',
//   },

//   {
//     id: 3,
//     image: img3,
//     title: 'PORTFOLIO WEBSITE',
//     demo: 'https://jennifer-pecky.github.io/my-first-portfolio/',
//   },
// ];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-xl">My Experience</h5>
      <h2 className="text-xl">Projects</h2>
      {/* 
      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="Portfolio__item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary" target="_blank">
                  {' '}
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div> */}

      <div className="container portfolio gap-[3rem]">
        <div className="space-y-3">
          <a
            href="https://nft-web22.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex"
          >
            NFT Showcase Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <p>
            Developed a dynamic NFT showcase website <br /> using React for
            frontend components, Bootstrap for <br /> responsive design and
            Javascript for interactive content
          </p>
          <div className="space-x-3">
            <button className=' px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">'>
              Bootstrap
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              React js
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Javascript
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="https://jennifer-pecky.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex"
          >
            Simple Weather App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <p>
            Developed a responsive weather app website using <br /> Html for
            structure Tailwind css for styling and Javascript <br /> for
            fetching and displaying weather data.
          </p>
          <div className="space-x-3">
            <button className=' px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-[#ff4d58] hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">'>
              Html
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-[#ff4d58] hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Tailwind CSS
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-[#ff4d58] hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Javascript
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="https://jennifer-pecky.github.io/Book-search-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex"
          >
            Online Book Search Platform
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <p className="leading-7 text-base">
            Crafted an engaging online book search platform <br /> using HTML
            for structure, Tailwind CSS for styling, and JavaScript <br /> for
            seamless data retrieval and display.
          </p>
          <div className="space-x-3">
            <button className=' px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">'>
              Html
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              CSS
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Javascript
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="https://de-sab.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            Interactive Dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <p>
            Developed an interactive Dashboard application using <br /> React
            for struture Tailwind css for styling <br /> and Javascript for
            enabling dynamic functionality
          </p>
          <div className="space-x-3">
            <button className=' px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">'>
              Tailwind
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              React js
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Javascript
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="https://www.olhomes.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            olhomes.ng
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <p>
            Contributed collaboratively to the development of "Olhomes," a
            comprehensive loan application aimed at streamlining the lending
            process.
          </p>
          <div className="space-x-3">
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              React js
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Tailwind
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              TypeScript
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="https://adventura-story-platform.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex space-x-10"
          >
            Adventura Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>

          <p>
            Developed an interactive story telling website <br /> using React
            for frontend components, Tailwind for <br /> responsive design and
            Javascript for interactive content
          </p>
          <div className="space-x-3">
            <button className=' px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">'>
              Tailwind Css
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              React js
            </button>
            <button className="px-2 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-pink-400 hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Javascript
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
