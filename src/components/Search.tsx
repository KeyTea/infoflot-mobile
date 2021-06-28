import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectCruise, setId} from "../store/cruiseReducer";

export type Props = {
    subject: string
}
const Search: React.FC<Props> = ({subject}) => {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();
    const cruise = useAppSelector(selectCruise);
    return (
        <div>
            <form className="search" onSubmit={()=>{
                dispatch(setId(input));
                setInput('');
            }}>
                <input
                    type='text'
                    placeholder='Введите номер'
                    required
                    minLength={4}
                    value={input}
                    onChange={e => {
                        setInput(e.target.value);
                    }}
                />
                <button className='button' type='submit'>Показать {subject}</button>
            </form>
        </div>
    )
}

export default Search;
