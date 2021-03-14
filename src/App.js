import './App.css';
import restaurant from "./restaurant.jpg";

function Header(){
  return (
    <header>
      <h1>Sankalp's Kitchen</h1>
    </header>  
  );
}

function Main(props){
  return (
    <section>
      <p>We serve the best food around here</p>
      <img 
      src={restaurant} 
      height={200}
      alt="table in restaurants"
      />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish}</li>
        ))}
      </ul>
    </section>  
  );
}

function Footer(props){
  return (
    <section>
      <h1>Copyright {props.year}</h1>
    </section>  
  );
}

const dishes = [
  "Roti and Curry",
  "Nan and curry",
  "Butter chicken",
  "Biryani",
  "Drinks",
  "Deserts"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));


function App() {
  return (
    <div className="App">
      <Header />
      <Main dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
