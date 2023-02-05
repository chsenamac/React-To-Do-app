import { AppBotonEliminar } from "../Delete"

const AppItemTarea = ({ tarea }) => {

    const { titulo, completado } = tarea

    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-solid border-gray-900">
            <div className="flex items-center">
                {
                    completado ? (
                        <div className="bg-sky-600 p-1  rounded-full cursor-pointer">
                            <img className="h-4 w-4" src="completed-icon.svg" alt="Completar tarea"></img>
                        </div>
                    ) : (
                        <span className="border border-gray-600 border-solid p-3 rounded-full cursor-pointer"></span>
                    )
                }
                <p className={"pl-3 " + (completado && "line-through")}>
                    { titulo }
                </p>
            </div>
            <AppBotonEliminar />
        </div>
    )
}

export { AppItemTarea }