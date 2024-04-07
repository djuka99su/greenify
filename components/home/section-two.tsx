import React from "react";
import { TbTool, TbRecycle, TbCertificate } from "react-icons/tb";

const SectionTwo = () => {

  return (
    <div className="min-h-4/5 my-10">
      <h2 className="text-center p-4 text-3xl sm:text-4xl mb-10 font-bold">
        Why choose colored and prepared moss?
      </h2>
      <div className="flex flex-wrap justify-center gap-16 sm:gap-40 items-center min-h-96">
        <div>
          <TbTool className="w-28 h-28 m-auto" />
          <h3 className="text-center text-xl my-2 font-bold">
            Maintenance free
          </h3>
          <p className="w-60 text-center">
            The products require neither sunlight nor water. The moss will not
            grow or change shape, but can become dry at humidity lower than 35%.
            It becomes soft on its own when the humidity rises.
          </p>
        </div>
        <div>
          <TbRecycle className="w-28 h-28 m-auto text-emerald-500" />
          <h3 className="text-center text-xl my-2 font-bold">Sustainable</h3>
          <p className="w-60 text-center">
            Handpicked and refined in Norway with respect to nature and the
            environment. We only use 100% natural and short-traveled materials
            in our products.
          </p>
        </div>
        <div>
          <TbCertificate className="w-28 h-28 m-auto" />
          <h3 className="text-center text-xl my-2 font-bold">Certified</h3>
          <p className="w-60 text-center">
            Moss is certified by SINTEF as flameproof according to ISO
            11925-2:2010 and sound absorption. The moss is also antistatic. The
            production is also certified with ISO 9001 and ISO 14001.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
