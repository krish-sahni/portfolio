import {
  javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  docker,
  // carrent,
  // jobit,
  // tripguide,
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
import risc_pic from '../assets/risc.png'
import rpi_pic from '../assets/image.jpg'
import oak_pic_me from '../assets/oak_working_me.png'
import ros_vid from '../assets/ros_vid.gif'
import crazyflie_pic from '../assets/crazyflie_pic.png'
import crazyflie_gif from '../assets/crazyflie.gif'
import kernel_arch from '../assets/kernel_arch.png'
import filesys_overview from '../assets/filesys_overview.png'
import slc3_pic from '../assets/SLC3_Block_Diagram.png'
import pcb_pic1 from '../assets/pcb_pic1.png'
import pcb_pic2 from '../assets/pcb_pic2.png'
import drone_Cad from '../assets/drone_Cad.png'
import drone_Cad2 from '../assets/drone_Cad2.png'
import gazebo_track from '../assets/gazebo_track_484.png'
import waypoints_484 from '../assets/waypoints_484.png'
import obstacle_avoidance_sim from '../assets/obstacle_avoidance_sim.gif'
import mpc_results from '../assets/484_mpc_results.png'
import mpc_test from '../assets/MPC_TEST.gif'

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
    title: "Undergraduate Research Assistant",
    company_name: "Coordinated Science Laboratory",
    icon: uiuc_logo,
    iconBg: "#F7F7F7",
    date: "Sep 2024 - Present",
    points: [
      "Implementing control algorithms for a multi-drone system using limited information constraints.",
      "Developed a data encoding method to compress drone controllability information for efficient transmission.",
      "Successfully enabled coordination of 4 drones under strict bandwidth limitations; optimizing the system to accommodate a 5th drone.",
      "Collaborating with a graduate student to realize theoretical control strategies in practical applications."
    ],
  },
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
    name: "AI-Powered Vision for Drones",
    description: "Developing an AI-driven vision system for real-time object detection and mapping on a drone using an Oak-D Lite camera, a Raspberry Pi, and ROS DDS for data transfer.",    
    tags: [
      { name: "Neural Networks", color: "blue-text-gradient" },
      { name: "SLAM", color: "green-text-gradient" },
      { name: "ROS", color: "pink-text-gradient" },
      { name: "Pixhawk 4", color: "orange-text-gradient" },
      { name: "Edge AI", color: "blue-text-gradient" }
    ],
    image: rpi_pic, // Replace with actual image when available
    source_code_link: "https://github.com/krish-sahni/ROS_object_detection", // Placeholder, update if needed
    more_info_link: "/projects/0",
    detailed_description: "This project focuses on building an AI-driven vision system for drone navigation. A neural network processes real-time data from an Oak-D Lite camera mounted on a Raspberry Pi, transmitting insights via ROS DDS to a laptop. The next step is integrating SLAM (Simultaneous Localization and Mapping), enabling autonomous navigation. The vision system will soon be deployed onto a custom-built Pixhawk 4-based drone, allowing it to autonomously explore and map unknown environments.",    
    visual_aids: [
      { type: "Face Detection", src: oak_pic_me },
      { type: "ROS Data Transfer to Laptop", src: ros_vid },
      // { type: "SLAM Visualization", src: "slam_map.png" }
    ],
    // impact_results: "This project showcases expertise in edge AI, robotics, and real-time perception. Running neural networks on a resource-constrained embedded system and integrating it with drone navigation demonstrates a strong understanding of autonomous systems and sensor fusion. The SLAM implementation will provide real-time mapping capabilities, enhancing autonomy for search-and-rescue, surveillance, or exploration applications.",
    documentation: [
      // { type: "Technical Report", link: "https://docs.google.com/document/d/1DroneVision_Report" },
      { type: "Source Code", link: "https://github.com/krish-sahni/ROS_object_detection" }
    ],
    // future_work: "Future improvements include optimizing neural network inference for real-time performance, refining SLAM algorithms, and expanding autonomous decision-making using onboard AI. The final phase will integrate the system with the drone for fully autonomous navigation, enabling real-world deployment in dynamic environments."
  },  
  {
    name: "Multi-Drone Control with Limited Information",
    description: "Developing an optimized encoding control strategy for multi-drone control, enabling 10 drones to communicate and coordinate using constrained bandwidth.",
    tags: [
      { name: "Control Theory", color: "blue-text-gradient" },
      { name: "Multi-Agent Systems", color: "green-text-gradient" },
      { name: "Embedded Optimization", color: "pink-text-gradient" },
      { name: "Robotics", color: "orange-text-gradient" }
    ],
    image: crazyflie_pic, 
    source_code_link: "https://github.com/krish-sahni/embedded_control_crazyflie", // If applicable
    more_info_link: "/projects/1",
    detailed_description: "This project implements a theoretical framework for controlling a swarm of drones under strict bandwidth limitations. By developing an optimized encoding strategy, we allow a single data packet to encode controllability information for 10 drones. Currently, we have successfully tested a 4-drone system and are optimizing the setup to accommodate the rest. The research investigates the fundamental limits of control theory with limited information.",
    visual_aids: [
      { type: "Demo Video", src: crazyflie_gif },
      // { type: "Simulation Output", src: "drone_simulation.gif" }
    ],
    impact_results: "Demonstrates advancements in bandwidth-efficient control strategies for multi-agent robotic systems, with potential applications in aerial swarm robotics and decentralized control networks.",
    documentation: [
      { type: "Research Paper", link: "https://liberzon.csl.illinois.edu/research/coding-tac.pdf" }
    ],
    future_work: "Future developments include improving encoding efficiency, extending the method to heterogeneous drone networks, and testing real-world deployment."
  },  


  {
    name: "Drone for Disaster Relief (In Progress)",
    description: "Building an autonomous drone platform to support disaster relief through real-time sensing, navigation, and object detection",
    tags: [
      { name: "Autonomous Flight", color: "blue-text-gradient" },
      { name: "Embedded Systems", color: "green-text-gradient" },
      { name: "Edge AI", color: "pink-text-gradient" },
      { name: "FreeRTOS", color: "orange-text-gradient" }
    ],
    image: drone_Cad, 
    // source_code_link: "https://github.com/krish-sahni/multi-drone-control", // If applicable
    more_info_link: "/projects/2",
    detailed_description: "This project focuses on building a drone platform for disaster relief. The drone will be equipped with an Oak-D Lite camera for real-time object detection and a Pixhawk 4 flight controller for autonomous navigation. The system will utilize FreeRTOS for real-time task management, enabling efficient processing of sensor data and control commands. The goal is to create a reliable and efficient drone capable of navigating complex environments and identifying critical objects in disaster scenarios.",
    visual_aids: [
      { type: "PCB Pic top", src: pcb_pic1 },
      { type: "PCB Pic bottom", src: pcb_pic2 },
      { type: "Drone CAD Model", src: drone_Cad2 },
      // { type: "Simulation Output", src: "drone_simulation.gif" }
    ],
    impact_results: "",
    documentation: [
      // { type: "Research Paper", link: "https://liberzon.csl.illinois.edu/research/coding-tac.pdf" }
    ],
    // future_work: ""
  },  

  {
    name: "MPC Path Tracking and Obstacle Avoidance",
    description: "Implemented a real-time MPC controller for trajectory tracking and dynamic obstacle avoidance using a 1/10th scale autonomous vehicle.",
    tags: [
      { name: "Model Predictive Control", color: "blue-text-gradient" },
      { name: "Optimization", color: "green-text-gradient" },
      { name: "ROS", color: "pink-text-gradient" },
      { name: "Autonomous Vehicles", color: "orange-text-gradient" }
    ],
    image: gazebo_track,  // Replace with Gazebo sim or hardware image
    source_code_link: "https://github.com/krish-sahni/f1tenth_sim_environment",  // Add your repo if public
    more_info_link: "/projects/3",
    detailed_description: "This project involved developing and deploying a Model Predictive Control (MPC) framework for an autonomous F1TENTH vehicle to follow a predefined trajectory while avoiding dynamic obstacles. The system models vehicle kinematics, discretizes dynamics, and formulates a quadratic programming (QP) problem solved at 10 Hz using cvxpy and the OSQP solver. Dynamic obstacles are encoded as half-space constraints to ensure safe avoidance. The controller was tested in both Gazebo simulation and real hardware, achieving smooth, collision-free trajectory tracking in cluttered environments.",
    visual_aids: [
      { type: "Simulation Waypoints", src: waypoints_484 },
      { type: "Obstacle Avoidance in Simulation", src: obstacle_avoidance_sim },
      { type: "MPC on Car", src: mpc_test },
      { type: "Resulting Path", src: mpc_results }
    ],
    impact_results: "Successfully demonstrated a robust MPC implementation capable of handling nonlinear dynamics and real-time constraints in both simulated and physical environments. Reduced trajectory deviation and improved obstacle response timing compared to baseline controllers.",
    documentation: [
      { type: "Report Slides", link: "https://docs.google.com/presentation/d/16BdBYK3BexCTtMXT86-L2Q12sLRXLPeiQ8W2-8zCsuc/edit?usp=sharing" },
      // { type: "System Architecture Diagram", link: "/assets/docs/mpc_architecture.pdf" }
    ],
    future_work: "Integrate perception-based dynamic path replanning, improve speed tuning under aggressive curvature, and explore switching MPC formulations for tighter real-time constraints."
  },


  {
    name: "Unix-Based Operating System for RISC-V Embedded Systems",
    description: "Engineered a Unix-like operating system with virtual memory management, system calls, ELF file loading, and preemptive multitasking, built for RISC-V embedded systems.",    
    tags: [
      { name: "Operating Systems", color: "blue-text-gradient" },
      { name: "RISC-V Assembly", color: "green-text-gradient" },
      { name: "Memory Management", color: "pink-text-gradient" },
      { name: "Multithreading", color: "orange-text-gradient" },
    ],
    image: risc_pic, // Replace with the correct image path
    source_code_link: "https://github.com/krish-sahni/Unix_like_OS",
    more_info_link: "/projects/4",
    detailed_description: "Built a Unix-like operating system from the ground up for RISC-V embedded systems. The OS features a custom file system, I/O management, process scheduling, and memory protection, following the Sv39 paging standard. Supports preemptive multitasking, system calls for user applications, and ELF file execution. Implemented virtual memory control and multi-threading/multi-processing capabilities, optimizing it for embedded hardware environments.",    visual_aids: [
      { type: "Kernel Architecture Diagram", src: kernel_arch },
      {type: "Filesystem Overview", src: filesys_overview}
      // { type: "System Call Workflow", src: "syscall_workflow.png" },
      // { type: "Virtual Memory Paging Overview", src: "virtual_memory_paging.png" },
    ],
    impact_results: "This project deepened my understanding of OS development, memory management, and process scheduling. Implementing low-level system features, such as an ELF loader and a multi-threading kernel, strengthened my expertise in RISC-V architecture, embedded systems, and real-time control. The experience directly contributes to my goal of working in embedded firmware, robotics, and hardware design.",
    documentation: [
      // { type: "Project Report", link: "https://docs.google.com/document/d/1OS_Report" },
      { type: "Source Code", link: "https://github.com/krish-sahni/Unix_like_OS" },
    ],
    future_work: "Future improvements include expanding the OS to support dynamic memory allocation, adding a scheduler with more advanced thread management, and improving the virtual memory system to support demand paging. Additionally, I aim to integrate device drivers for more hardware peripherals and further optimize system performance for embedded applications.",
  },
  
  {
    name: "FPGA-Accelerated Tetris Game Using SystemVerilog",
    description: "Designed and implemented a high-performance FPGA-based Tetris game, leveraging SystemVerilog and Vivado for real-time processing and display.",    
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
    more_info_link: "/projects/5",
    detailed_description: "Developed an FPGA-based Tetris game using SystemVerilog and Vivado as part of a digital systems design project. Implemented real-time piece rotation, collision detection, and scoring logic, displayed via VGA output. Optimized the hardware architecture for low-latency performance, leveraging parallel processing on FPGA logic blocks.",    
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
    name: "Gesture-Based Smart Room Automation with Ultrasonic Sensors",
    description: "Designed an intelligent room automation system using ultrasonic sensors to detect hand gestures, enabling seamless touch-free control of electronic appliances.",    
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
    more_info_link: "/projects/6",
    detailed_description: "Engineered a gesture-based smart room automation system using ultrasonic sensors and Arduino. Designed a custom 3D-printed sensor mount and implemented gesture recognition algorithms to enable touch-free control of lights and appliances. Utilized wireless communication (NRF24L01 module) to expand automation capabilities across multiple devices.",    
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
    name: "FPGA-Based 16-bit LC3 CPU Implementation",
    description: "Designed and implemented a fully functional LC3 CPU on an FPGA using SystemVerilog, capable of executing LC3 assembly instructions with memory-mapped I/O.",
    tags: [
      { name: "FPGA", color: "blue-text-gradient" },
      { name: "SystemVerilog", color: "green-text-gradient" },
      { name: "Computer Architecture", color: "pink-text-gradient" },
      { name: "Embedded Systems", color: "orange-text-gradient" }
    ],
    image: slc3_pic, // Replace with the actual image if available
    // source_code_link: "https://github.com/krish-sahni/lc3-cpu-fpga", // Placeholder, update if needed
    more_info_link: "/projects/7",
    detailed_description: "Developed a **custom 16-bit CPU** on an FPGA, implementing the **LC3 architecture** using **SystemVerilog**. The CPU features **8 general-purpose registers, a program counter, an Arithmetic Logic Unit (ALU), and a control unit**. The design supports **memory-mapped I/O for efficient input and output operations**. The FPGA-based implementation is capable of executing **LC3 assembly code**, supporting the full instruction set defined in the **LC3 ISA (Instruction Set Architecture)**.",
    visual_aids: [
      { type: "CPU Architecture Diagram", src: slc3_pic },
      // { type: "FPGA Implementation", src: "fpga_setup.png" },
      // { type: "Memory Mapped I/O", src: "memory_io.png" }
    ],
    impact_results: "This project demonstrates proficiency in **computer architecture, digital design, and FPGA development**. The implementation of a custom CPU from scratch showcases expertise in **hardware description languages (HDLs), instruction set design, and embedded system optimization**. The FPGA-based CPU successfully executes LC3 assembly programs, making it a functional and scalable embedded computing system.",
    documentation: [
      // { type: "Technical Report", link: "https://docs.google.com/document/d/1LC3_CPU_Report" },
      // { type: "Source Code", link: "https://github.com/krish-sahni/lc3-cpu-fpga" }
    ],
    future_work: "Future improvements include **pipeline optimization**, expanding instruction set capabilities, and integrating support for **external peripherals via UART or SPI interfaces**. Additional enhancements could include designing a **custom assembler or compiler** to streamline software development for the FPGA-based CPU."
  }, 
  {
    name: "Solar Power System with Dual-Axis Tracking",    
    description: "Developed a solar energy system optimized for high efficiency, integrating a dual-axis tracking mechanism and smart energy management.",
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
    more_info_link: "/projects/8",
    detailed_description: "Designed a self-sustaining solar power system integrating a dual-axis tracking mechanism for maximum efficiency. Engineered an intelligent power management system using a charge controller, inverter, and battery storage to optimize energy output. The system is scalable for off-grid applications and smart energy solutions.",    
    visual_aids: [
      { type: "Electrical schematic of the PV system", src: mini_pv_electrical },
      // "Electrical schematic of the PV system",
      // "Images of the system components and setup",
      // "Demonstration video of the system in action",
    ],
    impact_results: "This project highlighted my ability to design and implement a renewable energy system, showcasing my understanding of solar power generation and energy storage principles. It demonstrated my skills in integrating various electrical components to create a functional system, aligning with my career aspirations in renewable energy, automation, and hardware design. The successful operation of the mini PV system served as a practical example of sustainable energy solutions, reinforcing my commitment to advancing renewable energy technologies.",
    documentation: [
      { type: "Project Drive", link: "https://drive.google.com/drive/u/0/folders/1Te-6xEVfTtUVoNyk54CTHhVdVFe5r3CF" },
      // { type: "Source Code", link: "https://github.com/" },
    ],
    future_work: "Future enhancements for this project could include scaling up the system for higher power output, integrating more advanced monitoring and control systems for better efficiency, and exploring ways to optimize the energy storage process. Additionally, incorporating remote monitoring capabilities could provide real-time insights into the system's performance. These advancements align with my goals in renewable energy and hardware design, offering further opportunities to develop and demonstrate my expertise.",
  }, 
  {
    name: "Real-Time Control of an Inverted Pendulum System",
    description: "Developed a control system to stabilize an inverted pendulum, implementing advanced feedback control strategies and real-time simulation testing.",
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
    more_info_link: "/projects/9",
    detailed_description: "Built a real-time control system to stabilize an inverted pendulum, a fundamental problem in control theory and robotics. Implemented PID and state-space controllers, refining system response through simulation and hardware testing. This project demonstrates proficiency in real-time feedback control, dynamic modeling, and embedded control system design.",
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
