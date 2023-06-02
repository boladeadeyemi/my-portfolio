import React from "react";

function WhatIDo() {
  return (
    <div className="w-full bg-[#F9F9F9] py-16 px-4" id="whatIdo">
      <p className="md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl text-xl mb-4">
        My Skills
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 md:grid-rows-2">
        <div className="px-3">
          <ion-icon name="logo-react" size="large"></ion-icon>
          <h1 className="font-Poppins font-medium">REACT</h1>
          <p className="text-[#999999] font-Poppins font-light  mb-4 text-justify">
            React is a popular JavaScript library. I use React.js to build user
            interfaces (UI) for web applications. It helps me create reusable UI
            elements and manage the statae of my applications efficiently.
          </p>
        </div>
        <div className="px-3">
          <ion-icon
            className="color-[#49bc56] "
            size="large"
            name="logo-javascript"
          ></ion-icon>
          <h1 className="font-Poppins  font-medium">JAVASCRIPT</h1>
          <p className="text-[#999999] font-Poppins font-light mb-4 text-justify">
            I use JavaScript primarily for enhancing the interactivity and
            functionality of websites. I use it to create dynamic web pages,
            handle user interactions, and manipulate the content of a webpage. I
            use it in conjunction with HTML and CSS to build the front-end of
            web applications.
          </p>
        </div>

        <div className="px-3">
          <ion-icon
            className="text-xl"
            size="large"
            name="logo-html5"
          ></ion-icon>
          <h1 className="font-Poppins  font-medium">HTML</h1>
          <p className="text-[#999999] font-Poppins font-light  mb-4 text-justify">
            HyperText Markup Language is a fundamental technology for web
            development. I use it to provide the structure and content of a
            webpage. It is the bony frame work of all my projects, and gives the
            project a definite structure. I have over three (3) years experience
            in HTML.
          </p>
        </div>
        <div className="px-3">
          <ion-icon
            className="color-[#49bc56] "
            size="large"
            name="logo-javascript"
          ></ion-icon>
          <h1 className="font-Poppins  font-medium">TYPESCRIPT</h1>
          <p className="text-[#999999] font-Poppins font-light mb-4 text-justify">
            TypeScript is a superset of JavaScript. I use it to add static
            typing capabilities to my JavaScript, as it improves my code
            reliability. Other uses includes, early error detection, improved
            maintainability and scalability, enhanced tooling and IDE support,
            etc.
          </p>
        </div>
        <div className="px-3 ">
          <ion-icon
            className="text-[#49bc56]"
            size="large"
            name="logo-css3"
          ></ion-icon>
          <h1 className="font-Poppins  font-medium">CSS</h1>
          <p className="text-[#999999] font-Poppins font-light  mb-4 text-justify">
            I use Cascading Style Sheet for describing the look and formatting
            of my programs. I primarily use it to style and design web pages by
            defining the visual presentation and layout aspects of the project.
            Other uses include responsive design, animations, transitions, and
            for the general enhancement of my user experience.{" "}
          </p>
        </div>

        <div className="px-3">
          <ion-icon name="logo-python" size="large"></ion-icon>
          <h1 className="font-Poppins  font-medium">PYTHON</h1>
          <p className="text-[#999999] font-Poppins font-light  mb-4 text-justify">
            Python is a versatile and widely-used programming language, that is
            used for a variety of purposes. I use Python majorly for data
            science and analysis.
          </p>
        </div>
        <div className="px-3">
          <ion-icon name="desktop-outline" size="large"></ion-icon>
          <h1 className="font-Poppins  font-medium">SQL</h1>
          <p className="text-[#999999] font-Poppins font-light mb-4 text-justify">
            Structured Query Language is a programming language that I use for
            managing and manipulating relational databases. I primarily use it
            for database management, data manipulation, data definition, data
            control, data analysis and reporting.
          </p>
        </div>
        <div className="px-3">
          <ion-icon name="analytics-outline" size="large"></ion-icon>
          <h1 className="font-Poppins font-medium ">
            DATA-STRUCTURE AND ALGORITHM
          </h1>
          <p className="text-[#999999] font-Poppins font-light  mb-4 text-justify">
            I use javascript to implement data structure and algorithms. Data
            structure and algorithms provides a means of representing,
            manipulating, and organizing data elements in a structured manner.
            Some common data structures include, array, linked list, stacks,
            queues, trees, Graphs, Hash Tables etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
