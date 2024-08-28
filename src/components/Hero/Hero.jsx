import React from 'react' 
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';

function Hero() {
  return(
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            
            {/*left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Discover<br/> most suitable <br/>property</h1>
                </div>

                <div className="flexColStart hero-description">
                    <span className="secondaryText">Find a variety of properties that suit you easily</span>
                    <span className="secondaryText">Forget all difficulties in finding a residence for yourself</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text"/>
                    <button className="button">Search</button>



                </div>


                <div className="flexCenter stats">
                    <div className="flexColstart stat">
                        <span>
                            <CountUp start={8800} end={10000} duration={5}/>
                            <span>+</span>
                        </span>

                        <br/>
                        <span className="secondaryText">
                            Premium product
                        </span>
                    </div>

                    <div className="flexColstart stat">
                        <span>
                            <CountUp start={865} end={2300} duration={5}/>
                            <span>+</span>
                        </span>
                        

                        <br/>
                        <span className="secondaryText">
                            Happy Customers
                        </span>
                    </div>

                    <div className="flexColstart stat">
                        <span>
                            <CountUp end={35}/>
                            <span>+</span>
                        </span>
                        

                        <br/>
                        <span className="secondaryText">
                            Award winnings
                        </span>
                    </div>

                    
                </div>


                




            </div>

                    
                
                    
            

            {/*right side */}

            <div className="hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="apartments" />
                </div>
            </div>



            

        </div>
    </section>


  );
}


export default Hero;