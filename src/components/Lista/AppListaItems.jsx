import { AppItemTarea } from "../Tarea";


const AppListaItems = ({ tarea }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {tarea.map(tarea => {
                return (
                    <AppItemTarea key={tarea.id} tarea={tarea}/>
                )
            })}
        </div>
    )
}

export { AppListaItems }