
import './homePage.css'


function HomePage() {
  
  return (
    <>
    <div className="content">
      <h2>UI</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ipsum similique iste at illo alias est! Sint voluptates odit harum, veritatis repellat laborum eos, rem iste facere blanditiis, amet et.</p>
    </div>
    <div className="imgBx">
      <img src={"images/fox.png"} alt="character"/>
    </div>
      <ul className="sci">
        <li><a href="https://www.instagram.com/_choloviche__/"><img src={"images/instagram.png"} alt="instagram"/></a></li>
        <li><a href="https://t.me/fI0res"><img src={"images/telegram.png"} alt="telegram"/></a></li>
      </ul>
    </>
  )
}

export default HomePage;
