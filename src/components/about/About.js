import "./About.css";
import Box from "@material-ui/core/Box";
const defaultProps = {
  style: { width: "50%", height: "12em" },
};
const About = () => {
  return (
    <div id="/about">
      <br />
      <Box className="about_box" display="flex" justifyContent="center">
        <img
          className="profile_pic"
          src="/images/smallprofile.jpeg"
          alt="profilepicture"
        />

        <Box className="info_box" {...defaultProps}>
          <h6 classname="info">
            I'm Josephine James, a first year B. teach student at Federal
            Institute of Science and Technology, Angamaly, Kerala. Eager to
            explore and learn,
            <br /> I am currently discovering new fields in Computer Science
          </h6>
        </Box>
      </Box>
    </div>
  );
};

export default About;
