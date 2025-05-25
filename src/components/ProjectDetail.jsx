import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import tetrisGif from "../assets/tetrisGif.gif"; // Adjust the path according to your project structure
import IMG_7238 from "../assets/IMG_7238.gif";

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch project data based on ID
    const projectData = projects[id];
    if (projectData) {
      setProject(projectData);
    }

    // Scroll down if the state indicates to do so
    if (location.state?.scrollTo) {
      window.scrollTo({
        top: 20, // Adjust the value to your preference
        behavior: "smooth",
      });
    }
  }, [id, location.state]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 relative">
      <button
        onClick={() => {
          navigate("/#projects"); // Navigate back
          setTimeout(() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }, 50); // Scrolls down smoothly after a short delay
        }}
        className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{project.name}.</h2>
      </motion.div>

      {id === "5" && ( // Assuming "0" is the ID for the Tetris project
        <img 
          src={tetrisGif} 
          alt="Tetris Game" 
          className="absolute top-80 right-8 w-64 h-85 object-cover rounded-lg"
        />
      )}

      {id === "6" && ( // Assuming "1" is the ID for the project with IMG_7238.gif
        <img 
          src={IMG_7238} 
          alt="Project 1 GIF" 
          className="absolute top-80 right-8 w-64 h-85 object-cover rounded-lg"
        />
      )}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {project.description}
      </motion.p>

      <div className="mb-8 mt-8">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionSubHeading}>Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-[14px] ${tag.color} bg-gray-200 px-2 py-1 rounded-md`}>
                #{tag.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mb-4">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionSubHeading}>Detailed Description</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        {project.detailed_description}
        </motion.p>
      </div>
      
      <div className="mb-4">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionSubHeading}>Visual Aids</h2>
          <ul>
            {project.visual_aids.map((aid, index) => (
              <li key={index}>
                {aid.type}: {aid.src ? <img src={aid.src} alt={aid.type} className="my-4 w-full max-w-md" /> : <span>{aid}</span>}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* <div className="mb-4">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionSubHeading}>Impact and Results</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        {project.impact_results}
        </motion.p>
      </div> */}
      
      <div className="mb-4">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionSubHeading}>Documentation</h2>
          <ul className="list-none">
            {project.documentation.map((doc, index) => (
              <li key={index} className="mb-2">
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-0.85 px-4 rounded"
                  download={doc.type === "Project Report" && id === "3" ? "project_report.pdf" : undefined} // Conditionally add the download attribute
                >
                  {doc.type}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* <div className="mb-4">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionSubHeading}>Future Work</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        {project.future_work}
        </motion.p>
      </div> */}
    </div>
  );
};

export default SectionWrapper(ProjectDetail, "");
