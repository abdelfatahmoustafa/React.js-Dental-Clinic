import "./MyWork.css";
import myWork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className="myWork" id="works">
      <div className="myWork-title">
        <h2>My Latest Work</h2>
      </div>
      <div className="myWork-container">
        {myWork_data.map((work, index) => {
          return (
            <a
              href={work.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img src={work.w_img} alt="work-image" />
            </a>
          );
        })}
      </div>
      <div className="myWork-showMore">
        <a href="#" target="_blank" className="showMoreLink">
          <p>Show More</p>
        </a>
        <img src={arrow_icon} alt="arrow-icon" />
      </div>
    </div>
  );
};

export default MyWork;
