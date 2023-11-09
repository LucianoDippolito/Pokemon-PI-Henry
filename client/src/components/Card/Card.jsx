import React from "react";
import style from "./Card.module.css";

export default function Card({ name, types, image, id, weight, height }) {

    let sprite;
    if (id >= 1 && id <= 100) {
        sprite = true;
    }

    const typesColors = {
        fire: style.fire,
        normal: style.normal,
        fighting: style.fighting,
        flying: style.flying,
        ground: style.ground,
        poison: style.poison,
        rock: style.rock,
        bug: style.bug,
        ghost: style.ghost,
        steel: style.steel,
        water: style.water,
        grass: style.grass,
        electric: style.electric,
        psychic: style.psychic,
        ice: style.ice,
        dragon: style.dragon,
        dark: style.dark,
        fairy: style.fairy,
        unknown: style.unknown,
        shadow: style.shadow,
    };

    return (
        <div
            className={style.card}
            style={{ backgroundImage: `url(images/typesBgCard/${types[0]}.png)` }} // EL DIV TIENE COMO FONDO LA CARD DEL PRIMER TIPO DEL POKEMON EN CUESTION
        >
            <span className={style.name} // ESTE SPAN TIENE EL ESTILO DE NOMBRE CON LA PRIMER LETRA DEL NOMBRE EN MAYUS
            > 
                {name.charAt(0).toUpperCase() + name.slice(1)} 
            </span>
            {sprite ? ( // TERNARIO SI EL POKEMON TIENE ID 1 A 100 HAY SPRITE (GIF) SINO FOTO DEFAULT API
                <img
                    src={`images/sprites/${id}.gif`}
                    alt="Img not found"
                    height="190px"
                    className={style.img}
                />
            ) : (
                <img
                    src={image}
                    alt="Img not found"
                    height="190px"
                    className={style.img}
                />
            )}
            <span className={`${style.typetitle} ${typesColors[types[0]]}` //APLICA AL TEXTO "TYPES" EL ESTILO DE CSS DE TYPESTITLE Y EL COLOR DEPENDE DEL 1ER TIPO DEL POKEMON
            }> 
                Types
            </span>
            <div className={style.types}>
                {types ? ( 
                    types.map((el) => { // Ternario: si hay type se mapea los tipos de pokemon y se muestra el icono de ese/esos tipo/s
                        return (
                            <img
                                src={`images/types/${el}.png`}
                                alt="Types"
                                height="80px"
                                key={el} // proporciona una clave única a cada elemento en la lista
                            />
                        );
                    })
                ) : ( 
                    <span>Types not found</span>
                )}
            </div>
            <span className={`${style.aboutitle} ${typesColors[types[0]]}` // IGUAL QUE EL SPAN DE TYPES
            }>
                About
            </span>
            <div className={style.about}> 
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={"images/cards/weight.svg"} alt="Weight Icon" />
                        <span className={style.pokweight}>{weight / 10}kg</span>
                    </div>
                    <span className={style.weight}>Weight</span>
                </div>
                <div                                        // se arman con estilos el peso y altura del pokemon y se agregan las svg de balanza y regla
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "24%",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={"images/cards/height.svg"} alt="Height Icon" />
                        <span className={style.pokheight}>{height / 10}m</span>
                    </div>
                    <span className={style.height}>Height</span>
                </div>
            </div>
        </div>
    );
}
