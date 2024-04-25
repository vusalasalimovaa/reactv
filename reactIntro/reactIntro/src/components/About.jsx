import code from "../assets/code.jpg"
const About = () => {
  return (
    <div className="aboutgrid">
      <div className="aboutitems">
        <div className="txtbox">
          <h3>Fully Responsive Design</h3>
          <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>

        <div className="imgbox">
          <img src={code} alt="" />
        </div>

        <div className="txtbox">
        <h3>Easy to Use & Customize</h3>
          <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
      </div>

      <div className="aboutitems">
        <div className="txtbox">
          <h3>Fully Responsive Design</h3>
          <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>

        <div className="imgbox">
          <img src={code} alt="" />
        </div>

        <div className="txtbox">
        <h3>Easy to Use & Customize</h3>
          <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
      </div>
      
    </div>
  )
}

export default About