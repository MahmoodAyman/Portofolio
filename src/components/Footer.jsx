import { ButtonPrimary } from "./Button";
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/MahmoodAyman",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahm0udayman/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/theMahmoodAyman",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/themahmoodayman/",
  },
];
function Footer() {
  return (
    <footer className="section">
      <div></div>
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-2-[12ch] reveal-up">
              Let&apos;s Keep in Touch!
            </h2>
            <ButtonPrimary
              href="mailto:mahmoudayman1542@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
            <div>
              <p className="mb-2 reveal-up">Sitmaps</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="#home" className="logo reveal-up">
            <img
              src="/images/MALogo.png"
              width={40}
              height={40}
              alt="Mahmoud's Logo"
            />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">Mahmoud Ayman</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
