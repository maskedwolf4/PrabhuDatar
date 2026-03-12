import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DATA ENGINEERING</h3>
              <h4>Scalable Data Pipelines</h4>
              <p>
                Building robust ETL/ELT pipelines processing millions of records
                daily. From batch to real-time streaming, I architect data
                systems that power enterprise analytics and decision-making.
              </p>

              <div className="what-content-flex">
                <div className="what-tags">Hadoop</div>
                <div className="what-tags">PySpark</div>
                <div className="what-tags">Scala</div>
                <div className="what-tags">Spark</div>
                <div className="what-tags">Airflow</div>
                <div className="what-tags">Kafka</div>
                <div className="what-tags">Databricks</div>
                <div className="what-tags">Hive</div>
                <div className="what-tags">Trino</div>
                <div className="what-tags">MapReduce</div>
                <div className="what-tags">Delta Lake</div>
                <div className="what-tags">Iceberg</div>
                <div className="what-tags">Parquet</div>
                <div className="what-tags">ORC</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CLOUD & DATA PLATFORMS</h3>
              <h4>AWS Data Architecture</h4>
              <p>
                Designing and managing cloud-native data platforms on AWS.
                From data warehousing with Redshift to serverless analytics
                with Athena, I build secure, cost-optimized data infrastructure.
              </p>

              <div className="what-content-flex">
                <div className="what-tags">S3</div>
                <div className="what-tags">EMR</div>
                <div className="what-tags">Redshift</div>
                <div className="what-tags">Glue</div>
                <div className="what-tags">Athena</div>
                <div className="what-tags">Lambda</div>
                <div className="what-tags">CloudWatch</div>
                <div className="what-tags">DMS</div>
                <div className="what-tags">Step Functions</div>
                <div className="what-tags">Snowflake</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Power BI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
