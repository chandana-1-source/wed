import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>send msg to us</h1>
      <form>
        <input placeholder="name"/>
        <input placeholder="email"/>
        <input placeholder="subject"/>
        <textarea placeholder="msg"rows="4"></textarea>
        <button>send msg</button>
      </form>
    </div>
  );
}

export default ContactForm;