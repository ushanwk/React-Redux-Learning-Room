import {useReducer} from "react";

const reducer = (state, action) => {
    if(action.type === 'setName'){
        return {...state, name: action.data};
    }else if(action.type === 'setAddress'){
        return {...state, address: action.data};
    }else if(action.type === 'setAge'){
        return {...state, age: action.data};
    }else if(action.type === 'setArray'){
        return {...state, data: [...state.data, action.data]};
    }else{
        return state
    }

}

function UseRed() {

    const [state, setState] = useReducer(reducer, {
        name: '',
        address: '',
        age: '',
        data: []
    });

    console.log(state)

    console.log(state);

    return (
        <div className="App">

            <input type="text" value={state.name} onChange={(e) => setState({
                type: 'setName',
                data: e.target.value,
            })} placeholder="Name..."/>

            <input type="text" value={state.address} onChange={(e) => setState({
                type: 'setAddress',
                data: e.target.value,
            })} placeholder="Address..."/>
            <input type="text" value={state.age} onChange={(e) => setState({
                type: 'setAge',
                data: e.target.value,
            })} placeholder="Age..."/>

            <button type="submit" onClick={() => setState({
                type: 'setArray',
                data: {
                    name: state.name,
                    address: state.address,
                    age: state.age
                }
            })}>Submit</button>

        </div>
    );
}

export default UseRed;
