import github from "./assets/Github.svg";
import email from "./assets/Email.svg";
import useObserver from "./useObserver";

const contacts = [
  {
    image: github,
    href: "https://github.com/SamShubitz",
    text: "GitHub",
    stringUrl: "https://github.com/SamShubitz",
  },
  {
    image: email,
    href: "mailto:samshubitz@gmail.com",
    text: "Email",
    stringUrl: "samshubitz@gmail.com",
  },
];

const Contact = () => {
  const [ref, isVisible] = useObserver();

  const contactList = contacts.map((contact, index) => {
    return (
      <li key={index}>
        <div className="contact-link-section">
          <a className="contact-link" href={contact.href}>
            <img
              className="contact-icon"
              src={contact.image}
              alt={contact.text}
            />
            <p>{contact.text}</p>
          </a>
          <p>{contact.stringUrl}</p>
        </div>
      </li>
    );
  });

  const classname = isVisible ? "visible" : "hidden";

  return (
    <div ref={ref} className={`contact-section ${classname}`} id="contact">
      <h1>Contact me</h1>
      <ul className="contact-list">{contactList}</ul>
      <p></p>
    </div>
  );
};

export default Contact;
