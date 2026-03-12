import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Real-time Credit Card Fraud Detection",
    category: "End-to-End ML Engineering",
    tools: "Kafka, Airflow, scikit-learn, FastAPI, MLflow, Docker",
    description:
      "Built an end-to-end ML pipeline for real-time credit card fraud detection. Ingested streaming transaction data via Kafka, orchestrated feature engineering and model training workflows with Airflow, and trained fraud classification models using scikit-learn. Deployed the model as a low-latency REST API with FastAPI, with experiment tracking and model versioning managed through MLflow. The system processes transactions in real time, flagging fraudulent activity with high precision and recall.",
  },
  {
    title: "SEBI Compliance Framework",
    category: "Fraud Analytics & Audit",
    tools: "PySpark, Redshift, Airflow, AWS Glue",
    description:
      "Designed and deployed an automated log parsing framework to handle SEBI complaints, police investigations, and stakeholder requests related to fraudulent activities on a stock trading platform. The system processes user activity and transaction logs, enabling detailed audit trails for compliance and legal use cases.",
  },
  {
    title: "Real-time Streaming Pipeline",
    category: "Data Streaming",
    tools: "Kafka, Delta Lake, Spark Streaming, S3",
    description:
      "Built real-time Kafka → Delta Lake streaming pipelines with checkpointing, schema enforcement, and retention policies to ensure reliable, exactly-once data processing. Optimized AWS costs through S3 lifecycle automation and asset cleanup.",
  },
  {
    title: "Enterprise Data Warehouse",
    category: "Cloud Data Platform",
    tools: "AWS Redshift, DMS, S3, SQL Server",
    description:
      "Designed and implemented an AWS Redshift data warehouse for enterprise reporting and analytics. Orchestrated incremental data extraction from SQL Server to S3 using AWS DMS with date-wise partitioning, handling millions of records daily. Reduced dashboard refresh time by 60%.",
  },
  {
    title: "Clinical Data ETL Platform",
    category: "Healthcare Analytics",
    tools: "Spark, EMR, Airflow, Redshift",
    description:
      "Built Spark ETL pipelines on EMR to process 2M+ daily patient records from EHR systems. Implemented Airflow orchestration for incremental loads into Redshift, reducing data latency from 24hrs to 2hrs for clinical reporting. Developed analytics views with optimized sort/distribution keys achieving 40% query speedup.",
  },
  {
    title: "OTP & Marketing Automation",
    category: "Data-Driven Marketing",
    tools: "AWS Glue, Redshift, Infobip API, Python",
    description:
      "Implemented an OTP log parsing framework to extract and structure data from OTP-related logs, enabling the marketing team to deliver targeted campaigns via WhatsApp and SMS using the Infobip platform through automated API interactions.",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
