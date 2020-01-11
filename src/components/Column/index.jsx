import React, {useEffect, useState} from 'react';
import {StyledColumn, StyledColumnWrapper, Min} from './styled'
import axios from 'axios'

function Column() {

    const [res, getRes] = useState({});

    const levels = ["fresh", "training", "rookie", "champion", "ultimate"];

    useEffect(() => {

        const loadData = async () => {
            const response = await axios.get("http://localhost:5000/digimons");
            getRes(response);
        }
        loadData()
    }, []);


    return <StyledColumnWrapper> {
        levels.map(element => {
            return <StyledColumn level={element}>
                {
                    res.data && res.data[element].map(el => {
                        const temp = require(`./../../../src/img/digimons/${el}.gif`);
                        return <Min src={temp} alt={el}/>
                    })
                }
            </StyledColumn>
        })
    }
    </StyledColumnWrapper>;
}

export default Column;
