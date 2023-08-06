// import React from 'react';
// import './portfolio.css';
// import img1 from '../../images/one.png';
// import img2 from '../../images/two.png';
// import img3 from '../../images/Screenshot from 2022-10-19 13-04-07.png';

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

//   {
//     id: 4,
//     image: img3,
//     title: 'PORTFOLIO WEBSITE',
//     demo: 'https://jennifer-pecky.github.io/my-first-portfolio/',
//   },

//   {
//     id: 5,
//     image: img3,
//     title: 'PORTFOLIO WEBSITE',
//     demo: 'https://jennifer-pecky.github.io/my-first-portfolio/',
//   },

//   {
//     id: 6,
//     image: img3,
//     title: 'PORTFOLIO WEBSITE',
//     demo: 'https://jennifer-pecky.github.io/my-first-portfolio/',
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {data.map(({ id, image, title, demo }) => {
//           return (
//             <article key={id} className="portfolio__item">
//               <div className="Portfolio__item-image">
//                 <img src={image} alt="{title}" />
//               </div>
//               <h3>{title}</h3>
//               <div className="portfolio__item-cta">
//                 <a href={demo} className="btn btn-primary" target="_blank">
//                   {' '}
//                   Live
//                 </a>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
