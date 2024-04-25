import Input from "./Input"
import SubmitButton from "./SubmitButton"


const Hero = () => {
  return (
    <div className="Hero">
      <p className="heroTxt">Generate more leads with a <br /> professional landing page
      </p>
      <div className="inputandbutton">
        <Input/> 
        <SubmitButton/>
      </div>
    </div>
  )
}

export default Hero