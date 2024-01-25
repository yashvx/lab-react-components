import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GallaryBody from './components/GallaryBody';
import GallaryHeader from './components/GallaryHeader';


const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <GallaryHeader/>
      
      <div>
        <GallaryBody data={imageData}/>
       
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
      
    </div>
  )
}

export default App;
