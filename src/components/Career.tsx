import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer (Intern)</h4>
                <h5>Quantiphi Analytics</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Built Spark ETL pipelines on EMR to process 2M+ daily patient
              records from EHR systems. Implemented Airflow orchestration for
              incremental loads into Redshift, reducing data latency from 24hrs
              to 2hrs for clinical reporting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Quantiphi Analytics</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed AWS Redshift data warehouse for enterprise reporting.
              Orchestrated incremental data extraction from SQL Server to S3
              using DMS. Optimized Spark transformations achieving 35–45%
              faster processing and reduced dashboard refresh time by 60%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer II</h4>
                <h5>Angel One Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed automated log parsing for SEBI compliance and fraud
              analytics. Built real-time Kafka → Delta Lake streaming pipelines.
              Implemented PII-secure ETL with AWS Glue & Airflow, reducing
              manual intervention by 80%. Optimized Redshift performance and
              AWS costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
