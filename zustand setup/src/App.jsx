import useCounterStore from "./store/counterStore";

function App() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div className="flex flex-col items-center justify-center ">
            <h2 className="m-12 text-2xl font-bold text-grey-500">{count}</h2>
            <div className="flex flex-row item-center justify-center">
                <button className="px-3 py-2 bg-green-300 rounded-md mr-4" onClick={increment}>
                    Increment
                </button>
                <button className="px-3 py-2 bg-red-300 rounded-md mr-4" onClick={decrement}>
                    Decrement
                </button>
                <button className="px-3 py-2 bg-blue-300 rounded-md" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
    },
};

export default App;
