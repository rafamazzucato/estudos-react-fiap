import React, {useState, useEffect} from 'react';

export const Hello = props => {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
       setTimeout(() => {
           setSegundos(segundos + 1);
       }, 1000); 
    }, [segundos]);

    return(
        <div>
            <h1 className={props.text && props.text.length < 4 ?"Warn" : ""}>{props.text}</h1>
            <h2>{segundos}</h2>
        </div>
    );  
}