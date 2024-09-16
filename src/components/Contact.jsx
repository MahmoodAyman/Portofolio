import SocialLinks from "./SocialLinks";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch ">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col ">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Let's Connect and Create Something Amazing!
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-2-[50ch] lg:max-w-[30ch] ">
            Got a project idea or a question? Reach out—I’d love to connect and
            collaborate!
          </p>
            <SocialLinks />
        </div>
        <form action="https://getform.io/f/apjmkvra" method="POST" className="xl:pl-10 2xl:pl-20 ">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                placeholder="Mahmoud Ayman.."
                className="text-field reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="mahmoud@example.com"
                className="text-field reveal-up"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">Message</label>
            <textarea 
            name="message"
             id="message"
             placeholder="hello!"
             required
             className="text-field resize-y min-h-32 max-h-80 reveal-up"
             >

             </textarea>
          </div>
          <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
