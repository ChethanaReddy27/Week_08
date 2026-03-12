import A from './components/A'
import B from './components/B'
import C from "./components/C";
function App(){

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-4">React State Demo</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <A />
        <B />
        <C />
      </div>
    </div>
  )
}

export default App