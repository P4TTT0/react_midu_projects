import { useEffect, useState } from "react";

const component : React.FC = () => 
{
    const [value, setValue] = useState<boolean>(false);
    const exampleFunction = () => console.log("Code to execute!");
    useEffect(
        exampleFunction,
        [value]
    )
    return(
        <>

        </>
    );
}