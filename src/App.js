import { AppTitle } from "./components/Title"
import { AppListaItems } from "./components/Lista";
import { AppModal } from "./components/Modal";
import { useState } from "react";

function App() {

  const[tarea, setTarea] = useState ([
    
  ])

  const agregarTarea = (nuevaTarea) => {
    const tareaNueva = {
        id: Date.now(),
        titulo: nuevaTarea,
        completado: false
    }
    setTarea([...tarea, tareaNueva]);
};



  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-900 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl bg-gray-200 rounded-lg p-2">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <AppTitle />
          </div>
          <AppModal agregarTarea={agregarTarea}/>
        </div>
        <AppListaItems tarea={tarea} />
      </div>
    </div>
  );
}

export default App;
