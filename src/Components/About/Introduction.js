import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/MUNNA.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Munna Kumar Pandit</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Siwan, Bihar (India)
                </span>
                . I have completed my graduation in B.Tech (CSE)
                from{" "}
                <span className="different">
                IES College of Technology, Bhopal (MP)
                </span>
                {/* . Then I joined full stack development course by{" "}
                <span className="different">Naresh I Technologies, Hyderabad</span> a military type
                coding institute. */}
              </h4>
              <h4>Soft Skills :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning New Things{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solving{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Time Management{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Attitude Work Ethics{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
