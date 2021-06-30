import "./Home.css"

const Home = () => {
    return (
      <>
      <div id="slider">
        <div className="container-grid">     
        <div className="item1">
                 <h1>About the image</h1>
                 <p>Time 20:30pm and sunday</p>
              </div>
              <div className="item2">
                <h1>About the image</h1>
                <p>Time 20:30pm and sunday</p>              
              </div>
              <div className="item3">
                <h1>About the image</h1>
                <p>Time 20:30pm and sunday</p> 
              </div>             
        </div>
        </div>
        <h1 className="latest-h1">The Latest</h1>
        <hr className="latest-hr" />        
        <div className="latest">
            <div className="latest-card">
                <img src="./image/image1.jpg" alt="image2" width="300px" height="150px" />
                <div className="info-card">
                    <h1>Joshua Tree Overnight Adventure </h1>
                    <p>this picture is from delhi it is a tradition place it is beautiful place</p>
                    <small><span style={{color: "black",fontWeight:"bolder"}}>Travel</span> time 20:63 pm day: sunday</small>
                </div>
            </div>
            <div className="latest-card">
                <img src="./image/image3.jpg" alt="image2" width="300px" height="150px" ></img>
                <div className="info-card">
                    <h1>Joshua Tree Overnight Adventure </h1>
                    <p>this picture is from delhi it is a tradition place it is beautiful place</p>
                    <small><span style={{color: "black",fontWeight:"bolder"}}>Travel</span> time 20:63 pm day: sunday</small>
                </div>
            </div>
            <div className="latest-card">
                <img src="./image/image3.jpg" alt="image2" width="300px" height="150px" />
                <div className="info-card">
                    <h1>Joshua Tree Overnight Adventure </h1>
                    <p>this picture is from delhi it is a tradition place it is beautiful place</p>
                    <small><span style={{color: "black",fontWeight:"bolder"}}>Travel</span> time 20:63 pm day: sunday</small>
                </div>
            </div>      
        </div>
        <h1>Latest Article</h1>
        <hr className="article-hr" />
        <div className="article-main"> 
            <div className="latest-Article">
                <div className="article-card1">
                    <img src="./image/image1.jpg"alt="" width="40%" height="250px"/>
                    <h1>catch wave with a Adventure guide</h1>
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                </div>
                <div className="article-card">
                    <img src="./image/image2.jpg" alt=""  width="40%" height="200px"/>
                    <h1>catch wave with a Adventure guide</h1>
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                </div>
                <div className="article-card">
                    <img src="./image/image2.jpg" alt=""  width="40%" height="200px"/>
                    <h1>catch wave with a Adventure guide</h1>
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                </div>
                <div className="article-card">
                    <img src="./image/image3.jpg" alt=""  width="40%" height="200px"/>
                    <h1>catch wave with a Adventure guide</h1>
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                </div>
                <div className="article-card">
                    <img src="./image/image3.jpg" alt=""  width="40%" height="200px"/>
                    <h1>catch wave with a Adventure guide</h1>
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                </div>
            </div> 
            <div className="ads">
                <div className="ad1">
                  <h1>Advertistement</h1>
                </div>
                <h1>Top Article</h1>
                <hr className="article-hr" />
                <div className="advertisement-flex">
                   <div className="right-card1">
                    <img src="./image/image1.jpg"alt=""/>                   
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                    <small>Time 20:30 sunday</small>
                   </div>
                   <div className="right-card">
                    <img src="./image/image3.jpg" alt="" />                    
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                    <small>Time 20:30 sunday</small>
                   </div>
                   <div className="right-card">
                    <img src="./image/image3.jpg" alt="" />                   
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                    <small>Time 20:30 sunday</small>
                   </div>
                  <div className="right-card">
                    <img src="./image/image3.jpg" alt="" />                   
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                    <small>Time 20:30 sunday</small>
                    </div>
                   <div className="right-card">
                    <img src="./image/image3.jpg" alt="" />                   
                    <p> this photo was capture by the graet photographer mr niha kumar sharma</p>
                    <small>Time 20:30 sunday</small>
                   </div>
                </div>                            
            </div>  
        </div> 
        <h1> Latest Story</h1> 
        <hr className="article-hr" />
        <div className="story-flex">
                <div className="story-card">
                                
                <h1>Catch wave with a advanture guide</h1>
                <p>the hdy jfb hd a kahd daiw djaldj dkahd dkad jld dkq ka eiwe hkw hf wkkq qh kqhw hhdqjlql d</p>
                <small>tech /today 20:96</small>
                </div>
                <div className="story-card">
                             
                <h1>Catch wave with a advanture guide</h1>
                <p>the hdy jfb hd a kahd daiw djaldj dkahd dkad jld dkq ka eiwe hkw hf wkkq qh kqhw hhdqjlql d</p>
                <small>tech /today 20:96</small>
                </div>
                <div className="story-card">
                                
                <h1>Catch wave with a advanture guide</h1>
                <p>the hdy jfb hd a kahd daiw djaldj dkahd dkad jld dkq ka eiwe hkw hf wkkq qh kqhw hhdqjlql d</p>
                <small>tech /today 20:96</small>
                </div>
        </div>                       
    </>
    );
  };
  export default Home;
  