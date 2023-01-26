import { useState } from "react";

const initialState = {
    filter: "ALL"
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const setFilter = (payload) => {
        setState({
            ...state,
            filter: payload
        })
    }

    return {
        state,
        setFilter
    }
}

export default useInitialState;