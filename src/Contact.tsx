import github from "./assets/Github.svg";
import email from "./assets/Email.svg";

const Contact = () => {
  const contacts = [
    { image: github, href: "https://github.com/SamShubitz", text: "GitHub" },
    { image: email, href: "mailto:samshubitz@gmail.com", text: "Email" },
  ];

  const contactList = contacts.map((contact, index) => {
    return (
      <li key={index}>
        <div>
          <a className="contact-link" href={contact.href}>
            <img
              className="contact-icon"
              src={contact.image}
              alt={contact.text}
            />
            <p>{contact.text}</p>
          </a>
        </div>
      </li>
    );
  });

  return (
    <div className="contact-section" id="contact">
      <h1>Contact me</h1>
      <ul className="contact-list">{contactList}</ul>
    </div>
  );
};

export default Contact;
