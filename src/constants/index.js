import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import emsys from '../assets/emsys.png';
import plug from '../assets/plug.png';
import ai from '../assets/ai.png';
import renew from '../assets/renew.png';
import freeportlogo from '../assets/freeportlogo.png'
import hublogo from '../assets/hublogo.png'
import vig_ash from '../assets/vig_ash.png'
import uiuc_logo from '../assets/uiuc_logo.png'
import C_logo from '../assets/C_logo.png'
import python_logo2 from '../assets/python_logo2.png'
import Matlab_Logo from '../assets/Matlab_Logo.png'
import x86_logo from '../assets/x86_logo.png'
import sv from '../assets/sv.png'
import arduino_logo from '../assets/arduino_logo.png'
import raspberrypi_logo from '../assets/raspberrypi_logo.png'
import opencv_logo from '../assets/opencv_logo.png'
import fusion_logo from '../assets/fusion_logo.png'
import tetris_game_logic from '../assets/tetris_game_logic.png'; // Add the path to your images
import tetris_image_jpg from '../assets/tetris_image_jpg.png'; // Add the path to your images
import tetris_logo from '../assets/tetris_logo.png'
import cad_photo from '../assets/cad_photo.png'
import Arduino_pic from '../assets/Arduino_pic.png'
import mini_pv_electrical from '../assets/mini_pv_electrical.png'
import mini_pv_pic from '../assets/mini_pv_pic.png'
import e486_pic_2 from '../assets/e486_pic_2.png'
import e486_pic_setup from '../assets/486_pic_setup.png'


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Electrical Design Specialist",
    icon: plug,
  },
  {
    title: "Robotics Engineer",
    icon: ai,
  },
  {
    title: "Embedded Systems Developer",
    icon: emsys,
  },
  {
    title: "Renewable Energy Innovator",
    icon: renew,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: C_logo,
  },
  {
    name: "CSS 3",
    icon: python_logo2,
  },
  {
    name: "JavaScript",
    icon: x86_logo,
  },
  {
    name: "TypeScript",
    icon: Matlab_Logo,
  },
  {
    name: "React JS",
    icon: sv,
  },
  {
    name: "Redux Toolkit",
    icon: arduino_logo,
  },
  {
    name: "Tailwind CSS",
    icon: raspberrypi_logo,
  },
  {
    name: "Node JS",
    icon: opencv_logo,
  },
  {
    name: "MongoDB",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: fusion_logo,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Reliability Engineering Intern",
    company_name: "Freeport McMoRan",
    icon: freeportlogo,
    iconBg: "#000000",
    date: "May 2024 - Aug 2024",
    points: [
      "Led the upgrade to SEL 710 relays, evaluating system features and compatibility.",
      "Optimized relay integration through detailed field assessments.",
      "Updated preventive maintenance with comprehensive BOMs and parts lists.",
      "Enhanced system safety by refining arc flash calculations and software.",
      "Collaborated with teams to resolve complex electrical issues.",
    ],
  },
  {
    title: "Business Applications Intern",
    company_name: "Huber Group",
    icon: hublogo,
    iconBg: "#F7F7F7",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developed a Plant Maintenance System with Microsoft Power Platform, reducing processing time by 25%.",
      "Implemented secure user authentication and automated alerts, enhancing system security.",
      "Boosted development efficiency by 20% using agile methodologies and a blend of low-code and high-code solutions.",
    ],
  },
  {
    title: "Engineering Tutor",
    company_name: "Center for Academic Resources In Engineering (CARE)",
    icon: uiuc_logo,
    iconBg: "#F1F1F1",
    date: "Aug 2022 - Present",
    points: [
      "Provided tutoring support in introductory engineering courses, helping students grasp foundational concepts.",
      "Led physics exam review sessions for over 40 students, resulting in an average grade improvement of 10%.",
      "Conducted productive 2-hour tutoring shifts, assisting 10-15 students per session with personalized guidance.",
    ],
  },
  {
    title: "Engineering Intern",
    company_name: "Vigyan Ashram",
    icon: vig_ash,
    iconBg: "#F7F7F7",
    date: "May 2022 - Aug 2022",
    points: [
      "Designed a metal composter using Fusion 360, cutting farming costs by 10%.",
      "Developed a PCB for water level detection with KiCAD, saving 1 liter of water per day.",
      "Worked with senior engineers in an MIT-affiliated lab to deliver impactful rural projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tetris Game in System Verilog and Vivado",
    description: "A fully functional Tetris game implemented in System Verilog and Vivado, featuring piece rotation, scoring, and game screens.",
    tags: [
      {
        name: "SystemVerilog",
        color: "blue-text-gradient",
      },
      {
        name: "Vivado",
        color: "green-text-gradient",
      },
    ],
    image: tetris_logo,
    source_code_link: "https://github.com/krish-sahni/tetris-game-system-verilog",
    more_info_link: "/projects/0",
    detailed_description: "Developed a digital system to implement a classic Tetris game as part of the final project for ECE 385 (Digital Systems Laboratory). This project involved designing and implementing the game logic in hardware, ensuring smooth and responsive gameplay. My role included designing the overall game architecture, implementing algorithms for piece movement and rotation, and conducting thorough testing to ensure reliability and performance. The game features a start screen, an end screen, a real-time score counter displayed on the FPGA board, instant drop-down functionality for game pieces, and automatic line clearing. These elements combined to create an engaging and fully operational version of Tetris on a hardware platform, demonstrating my proficiency in System Verilog and Vivado, as well as my ability to integrate software and hardware components effectively.",
    visual_aids: [
      { type: "Block diagram of the game logic", src: tetris_game_logic },
      { type: "Start screen", src: tetris_image_jpg },
      // { type: "Gameplay demonstration video", src: "link_to_video" },
    ],
    impact_results: "The Tetris Game in System Verilog and Vivado demonstrated my ability to design and implement complex digital systems, showcasing both my technical skills and my problem-solving capabilities. This project solidified my understanding of hardware design principles and provided practical experience in using System Verilog and Vivado. The successful implementation of features such as real-time scoring, piece rotation, and game screen transitions highlighted my proficiency in creating responsive and reliable digital systems. The project received positive feedback from peers and instructors, and it served as a strong example of my capability to deliver high-quality work under academic deadlines.",
    documentation: [
      { type: "Project Report", link: "https://docs.google.com/document/d/1S-_wHfD6snq9rNnO0YlfZsPhWKguaFkDBzJhcZCrGBs/edit?usp=sharing" }, // Add your Google Doc link or PDF link here
      { type: "Source Code", link: "https://github.com/krish-sahni/tetris-game-system-verilog" },
    ],
    future_work: "Building on the success of this project, future work could involve enhancing the game's complexity and features to further push the boundaries of hardware design. Potential improvements include implementing a multiplayer mode to allow competitive gameplay between two players on the same hardware platform, enhancing the graphical display to include more detailed visuals and smoother animations utilizing more advanced FPGA capabilities, and developing an AI opponent to challenge the player, incorporating machine learning techniques to create a dynamic and challenging gameplay experience. Additionally, optimizing the game algorithms for better performance and lower power consumption is crucial for real-world hardware applications. These future enhancements align with my aspirations in automation, robotics, control systems, and hardware design, providing further opportunities to develop and demonstrate my expertise in these fields.",


  },
  {
    name: "Automated Room Sensor with Ultrasonic Sensors",
    description: "A sensor system to detect hand movements and control room functionalities like light switches.",
    tags: [
      {
        name: "UltrasonicSensors",
        color: "blue-text-gradient",
      },
      {
        name: "3DPrinting",
        color: "green-text-gradient",
      },
      {
        name: "Microcontrollers",
        color: "pink-text-gradient",
      },
    ],
    image: Arduino_pic,
    source_code_link: "https://github.com/krish-sahni/Hand-Sensing-for-Room-Automation/",
    more_info_link: "/projects/1",
    detailed_description: "This project involved creating an automated room control system utilizing ultrasonic sensors to detect hand movements. I designed a custom sensor array with three HCSR04 sensors arranged in a triangular setup, mounted on a 3D printed fixture. The sensors were connected to an Arduino, where I implemented code to detect hand movements in six directions, ensuring accurate motion detection and avoiding false triggers. The system used the NRF24L01 module for wireless communication with another Arduino, enabling remote control of devices such as a motor for switching lights on and off.",
    visual_aids: [
      { type: "3D Print Casing", src: cad_photo },
      // { type: "Start screen", src: tetris_image_jpg },
      // { type: "Gameplay demonstration video", src: "link_to_video" },
      // "Schematic of sensor arrangement",
      // "Images of the sensor setup and 3D printed piece",
      // "Demonstration video of the system controlling a light switch",
    ],
    impact_results: "This project showcased my ability to integrate multiple technologies to create a functional automation system. It demonstrated my skills in hardware design, sensor integration, and microcontroller programming. The successful implementation of hand motion detection and wireless communication highlighted my proficiency in developing practical solutions for smart home applications. This project also provided valuable hands-on experience in solving complex technical challenges, which is crucial for a career in automation, robotics, and hardware design.",
    documentation: [
      // { type: "Project Report", link: "#" },
      { type: "Source Code", link: "https://github.com/krish-sahni/Hand-Sensing-for-Room-Automation/" },
    ],
    future_work: "Future enhancements could focus on improving the system's accuracy and functionality. Potential upgrades include refining the motion detection algorithms for better precision, adding support for controlling multiple devices, and enhancing the graphical interface for user interaction. Incorporating machine learning techniques could further improve gesture recognition and adaptability. These advancements align with my goals in automation and hardware design, offering opportunities to further develop and demonstrate my expertise.",
  },
  {
    name: "Mini PV System for Charging Devices",
    description: "A photovoltaic system to charge electronic devices, being upgraded to a dual-axis solar tracking system.",
    tags: [
      {
        name: "SolarPanels",
        color: "blue-text-gradient",
      },
      {
        name: "ChargeController",
        color: "green-text-gradient",
      },
      {
        name: "Battery",
        color: "pink-text-gradient",
      },
      {
        name: "Inverter",
        color: "orange-text-gradient",
      },
    ],
    image: mini_pv_pic,
    source_code_link: "https://github.com/",
    more_info_link: "/projects/2",
    detailed_description: "This project involved creating a mini photovoltaic (PV) system to showcase the principles of solar power generation and storage. I connected a solar panel to a series of components including a multimeter, charge controller, inverter, low voltage disconnect, battery, and an outlet. The system captures solar energy through the panel, which is then regulated by the charge controller and stored in the battery. The inverter converts the stored energy to a usable form, and the low voltage disconnect ensures the battery does not get over-discharged. The setup also includes an outlet for practical usage of the generated power.",
    visual_aids: [
      { type: "Electrical schematic of the PV system", src: mini_pv_electrical },
      // "Electrical schematic of the PV system",
      // "Images of the system components and setup",
      // "Demonstration video of the system in action",
    ],
    impact_results: "This project highlighted my ability to design and implement a renewable energy system, showcasing my understanding of solar power generation and energy storage principles. It demonstrated my skills in integrating various electrical components to create a functional system, aligning with my career aspirations in renewable energy, automation, and hardware design. The successful operation of the mini PV system served as a practical example of sustainable energy solutions, reinforcing my commitment to advancing renewable energy technologies.",
    documentation: [
      { type: "Project Report", link: "https://drive.google.com/drive/u/0/folders/1Te-6xEVfTtUVoNyk54CTHhVdVFe5r3CF" },
      // { type: "Source Code", link: "https://github.com/" },
    ],
    future_work: "Future enhancements for this project could include scaling up the system for higher power output, integrating more advanced monitoring and control systems for better efficiency, and exploring ways to optimize the energy storage process. Additionally, incorporating remote monitoring capabilities could provide real-time insights into the system's performance. These advancements align with my goals in renewable energy and hardware design, offering further opportunities to develop and demonstrate my expertise.",
  },
  {
    name: "Inverted Pendulum Control System",
    description: "A control system to stabilize an inverted pendulum using advanced control strategies.",
    tags: [
      {
        name: "ControlTheory",
        color: "blue-text-gradient",
      },
      {
        name: "MathematicalModeling",
        color: "green-text-gradient",
      },
      {
        name: "Simulations",
        color: "pink-text-gradient",
      },
    ],
    image: e486_pic_setup,
    source_code_link: "https://github.com/",
    more_info_link: "/projects/3",
    detailed_description: "Implemented various control strategies to stabilize an inverted pendulum, a classic control problem. My role included developing mathematical models, implementing control algorithms, and conducting testing.",
    visual_aids: [
      { type: "Block diagram of the control system", src: e486_pic_2 },
      // "Block diagram of the control system",
      // "Images from simulations and control outputs",
      // "Demonstration video of the pendulum stabilization",
    ],
    impact_results: "Demonstrates deep knowledge of control systems. Application of theoretical concepts to practical problems.",
    documentation: [
      { type: "Project Report", link: "../assets/project_report.pdf" },
      // { type: "Source Code", link: "https://github.com/" },
    ],
    future_work: "Enhancements in control algorithms and real-world applications.",
  },
];

export { services, technologies, experiences, testimonials, projects };
