const AppInput = () => {
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-600 border-solid p-3 rounded-full"></span>
            </div>
            <input type="text"
                className="focus:shadow-lg focus:shadow-blue-300 pl-12 w-full py-4 bg-gray-100 rounded-xl outline-none transition-all duration-300 ease-in-out"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Agregar tarea" >
            </input>
        </div>
    )
}

export  default AppInput;