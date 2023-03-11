import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-3 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button onClick={() => setIsVisible()}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSeciton, setVisibleSeciton] = useState("");

  return (
    <div>
      <h1 className="font-bold text-4xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique sollicitudin sem, vel accumsan mi sodales acculor sit amet, consectetur adipiscing elit. Pellentesque tristique sollicitudin sem, vel accumsan mi sodales acculor sit amet, consectetur adipiscing elit. Pellentesque tristique sollicitudin sem, vel accumsan mi sodales acculor sit amet, consectetur adipiscing elit. Pellentesque tristique sollicitudin sem, vel accumsan mi sodales accumsan. Aliquam mollis vitae leo sed venenatis. Nullam at ex quis magna sagittis vestibulum. In lacus nunc, maximus quis risus pellentesque, congue commodo augue. Praesent lobortis ullamcorper magna sed congue. Vestibulum et erat eu dui pulvinar sodales nec vel metus. Vestibulum elit dolor, cursus imperdiet dignissim quis, molestie nec lorem. Duis id efficitur lacus, vitae semper risus. Integer ullamcorper facilisis turpis, pharetra faucibus erat efficitur ac. Maecenas aliquet id nisi ac maximus. Etiam molestie velit eu posuere tempor. "
        }
        isVisible={visibleSeciton === "about"}
        setIsVisible={() =>
          setVisibleSeciton(visibleSeciton === "about" ? "!about" : "about")
        }
        key="about"
      />
      <Section
        title={"Team Instamart"}
        description={
          "Proin non tempor eros. Pellentesque vel magna in risus luctus pharetra quis eget nibh. Phasellus pharetra felis nec dui interdum, ut lobortis erat tlentesque vel magna in risus luctus pharetra quis eget nibh. Phasellus pharetra felis nec dui interdum, ut lobortis erat tristique. Pellentesque convallis posuere sapius luctus pharetra quis eget nibh. Phasellus pharetra felis nec dui interdum, ut lobortis erat tlentesque vel magna in risus luctus pharetra quis eget nibh. Phasellus pharetra felis nec dui interdum, ut lobortis erat tristique. Pellentesque convallis posuere sapien, non consequat lacus fringilla ut. Curabitur eros tellus, vulputate et nibh vitae, suscipit molestie nibh. Cras non eleifend metus. Nunc nec elit ac sem lobortis tincidunt. Curabitur et lacus ut lorem maximus porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed dignissim ligula. In hac habitasse platea dictumst."
        }
        isVisible={visibleSeciton === "team"}
        setIsVisible={() =>
          setVisibleSeciton(visibleSeciton === "team" ? "!team" : "team")
        }
        key="team"
      />
      <Section
        title={"Career"}
        description={
          "Proin non tempor eros. Pellentesque vel magna in risus luctus pharetra quis eget nibh. Phasellus pharetra felis nec dui interdum, ut lobortis erat tristique. Pellentesque convallis posuere sapien, non consequat lacus fringilla ut. Curabitur eros tellus, vulputate et nibh vitae, suscipit molestie nibh. Cras non eleifend metus. Nunc nec elit ac sem lobortis tincidunt. Curabitur et lacus ut lorem maximus porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed dignissim ligula. In hac habitasse platea dictumst. Cras tellus magna, cursus id urna semper, feugiat pharetra lacus. Pellentesque sit amet erat in massa pharetra lobortis. Nam ante odio, dictum sed lobortis id, dapibus ac felis. Sed et metus varius, malesuada nulla ut, faucibus neque. Mauris pharetra diam in eros iaculis, non posuere leo molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eget facilisis sapien. Aliquam ultrices, nibh id euismod varius, dui elit blandit libero, at elementum velit risus id neque. Praesent et sem sagittis, ultricies quam nec, blandit nunc. Quisque ut tincidunt erat, vestibulum mattis ex."
        }
        isVisible={visibleSeciton === "career"}
        setIsVisible={() =>
          setVisibleSeciton(visibleSeciton === "career" ? "!career" : "career")
        }
        key="team"
      />
    </div>
  );
};

export default Instamart;
