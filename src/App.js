import data from './data';
import Navbar from './components/Navbar';
import Card from './components/Card'
function App() {
  const cardElements = data.map(card =>{
    return <Card 
      key = {card.id}
      card = {card}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <section class="card-section">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
