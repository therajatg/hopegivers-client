import React from "react";
import { CSSTransition } from "react-transition-group";

export const OurWork = () => {
  const animateInDuration = 500;
  const animateOutDuration = 300;

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Hope Givers Foundation
        </h2>

        <div className="flex flex-col lg:flex-row items-center mb-12">
          <CSSTransition
            in={true}
            appear={true}
            timeout={animateInDuration}
            classNames="fade-left"
          >
            <div className="lg:w-1/2 lg:mr-8">
              <img
                src="https://picsum.photos/200
                "
                alt="Elderly residents"
                className="w-full h-auto mb-6"
              />
              <p className="text-gray-700 text-lg">
                At Hope Givers Foundation, we are dedicated to providing love,
                care, and support to the elderly. Our mission is to create a
                nurturing environment where they can thrive and enjoy their
                golden years. Through our free-of-cost old age homes, we offer a
                range of services including nutritious meals, medical
                assistance, and emotional well-being support. We believe in
                upholding their dignity and honoring their contributions to
                society.
              </p>
            </div>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            timeout={animateInDuration}
            classNames="fade-right"
          >
            <div className="lg:w-1/2 lg:ml-8">
              <img
                src="https://picsum.photos/200
                "
                alt="Blanket distribution"
                className="w-full h-auto mb-6"
              />
              <p className="text-gray-700 text-lg">
                We also reach out to those in need during harsh winters by
                distributing blankets. This initiative aims to provide warmth
                and comfort to vulnerable individuals and families. We believe
                that a simple act of kindness can go a long way in bringing hope
                to those facing adversity. By wrapping them in the warmth of our
                care, we strive to make a positive difference in their lives.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <CSSTransition
            in={true}
            appear={true}
            timeout={animateInDuration}
            classNames="fade-left"
          >
            <div className="lg:w-1/2 lg:mr-8">
              <img
                src="https://picsum.photos/200
                "
                alt="Medical equipment donation"
                className="w-full h-auto mb-6"
              />
              <p className="text-gray-700 text-lg">
                Our commitment to improving lives extends to providing essential
                medical equipment free of cost to those in need. We understand
                the challenges faced by individuals who lack access to proper
                healthcare resources. Through our program, we ensure that they
                receive the necessary medical devices, enabling them to lead
                healthier and more independent lives. We believe that everyone
                deserves the opportunity to thrive, regardless of their
                financial circumstances.
              </p>
            </div>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            timeout={animateInDuration}
            classNames="fade-right"
          >
            <div className="lg:w-1/2 lg:ml-8">
              <p className="text-gray-700 text-lg">
                Hope Givers Foundation is driven by the generosity and support
                of individuals like you. Your contribution, whether through
                donations or volunteering your time, makes a significant impact
                in our ability to bring hope and care to those who need it most.
                Together, we can create a brighter future and make a lasting
                difference in the lives of the elderly and the less fortunate.
                Join us on this meaningful journey and be a part of the Hope
                Givers community.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};
