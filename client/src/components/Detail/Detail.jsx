import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../actions';
import random from '../../images/random.png'
import loading from '../../images/loading.gif'
import style from './Detail.module.css'

import sword from '../../images/cards/sword.png'
import speed from '../../images/cards/run.png'
import happiness from '../../images/cards/happy.png'
import capture from '../../images/cards/pokeball.png'


export default function Detail(props) {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(params.id));
    }, [])

    const myPokemon = useSelector(state => state.detail)

    const [section, setSection] = useState(1);

    useEffect(() => {
        if (myPokemon[0] && myPokemon[0].createdInDb) {
            setSection(2)
        }
    }, [myPokemon, setSection]);

    function handleSection(e) {
        if (e.target.innerHTML === 'About' && !myPokemon[0].createdInDb) {
            setSection(1);
        } else if (e.target.innerHTML === 'Base Stats') {
            setSection(2)
        }
    }


    return (
        <div>
            {
                myPokemon.length && myPokemon[0].id == params.id ?
                    <div className={style.grid} style={{ maxHeight: '100vh' }}>
                        <Link to='/home' className={style.home}><button className={style.homebtn}>Home</button></Link>
                        <div className={style.encabezado}>
                            <h1 className={style.name}>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1>
                            <p>#{myPokemon[0].id}</p>
                        </div>
                        <nav className={style.sections} style={{ position: 'relative' }}>
                            <button onClick={e => handleSection(e)} className={section === 1}>About</button><span className={style.lineab}></span>
                            <button onClick={e => handleSection(e)} className={section === 2}>Base Stats</button><span className={style.linestat}></span>
                        </nav>
                        <div className={style.visual}>
                            <img src={myPokemon[0].img ? myPokemon[0].img : random} className={style.img} />
                            <div className={style.types}>
                                {myPokemon[0].types ? myPokemon[0].types.map(el => {return (<img src={`../../images/types/${el}.png`} alt="Types" height="160px" key={el} />)}) 
                                    :<span>Types not found</span>
                                }
                            </div>
                        </div>
                        <section className={section === 1 ? style.show : style.hide}>
                            {
                                !myPokemon[0].createdInDb ?
                                    <div className={style.firstinfo}>
                                        <div className={style.descripok} style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start' }} >
                                            <span style={{ color: "black", fontWeight: '500', fontSize: "18px" }}>Description</span>
                                            <span style={{ alignSelf: 'flex-start' }}>
                                                {myPokemon[0].description}
                                            </span>
                                        </div>
                                        
                                        <div className={style.importantinfo}>
                                            <div className={style.combatinfo} style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start' }}>
                                                <span style={{ color: "black", fontWeight: '500', marginBottom: '4%' }}>Combat</span>
                                                <div style={{ display: 'flex', flexFlow: 'column' }}>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start' }} className={style.animabil}>
                                                        <span>Abilities</span>
                                                        <div className={style.apinfo}>
                                                            {myPokemon[0].abilities 
                                                                ? myPokemon[0].abilities.map(el => {
                                                                    return (
                                                                        <span key={el} style={{ width: '15vw', display: 'flex', justifyContent: 'flex-start' }}>{el.replace('-', ' ')}</span>
                                                                    )
                                                                }) 
                                                                : <span>This pokemon has no abilities</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '6%' }} className={style.animoves}>
                                                        <span>Moves</span>
                                                        <div className={style.apinfo}>
                                                            {
                                                                myPokemon[0].moves ? myPokemon[0].moves.map(el => {
                                                                    return (
                                                                        <span key={el} style={{ display: 'inline-block' }}><img src={capture} alt='Capture' height='13px' width='13px' /> {el.replace('-', ' ')}</span>
                                                                    )
                                                                }) :
                                                                    <span style={{ width: '17vw' }}>This pokemon has no moves</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={style.breedinginfo} style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start' }}>
                                                <span style={{ color: "black", fontWeight: '500', marginBottom: '4%' }}>Breeding</span>
                                                <div style={{ display: 'flex', flexFlow: 'column' }}>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start' }} className={style.animspecie}>
                                                        <span>Specie</span>
                                                        {
                                                            myPokemon[0].species ?
                                                                <span style={{ marginLeft: "6%", width: '15vw', display: 'flex', justifyContent: 'flex-start', color: 'rgb(41, 41, 41)' }}>{myPokemon[0].species}</span>
                                                                :
                                                                <span style={{ marginLeft: "6%", color: 'rgb(41, 41, 41)' }}>This pokemon has no specie</span>
                                                        }
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '3%' }} className={style.animhabitat}>
                                                        <span>Habitat</span>
                                                        {
                                                            myPokemon[0].habitat ?
                                                                <span style={{ marginLeft: "6%", color: 'rgb(41, 41, 41)' }}>{myPokemon[0].habitat}</span>
                                                                :
                                                                <span style={{ marginLeft: "4%", color: 'rgb(41, 41, 41)', width: '18vw' }}>This pokemon has no habitat</span>
                                                        }
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '3%' }} className={style.animgrowth}>
                                                        <span>Growth Rate</span>
                                                        {
                                                            myPokemon[0].growth ?
                                                                <span style={{ marginLeft: "6%", color: 'rgb(41, 41, 41)' }}>{myPokemon[0].growth}</span>
                                                                :
                                                                <span style={{ marginLeft: "6%", color: 'rgb(41, 41, 41)' }}>This pokemon has no growth-rate</span>
                                                        }
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '4%' }} className={style.animlocation}>
                                                        <span>Location Area Encounters</span>
                                                        <div className={style.apinfo}>
                                                            {
                                                                myPokemon[0].locations ? myPokemon[0].locations.map(el => {
                                                                    return (
                                                                        <span key={el} style={{ display: 'inline-block' }}><img src={capture} alt='Capture' height='13px' width='13px' /> {el}</span>
                                                                    )
                                                                }) :
                                                                    <span style={{ width: '25vw' }}>This pokemon has no encounter locations</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div> 
                                    :
                                    <div className={style.loading}>
                                        <img src={loading} alt="Loading.." width='250px' />
                                        <p className={style.loadingtext}>Loading...</p>
                                    </div>
                            }

                        </section>

                        <section className={section === 2 ? style.show : style.hide}>
                            <div className={style.stats}>
                                <div className={style.bar}>
                                    <div className={style.info}>
                                        <span><i className="fas fa-heartbeat"></i> Hp</span>
                                    </div>
                                    <div className={style.progress} ><span style={{ width: myPokemon[0].hp > 100 ? '100%' : myPokemon[0].hp + '%' }} per={`${myPokemon[0].hp}`} className={style.hp}></span></div>
                                </div>
                                <div className={style.bar}>
                                    <div className={style.info}>
                                        <span><img src={sword} alt='Attack' height='16px' width='16px' /> Attack</span>
                                    </div>
                                    <div className={style.progress} style={{ animationDelay: '0.1s' }}><span style={{ width: myPokemon[0].attack > 100 ? '100%' : myPokemon[0].attack + '%' }} per={`${myPokemon[0].attack}`} className={style.attack}></span></div>
                                </div>
                                <div className={style.bar}>
                                    <div className={style.info}>
                                        <span><i className="fas fa-shield-alt"></i> Defense</span>
                                    </div>
                                    <div className={style.progress} style={{ animationDelay: '0.2s' }}><span style={{ width: myPokemon[0].defense > 100 ? '100%' : myPokemon[0].defense + '%' }} per={`${myPokemon[0].defense}`} className={style.defense}></span></div>
                                </div>
                                <div className={style.bar}>
                                    <div className={style.info}>
                                        <span><img src={speed} alt='Speed' height='16px' width='16px' /> Speed</span>
                                    </div>
                                    <div className={style.progress} style={{ animationDelay: '0s' }}><span style={{ width: myPokemon[0].speed > 100 ? '100%' : myPokemon[0].speed + '%' }} per={`${myPokemon[0].speed}`} className={style.speed}></span></div>
                                </div>
                            </div>
                        </section>
                    </div> :
                    <div className={style.loading}>
                        <img src={loading} alt="Loading.." width='250px' />
                        <p className={style.loadingtext}>Loading...</p>
                    </div>
            }
        </div>

    )
}