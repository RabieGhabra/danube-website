/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

type FooterGroup = { title: string; links: string[] };
type PaymentMethod = { alt: string; src: string; imageClass: string };

const footerGroups: FooterGroup[] = [
  { title: "About Danube", links: ["Company Information", "Investor Relation", "Corporate Sales", "Careers"] },
  { title: "My Account", links: ["Personal Information", "Orders", "My Points", "Delivery Address", "Wish List"] },
  {
    title: "Enjoy Shopping with Danube",
    links: ["Tamara Installment", "Return & Exchange Policy", "Delivery Terms & Conditions", "Secured Payment", "FAQs", "Blog", "Site Map"],
  },
];

const paymentMethods: PaymentMethod[] = [
  { alt: "Pay pal", src: "/assets/icons/Payment-Icons.png", imageClass: "h-[54.85%] w-[31.75%]" },
  { alt: "Apple pay", src: "/assets/icons/Payment-Icons-(1).png", imageClass: "h-[43.41%] w-[71.62%]" },
  { alt: "Mastercard", src: "/assets/icons/Payment-Icons-(2).png", imageClass: "h-[55.83%] w-[65.76%]" },
  { alt: "Discover", src: "/assets/icons/Payment-Icons-(3).png", imageClass: "h-[58.34%] w-[88.24%]" },
  { alt: "Visa logo", src: "/assets/icons/Payment-Icons-(4).png", imageClass: "h-[32.58%] w-[70%]" },
  { alt: "Webmoney", src: "/assets/icons/Payment-Icons-(5).png", imageClass: "h-[62.93%] w-[70.89%]" },
  { alt: "Affirm", src: "/assets/icons/Payment-Icons-(6).png", imageClass: "h-[43.23%] w-[76.47%]" },
  { alt: "Paysafe", src: "/assets/icons/Payment-Icons-(7).png", imageClass: "h-[45.2%] w-[76.47%]" },
];

const SocialIcon = ({ src, label }: { src: string; label: string }) => (
  <a href="#" onClick={(e) => e.preventDefault()} aria-label={label}>
    <img className="h-6 w-6" alt={label} src={src} />
  </a>
);

const ContactRow = ({ icon, alt, children }: { icon: string; alt: string; children: React.ReactNode }) => (
  <div className="mt-5 flex items-start justify-center gap-4 min-[640px]:justify-start">
    <img className="mt-0.5 h-6 w-6 shrink-0" alt={alt} src={icon} />
    {children}
  </div>
);

export const Footer = () => (
  <footer className="w-full bg-[#000000] text-white">
    <Container className="pt-18.25">
      <div className="grid grid-cols-1 justify-items-center gap-10 min-[640px]:grid-cols-2 min-[640px]:justify-items-stretch min-[640px]:gap-x-8 min-[640px]:gap-y-12 min-[920px]:grid-cols-3 min-[920px]:gap-x-10 min-[1200px]:grid-cols-4 min-[1200px]:gap-x-8 min-[1420px]:grid-cols-[minmax(280px,382px)_164px_158px_286px_154px] min-[1420px]:gap-0 min-[1420px]:justify-between">

        {/* Contact */}
        <section
          aria-label="Danube contact information"
          className="flex min-w-0 flex-col items-center text-center min-[640px]:items-start min-[640px]:text-left"
        >
          <img className="h-32.5 w-40.25 object-none" alt="Colors primary" src="/assets/images/Logo-(2).png" />

          <address className="mt-2 not-italic">
            <ContactRow icon="/assets/icons/home.png" alt="Home outline">
              <p className="max-w-84 text-[16px] font-normal leading-6.5">
                8856 Al-Madinah Al-Munawarah Rd, An Naim District, Jeddah 23526, Saudi Arabia
              </p>
            </ContactRow>

            <ContactRow icon="/assets/icons/phone.png" alt="Phone outline">
              <p className="text-[16px] font-normal leading-6.5">
                (966) 12 658 0602, (966) 78910-456
              </p>
            </ContactRow>

            <ContactRow icon="/assets/icons/email.png" alt="Email outline">
              <a
                href="mailto:support@danube.sa"
                className="break-all text-[16px] font-normal leading-6.5 text-white"
              >
                support@danube.sa
              </a>
            </ContactRow>
          </address>

          <div className="mt-5 flex items-center justify-center gap-5 min-[640px]:justify-start">
            <SocialIcon src="/assets/icons/facebook.png" label="Facebook" />
            <SocialIcon src="/assets/icons/twitter.png" label="Twitter" />
            <SocialIcon src="/assets/icons/google.png" label="Google" />
            <SocialIcon src="/assets/icons/linkdin.png" label="Linkedin" />
          </div>
        </section>

        {/* Link Groups */}
        {footerGroups.map((group) => (
          <nav
            key={group.title}
            aria-label={group.title}
            className="min-w-0 text-center min-[640px]:text-left"
          >
            <h2 className="text-lg font-semibold leading-6 tracking-[0.36px] text-[#94f974]">
              {group.title}
            </h2>

            <ul className="mt-5 flex flex-col items-center gap-4 min-[640px]:items-start">
              {group.links.map((link) => (
                <li key={link}>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto p-0 text-center text-[16px] font-normal leading-6.5 text-white min-[640px]:text-left"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Shop on the Go */}
        <section
          aria-labelledby="shop-on-go-heading"
          className="min-w-0 text-center min-[640px]:text-left"
        >
          <h2 id="shop-on-go-heading" className="text-lg font-semibold leading-6 text-[#94f974]">
            Shop on the Go
          </h2>

          <p className="mt-5 text-[16px] font-normal leading-6.5">Download App</p>

          <div className="mt-4 flex items-end justify-center gap-2 min-[640px]:justify-start">
            <img
              className="h-23 w-23 shrink-0 object-cover"
              alt="Qr code"
              src="/assets/images/qr-code.png"
            />

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12.41px] bg-[#97E080]">
              <img
                src="/assets/images/Group-2.png"
                alt="App Icon"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>

          <div className="mt-4.5 flex flex-col items-center gap-2 min-[640px]:items-start">
            <Button type="button" variant="ghost" className="h-auto w-fit p-0">
              <img className="h-11.75 w-37.75 object-contain" alt="App store" src="/assets/images/pngitem-1144050-3.png" />
            </Button>

            <Button type="button" variant="ghost" className="h-auto w-fit p-0">
              <img className="h-11.75 w-37.5 object-contain" alt="Google play" src="/assets/images/toppng-2.png" />
            </Button>
          </div>
        </section>
      </div>

      {/* Divider */}
      <img className="mt-9.75 h-px w-full object-cover" alt="Line" src="/assets/icons/line.png" />

      {/* Bottom */}
      <div className="flex flex-col gap-5 py-5 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
        <p className="text-[12px] font-normal leading-6.5">
          Copyright © 2022 Danube Ltd. All Rights Reserved.
        </p>

        <div className="flex flex-wrap items-start gap-2.25" aria-label="Accepted payment methods">
          {paymentMethods.map((method) => (
            <div
              key={method.alt}
              className="flex h-6 w-8.5 shrink-0 items-center justify-center rounded border border-[#f8f6f5] bg-white"
            >
              <img className={method.imageClass} alt={method.alt} src={method.src} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);