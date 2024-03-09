import { useState, useEffect } from "react";
import { get } from 'aws-amplify/api';

export const Born = () => {


    const [born, updateBorn] = useState([]);
    const [display, updateDisplay] = useState("Loading...");

    const fetchBorn = async () => {
        try {
            const getRequest = await get({
                apiName: 'cryptoapi',
                path: '/born'
            });
            const response = await getRequest.response;
            const responseBody = await response.body.json();
            console.log('GET call succeeded: ', responseBody);
            updateBorn(responseBody.createdAt)

        } catch (error) {
            console.log('GET call failed: ', error);
        }

        updateDisplay(`The github user msoldner79 was born on  ${born}`);
    }

    useEffect(() => {
        fetchBorn();
    }, [display]);

    return (
        <p>{display}</p>
    )
}