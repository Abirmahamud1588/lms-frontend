import React from "react";

const Faq = () => {
  return (
    <div id="faq" className="w-full container mx-auto my-6 md:my-16 ">
      <h1 className="text-2xl md:text-5xl text-center font-bold mb-10">
        Frequntly Asked Quesions ?
      </h1>

      <div className="w-full md:w-2/4 mx-auto ">
        <div className="collapse collapse-plus bg-[#F2F8FE] mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How use this Leave Management System?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos fuga amet praesentium porro molestias, magnam, vel
              asperiores vero accusamus in nisi veritatis dolores eaque
              corrupti? Mollitia magni veniam sint.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#F2F8FE] mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What are the benefits of this app ?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quae voluptate at similique suscipit, dolor explicabo fugiat optio
              aliquam tempora ipsam perspiciatis, accusamus quo inventore ipsum
              cupiditate, corporis odio praesentium!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#F2F8FE] mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Where Can I Find This App ?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              facere tempora voluptatem beatae culpa esse est ut incidunt
              consequuntur, doloremque totam omnis neque perferendis cupiditate
              iusto laborum vitae sequi! In.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
