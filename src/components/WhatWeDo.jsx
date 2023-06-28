import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";

export const WhatWeDo = () => {
  return (
    <div className="mx-5 lg:mx-40">
      <div className="my-20 lg:flex lg:gap-x-20">
        <img src={img1} alt="" className="max-h-80 object-cover mb-5 lg:mb-0" />
        <div>
          <h1 className="text-xl font-bold">Old Age Homes</h1>
          <p>
            Established with the vision of creating a better future for the
            elderly, Hope Givers Foundation operates free of cost old age homes
            where we provide a safe and nurturing environment for our cherished
            seniors. We understand the importance of companionship, dignity, and
            quality care in their lives. Our dedicated team of professionals is
            committed to ensuring that our residents receive the highest
            standard of assistance, including nutritious meals, medical
            attention, and emotional support. By offering a warm and welcoming
            home, we strive to bring happiness and comfort to the lives of those
            who have dedicated their own years to building our communities.
          </p>
        </div>
      </div>
      <div className="mb-20 lg:flex lg:flex-row-reverse lg:gap-x-20">
        <img
          src={img2}
          alt=""
          className="max-h-80 object-cover w-100 mb-5 lg:mb-0"
        />
        <div>
          <h1 className="text-xl font-bold">Free of Cost Medical Equipments</h1>
          <p>
            Recognizing the importance of access to proper medical equipment, we
            have established a program to provide essential medical devices to
            those who cannot afford them. From mobility aids to respiratory
            support equipment and more, we strive to bridge the gap between
            necessity and accessibility. By removing the financial burden
            associated with medical equipment, we enable individuals to focus on
            their recovery, regain their independence, and improve their overall
            quality of life.
          </p>
        </div>
      </div>
      <div className="mb-20 lg:flex lg:gap-x-20">
        <img
          src={img3}
          alt=""
          className="max-h-80 object-cover w-100 mb-5 lg:mb-0"
        />
        <div>
          <h1 className="text-xl font-bold">Blanket Distribution in Winter</h1>
          <p>
            In addition to our old age homes, Hope Givers Foundation runs
            various outreach programs to address the urgent needs of the
            underprivileged. During harsh winters, we distribute blankets to
            vulnerable individuals and families, providing them with a shield
            against the biting cold. Through this initiative, we aim to bring
            warmth and relief to those who lack the means to protect themselves
            from the harsh elements. It is our belief that a blanket can provide
            more than just physical warmth; it also symbolizes compassion and
            the assurance that someone cares.
          </p>
        </div>
      </div>
      <p className="text-l font-bold mb-20">
        Hope Givers Foundation is fueled by the generosity and support of
        compassionate individuals like you. Together, we can make a difference
        in the lives of those who need it most. We invite you to join us in our
        mission and become a beacon of hope for the elderly, the vulnerable, and
        the less fortunate. Your donations and contributions are tax-exempted,
        ensuring that every rupee goes directly towards supporting our
        initiatives and creating a better tomorrow.
      </p>
    </div>
  );
};
