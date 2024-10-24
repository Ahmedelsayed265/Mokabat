import { Link } from "react-router-dom";
import SectionHeader from "../ui/layout/SectionHeader";

export default function Contact() {
  function highlight(e) {
    e.target.previousElementSibling.classList.add("h");
  }

  function dehighlight(e) {
    if (e.target.value === "") {
      e.target.previousElementSibling.classList.remove("h");
    }
  }

  return (
    <>
      <SectionHeader title={"Contact Us"} />
      <section className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="contact_info">
                <span>get in touch</span>
                <h1>
                  We are always ready to help you and answer your questions
                </h1>
                <div className="blocks">
                  <div className="block">
                    <h6>Call Center</h6>
                    <Link to="tel:+966 54 555 5555">+966 54 555 5555</Link>
                    <Link to="tel:+966 54 555 5555">+966 54 555 5555</Link>
                  </div>
                  <div className="block">
                    <h6>Our Location</h6>
                    <Link
                      to="https://maps.app.goo.gl/gNd6HKnUq1K8Jp1U6"
                      target="_blank"
                    >
                      Al-Amin Abdullah Al-Ali Al-Naeem Street, Al-Malaz, Riyadh
                      12836, Kingdom of Saudi Arabia
                    </Link>
                  </div>
                  <div className="block">
                    <h6>Email</h6>
                    <Link to="mailto:info@mokabat.com">info@mokabat.com</Link>
                  </div>
                  <div className="block">
                    <h6>Social network</h6>
                    <div className="socials">
                      <Link>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link>
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link>
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link>
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link>
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="contact_form">
                <form autoComplete="off">
                  <div className="inputfield">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    />
                    <span className="highlight"></span>
                  </div>

                  <div className="inputfield">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    />
                    <span className="highlight"></span>
                  </div>

                  <div className="inputfield">
                    <label htmlFor="phone">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    />
                    <span className="highlight"></span>
                  </div>

                  <div className="inputfield">
                    <label htmlFor="message" className="message-label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      onFocus={(e) => highlight(e)}
                      onBlur={(e) => dehighlight(e)}
                    ></textarea>
                    <span className="highlight"></span>
                  </div>

                  <button type="submit">
                    <span>
                      <i className="fa-regular fa-angle-right"></i>
                    </span>{" "}
                    Send Message{" "}
                    <span>
                      <i className="fa-regular fa-angle-right"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_section">
        <div className="container">
          <div className="col-12 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46051.26341000033!2d46.76029332397902!3d24.64747086994118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f043b45575437%3A0xa2bebdcec14359bd!2z2YXZhtiq2LLZhyDYp9mE2YXZhNmDINi52KjYr9in2YTZhNmH!5e0!3m2!1sar!2seg!4v1729602376391!5m2!1sar!2seg"
              allowfullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
