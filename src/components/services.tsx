import "./services.css";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Food Delivery",
    description:
      "Get freshly prepared meals delivered to your doorstep while still hot.",
  },
  {
    title: "Catering Services",
    description:
      "Perfect for parties, weddings, and events—delicious food in large quantities.",
  },
  {
    title: "Weekly Meal Preps",
    description: "We prepare customized weekly meal plans with delicious and healthy dishes, saving you time and helping you eat better every day.",
  },
  {
    title: "Picnic & Outdoor Services",
    description: "Enjoy fresh, ready-to-serve meals delivered to your picnic or outdoor event, so you can focus on making memories while we handle the food"
  },
  {
    title: "Corporate Lunches",
    description: "Tasty and healthy lunch packages for offices and teams.",
  },
];

function Service() {
  return (
    <>
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
