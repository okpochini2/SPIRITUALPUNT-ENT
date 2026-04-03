import img from "../assets/photo-3.png";
export default function Contact() {
  return (
  <div className="page">
  <h1>Contact Us</h1>
  <img src={img} alt="contact" />

  <p>Email:okpochinistanley21@gmail.com</p>
  <p> whatsapp:+2347058162983, +2347039433193</p>
  <p><a href="https://t.me/spiritualpuntenterprenuership">TELEGRAM CHANNEL</a></p>

  <form className="contact-form">
  <input type="text" placeholder="Your Name" required/>
  <input type="text" placeholder="Your Email" required />
  <textarea placeholder="Your Message" rows="5"></textarea>

  <button type="summit">Send Message</button>
  </form>
  </div>
  )
}