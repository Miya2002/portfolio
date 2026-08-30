import "./ProjectsPage.css";

import { motion } from "framer-motion";

import projects from "../data/projects";


function ProjectsPage() {


    return (

        <section className="all-projects">


            {/* PAGE TITLE */}

            <motion.div

                className="all-projects-title"

                initial={{opacity:0, y:40}}

                animate={{opacity:1, y:0}}

                transition={{duration:0.7}}

            >

                <h1>

                    All <span>Projects</span>

                </h1>

            </motion.div>



            {/* PROJECT GRID */}

            <div className="all-projects-grid">


                {

                projects.map((project,index)=>(


                    <motion.article

                        key={project.number}

                        className="all-project-card"


                        initial={{
                            opacity:0,
                            y:50
                        }}


                        animate={{
                            opacity:1,
                            y:0
                        }}


                        transition={{

                            duration:0.6,

                            delay:index * 0.08,

                            ease:[0.16,1,0.3,1]

                        }}

                    >



                        {/* IMAGE */}

                        <div className="project-image-box">


                            <img

                                src={project.image}

                                alt={`${project.title} preview`}

                            />


                            <span className="project-number">

                                {project.number}

                            </span>


                        </div>





                        {/* CONTENT */}

                        <div className="project-content">



                            <p className="project-type">

                                {project.type}

                            </p>




                            <h2>

                                {project.title}

                            </h2>




                            <p className="project-description">

                                {project.description}

                            </p>





                            {/* TECHNOLOGIES */}

                            <div className="project-tech">


                                {

                                project.technologies.map((tech)=>(


                                    <span key={tech}>

                                        {tech}

                                    </span>


                                ))

                                }


                            </div>






                            {/* LINK */}

                            <div className="project-view">


                                <a

                                    href={project.liveLink}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                >

                                    View Project

                                </a>



                                <span className="project-arrow">

                                    ↗

                                </span>



                            </div>




                        </div>



                    </motion.article>



                ))

                }



            </div>



        </section>


    );

}


export default ProjectsPage;