import './App.css';
import Header from './components/Header'
import Post from './components/Post'
import Footer from './components/Footer';
import Barry from './canarys/canary1.jpg'
import Robin from './canarys/canary2.jpg'
import Maurice from './canarys/canary3.jpg'
import Lesley from './canarys/canary4.jpg'
import Barbara from './canarys/canary5.jpg'

const canarysArray = [
  { image: Barry, name: 'Barry', id: 1 },
  { image: Robin, name: 'Robin', id: 2 },
  { image: Maurice, name: 'Maurice', id: 3 },
  { image: Lesley, name: 'Lesley', id: 4 },
  { image: Barbara, name: 'Barbara', id: 5 },
]


function App() {
  return (
    <div className="App">
      <Header></Header>
      <ul className='post-list'>
        {canarysArray.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            name={post.name}
          ></Post>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default App;
