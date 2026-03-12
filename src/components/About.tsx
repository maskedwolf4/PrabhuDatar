import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Engineer with 5+ years of experience designing and building
          scalable, secure, and high-performance data platforms on AWS for
          fintech and enterprise analytics. Proven expertise in distributed
          data processing (Spark, EMR, Databricks), cloud data warehousing
          (Amazon Redshift), and end-to-end ETL orchestration (AWS Glue,
          Airflow) handling millions of records daily. Strong background in
          fraud analytics, audit-ready logging, and PII-compliant data
          pipelines. Adept at optimizing large-scale data systems, achieving
          40–60% performance improvements through Spark and Redshift tuning.
        </p>
      </div>
    </div>
  );
};

export default About;
