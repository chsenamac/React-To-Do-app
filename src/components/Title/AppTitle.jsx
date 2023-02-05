
const AppTitle = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold tracking-widest justify-start">{process.env.react_app_titulo}</h1>
            </div>
        </div>
    )
}

export { AppTitle }