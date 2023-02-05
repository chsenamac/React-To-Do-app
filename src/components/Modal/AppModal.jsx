import React, { useState} from 'react';
import Modal from 'react-modal';

const AppModal = ({agregarTarea}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [titulo, setTitulo] = useState("")

    const manejarTarea = (evento) =>{
        const currentTitle = titulo;
        agregarTarea(currentTitle);
        setTitulo('');
        setIsOpen(false);
        return currentTitle;
    }


    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                <img className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in justify-end pl-3" src="add-icon.svg" alt="Agregar tarea"></img>
            </button>

            <Modal
                isOpen={isOpen}
                style={CSSModalApp}
            >
                <div className="flex items-center justify-between p-4">
                    <div className='w-11/12 text-xl'>
                        <h1>{process.env.react_app_titulo} | Agregue la proxima tarea</h1>
                    </div>
                    <button onClick={() => setIsOpen(false)}>
                        <img className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in justify-end pl-3" src="close-icon.svg" alt="Cerrar"></img>
                    </button>
                </div>
                <div className="mt-26 relative">
                    <div className='flex items-center justify-between p-4'>
                        <input
                            autoFocus 
                            type="text"
                            className="focus:shadow-lg focus:shadow-sky-300 pl-12 w-11/12  py-4 bg-gray-100 rounded-xl outline-none transition-all duration-300 ease-in-out"
                            placeholder="Agregar tarea"
                            value={titulo}
                            onChange={evento => setTitulo(evento.target.value)}
                        >
                        </input>
                        <button onClick={()=> manejarTarea()}>
                            <img className="h-10 w-10 cursor-pointer transition-all duration-300 ease-in justify-end pl-3" src="save-icon.svg" alt="Cerrar"></img>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};


const CSSModalApp = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: '30%',
        border: 'solid #7dd3fc',
        background: 'white',
        borderRadius: '1em',
    },
};

export { AppModal }
