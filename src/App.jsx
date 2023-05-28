import { RouterProvider } from "react-router-dom"
import routes from "./routes/routes"

function App() {
  

  return (
     <div className="mx-auto mt-[189px]">
         <RouterProvider router={routes} />
     </div>
      
  )
}

export default App
