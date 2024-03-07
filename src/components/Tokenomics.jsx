import React from "react";
import TokenomicsImage from "../assets/tokenomics.png";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="m-5 bg-white p-5 rounded-md min-w-[400px] hidden md:block">
      <h2 className="text-2xl font-semibold py-3">Tokenomics</h2>

      <h3 className="text-xl font-semibold py-2">Initial Distribution</h3>

      <img src={TokenomicsImage} alt="tokenomics" className="w-[400px] py-2" />

      <p>
        Occaecat sit velit exercitation ex dolor exercitation nisi dolore est ad
        tempor id laboris. Nisi voluptate fugiat culpa consectetur velit
        incididunt cillum labore duis et duis commodo cupidatat. Mollit eu
        ullamco Lorem deserunt ad duis eu duis aliquip laboris eu exercitation
        Reprehenderit eu consequat quis duis nostrud nulla magna amet proident
        duis laboris. Duis amet sint consequat veniam in. Consectetur
        consectetur ut consequat non fugiat cupidatat. In consequat est esse
        fugiat adipisicing qui do magna esse aliqua nulla qui ex mollit.
        Reprehenderit do Lorem magna amet laboris laborum adipisicing qui
        cupidatat occaecat minim pariatur duis veniam.
      </p>
    </div>
  );
};

export default Tokenomics;
