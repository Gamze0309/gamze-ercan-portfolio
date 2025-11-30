import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/envelope.json";
import CustomButton from "./CustomButton";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (lottieRef.current) {
            lottieRef.current.stop();
            lottieRef.current.play();
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="min-h-screen md:h-screen w-full md:snap-start bg-yellow flex flex-col items-center relative py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
            className="w-32 h-32 lg:w-48 lg:h-48"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 text-center font-primary-family">
          Send me a message!
        </h2>
        <p className="text-dark/80 text-sm md:text-base text-center mb-10 max-w-2xl mx-auto font-primary-family">
          I’d love to hear from you. Whether it’s a project idea, collaboration,
          or just a hello — feel free to reach out.
        </p>
        <div className="mx-auto md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-light/80 rounded-2xl p-6 shadow-sm border border-orange/30">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3 font-primary-family">
              Say hello from social media
            </h3>
            <p className="text-dark/80 text-sm md:text-base leading-relaxed mt-2 font-content-family">
              LinkedIn:{" "}
              <a href="#" className="text-orange font-bold">
                linkedin.com/in/gamze
              </a>
            </p>
            <p className="text-dark/80 text-sm md:text-base leading-relaxed mt-2 font-content-family">
              GitHub:{" "}
              <a href="#" className="text-orange font-bold">
                github.com/Gamze0309
              </a>
            </p>
          </div>
          <div className="bg-light/80 rounded-2xl p-6 shadow-sm border border-orange/30">
            <h3 className="text-lg md:text-xl font-bold text-dark mb-3 font-primary-family">
              Send me an email
            </h3>
            <p className="text-dark/80 text-sm md:text-base leading-relaxed font-content-family mb-4">
              Prefer quick contact? Drop me a line and I’ll reply soon.
            </p>
            <CustomButton text="Send Email" link="mailto:gamze@example.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
