import Sample from "./components/Sample"
import Card from "./components/Card"
import catImage from "./components/cat.jpg"
import git2Image from "./components/git2.png"


function App() {
  const cat = {
    name: "cat",
    image: catImage
  }
  const Pappu = {
    name: "Pappu",
    image: git2Image
  }


  return (
    <>
    <Sample name="Pappu" />
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <Card post={cat} />
      <Card post={Pappu} />
    </div>    

    </>
  )
}

export default App