// import { useState } from "react";
// import "./works.scss";

// export default function Works() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const data = [
//     {
//       id: "1",
//       icon: "./assets/mobile.png",
//       title: "Web Design",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       img:
//         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
//     },
//     {
//       id: "2",
//       icon: "./assets/globe.png",
//       title: "Mobile Application",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
//     },
//     {
//       id: "3",
//       icon: "./assets/writing.png",
//       title: "Branding",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
//     },
//   ];

//   const handleClick = (way) => {
//     way === "left"
//       ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
//       : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
//   };
  
//   return (
//     <div className="works" id="works">
//       <div
//         className="slider"
//         style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
//       >
//         {data.map((d) => (
//           <div className="container">
//             <div className="item">
//               <div className="left">
//                 <div className="leftContainer">
//                   <div className="imgContainer">
//                     <img src={d.icon} alt="" />
//                   </div>
//                   <h2>{d.title}</h2>
//                   <p>{d.desc}</p>
//                   <span>Projects</span>
//                 </div>
//               </div>


//               <div className="right">
//                 <img
//                   src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
//                   alt=""
//                 />
                
//               </div>
              
//             </div>
            
//           </div>
//         ))}
//       </div>
//       <img
//         src="assets/arrow.png"
//         className="arrow left"
//         alt=""
//         onClick={() => handleClick("left")}
//       />
//       <img
//         src="assets/arrow.png"
//         className="arrow right"
//         alt=""
//         onClick={() => handleClick()}
//       />
//     </div>
//   );
// }



import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Cryptfolio",
      technology:
        "HTML,CSS-Bulma,javascript",
      img:
         "https://images.unsplash.com/photo-1625821124026-51bcd1e5dbd5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      githubRepo : "https://github.com/SimonMSelvadurai/Cryptfolio",
      weblink:"https://lallender.github.io/Cryptfolio/",
         
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Weather-Dashboard",
      technology:
      "HTML,CSS-Bulma,JQuery,WeatherAPI",
      img:"https://images.unsplash.com/photo-1625914613269-e22736627546?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      weblink:"https://simonmselvadurai.github.io/Weather-Dashboard/",
      githubRepo: "https://github.com/SimonMSelvadurai/Weather-Dashboard"
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      githubRepo : "https://github.com/SimonMSelvadurai/p2-group-5",
      title: "TravelBug",
      technology:
        "Express JS Tailwind CSS Handlebars mySQL",
        weblink:"https://p2-group-5.herokuapp.com/",
      img:
        "https://images.unsplash.com/photo-1625821124026-51bcd1e5dbd5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.technology}</p>

                  <div className="imgContainer">
                  <img src="assets/gitHub.png" alt="" 
                  onClick={()=> window.open(d.githubRepo, "_blank")}/>
                  </div>
                  <div className="imgContainer">
                  <img src="assets/weblink.png" alt="" 
                  onClick={()=> window.open(d.weblink, "_blank")}/>
                  </div>

                </div>
              </div>
              <div className="right">
                <img
                         src="https://images.unsplash.com/photo-1625821124026-51bcd1e5dbd5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  alt=""

                />


              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

