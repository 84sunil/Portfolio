import React from "react";
import servicesData from "../api/data.json";
const Services = () => {
  return (
    <div>
      {servicesData.services.map((category) => (
        <div key={category.category} style={{ marginBottom: "2rem" }}>
          <h2>{category.category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
            {category.services.map((service, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "1rem",
                  maxWidth: "300px",
                }}
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                )}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                {service.technologies && (
                  <div>
                    <strong>Technologies:</strong>
                    <ul>
                      {service.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.tools && (
                  <div>
                    <strong>Tools:</strong>
                    <ul>
                      {service.tools.map((tool, idx) => (
                        <li key={idx}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.platforms && (
                  <div>
                    <strong>Platforms:</strong>
                    <ul>
                      {service.platforms.map((platform, idx) => (
                        <li key={idx}>{platform}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.formats && (
                  <div>
                    <strong>Formats:</strong>
                    <ul>
                      {service.formats.map((format, idx) => (
                        <li key={idx}>{format}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
