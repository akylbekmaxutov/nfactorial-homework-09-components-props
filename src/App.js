import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios.get("https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=iHEI5T4aGCbhA5KmiAOzo22cPafsc8uK").then(res=>{
      console.log(res.data.results)
      setMedia(res.data.results);
    });
  }, []);

  return media.splice(1, 5).map((item, index) => (
    <div>
    <section>
        <h4 class="top-heading">Movie medium</h4>
        <h1 class="main-heading">Movie News</h1>
    </section>
    <section class="posts">
    <div class='post'>
            <div class='text'>
                <div class='top-text'>
                    <strong>{item.byline.slice(3,)}</strong><span> in </span> 
                    <strong>{item.item_type}</strong><span> &nbsp&nbsp·&nbsp&nbsp 
                      {new Date(item.published_date).getDate()} 
                      {['January','February','March','April','May',
                        'June','July','August','September',
                        'October','November','December'][new Date(item.published_date).getMonth()]}
                    </span>
                </div>
                <div class='main-text'>
                    <h3>{item.title}</h3>
                    <p>{item.abstract}</p>
                </div>
                <div class='bottom-text'>
                    <span class='bottom-section'>{item.section}</span> 
                    <span class='simple-text'>10 min read &nbsp&nbsp·&nbsp&nbsp Selected for you</span> 
                </div>
            </div>
            <div class='picture'>
                <img src={item.multimedia[1].url} alt=""/>
            </div>        
        </div>
    </section>
    
    
        <section class="footer">
        <div class="footer-text">
            Credits: photos from &nbsp<a href="Unsplash.com">Unsplash.com</a>, 
            icons from &nbsp<a href="Icons8">Icons8</a>, 
            graphics from &nbsp<a href="craftwork.design">craftwork.design</a>, 
            font Kanit from &nbsp<a href="fonts.google">fonts.google</a>.
        </div>
        <div class="footer-closing">
        Made with ✨❤️ at nFactorial in 2022.
        </div>
    </section>
        </div>
  ));
}

export default App;

// const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     axios.get("https://swapi.dev/api/planets").then(res=>{
//       console.log(res.data.results)
//       setPlanets(res.data.results);
//     });
//   }, []);

//   return planets.map((item, index) =>  (

//     <div className="item-list-layout" key={index}>
//       <div>
//         <p>gravity: {item.gravity}</p>
//         <p>diameter: {item.diameter}</p>
//       </div>
//       <div className="item-image-layout">
//         <img
//           className="item-image"
//           src={`https://starwars-visualguide.com/assets/img/planets/${index+2}.jpg`}
//           alt="planet"
//         />
//       </div>
//     </div>
//   ));
// };