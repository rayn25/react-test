import Hello from './Hello';
import Wrapper from "./Wrapper";
import Practice from './Practice';
import './App.css';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import React, {useCallback, useMemo, useReducer, useRef, useState} from "react";
import CreateUser from "./CreateUser";
import UseInputs from "./hooks/UseInputs";
import produce from 'immer';
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";
import {DatePicker} from "antd";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...')
    return users.filter(user => user.active).length
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        /*
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
         */
        case 'CREATE_USER':
            /*return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }*/
            return produce(state, draft => {
                draft.users.push(action.user)
            })
        case 'TOGGLE_USER':
            /*return {
                ...state,
                users: state.users.map(user => user.id === action.id ? { ...user, active: !user.active } : user)
            }*/
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id)
                user.active = !user.active
            })
        case 'REMOVE_USER':
            /*return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }*/
            return produce(state, draft => {
                const index = draft.users.find(user => user.id === action.id)
                draft.users.splice(index, 1)
            })
        default:
            return state
    }
}

export const UserDispatch  = React.createContext(null)

function App() {
    /*const [{username, email}, onChange, reset] = UseInputs({
        username: '',
        email: ''
    })*/
    const [state, dispatch] = useReducer(reducer, initialState)
    // const nextId = useRef(4)

    const { users } = state

    /*
    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        })
        reset()
        nextId.current += 1
    }, [username, email, reset])

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    })

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    })
     */

    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        /*
        <UserDispatch.Provider value={dispatch}>
            <CreateUser/>
            <UserList users={users}/>
            <div>활성 사용자 수 : {count}</div>
            <Practice/>
        </UserDispatch.Provider>
        */
        <DatePicker />
        /*<ErrorBoundary>
            <User />
        </ErrorBoundary>*/
    )
}

export default App;
