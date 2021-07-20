import React, { useEffect, useState } from 'react'

const Main = () => {

    
    const [name, setName] = useState([null]);
    const [order, setOrder] = useState([null]);
    const [exp, setExp] = useState([null]);
    const [height, setHeight] = useState([null]);
    const[id,setId] = useState([null]);
    const [search, setSearch] = useState([""]);
    useEffect(() => {

           const  getPokemon = async() =>{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const actdata = await res.json();
            setId(actdata.id);
            setName(actdata.name);
            setOrder(actdata.order);
            setExp(actdata.base_experience);
            setHeight(actdata.height);
            
        }

        getPokemon();

    }, [search])


    const imge=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div>
            <div className="main">
                <div className="ub">
                    <input type="text" placeholder="Enter name or Id" onChange={(event) => {
                        setSearch(event.target.value)
                    }} ></input>
                    <div className="ul">
                        <img src="https://i.pinimg.com/originals/fc/15/89/fc158956845d8a992e748270d2192e03.jpg" alt=""></img>
                    </div>
                </div>
                <div className="data">
                <div className="pimage">
                    
                    </div>
                    <img src={imge} alt=""></img>

                    <div className="detail">
                        <h1><b>Name :</b>{name}</h1>
                        <h1><b>Id:</b>{id}</h1>
                        <h1><b>Height:</b>{height}</h1>
                        <h1><b>Order :</b>{order}</h1>
                        <h1><b>Base_Exp :</b>{exp}</h1>

                    </div>
                    

                </div>

            </div>
        </div>
    )
}
export default Main;
