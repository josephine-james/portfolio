import "./Home.css";
import Box from "@material-ui/core/Box";

const defaultProps = {
  backgroundColor: "black",
  opacity: "0.9",
  borderColor: "white",
  m: 15,
  border: 2,
  style: { width: "50%", height: "12em" },
};

const Home = () => {
  return (
    <div id="/home">
      <video src="./videos/video.mp4" autoPlay muted loop />
      <Box className="biggerdabba" display="flex" justifyContent="center">
        <Box className="dabba" borderRadius={16} {...defaultProps}>
          <center>
            <div className="home_title"> Josephine James</div>
          </center>
          <hr
            style={
              ({ width: "10%" },
              { height: "2em" },
              { backgroundColor: "white" })
            }
          />
          <div className="home_subtitle">
            Wanna-be Full Stack Developer | Currently Student
          </div>
          <br />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
