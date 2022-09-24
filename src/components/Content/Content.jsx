import React, { useEffect, useState } from "react";
import './content.css'
import Card from '../Card/Card'
import { Message, useToaster } from 'rsuite';
import axios from 'axios'

const md5 = 'f52b1ad718e7dcfb558e77325dce0c5f'
const timestamp = '1663986710468'
const apikey = 'a8c6429f75de8e7ee58493ef64bbd9d6'

// console.log(Math.floor(Date.now()));

export default function Content() {
    const type = 'success';
    const placement = 'topStart';
    const toaster = useToaster();

    const [heros, setHeros] = useState([])

    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${md5}&limit=100`)
            .then((response) => {
                setHeros(response.data.data.results)
            })
            .catch(err => console.log(err));
    }, [])


    const message = (
        <Message showIcon type={type}>
            {type}: Item adicionado ao carrinho.
        </Message>
    );

    function addCart() {
        toaster.push(message, { placement })
    }

    return (
        <div className="content">
            {heros.map(hero => {
                return (
                    <div>
                        <Card addToCard={addCart} name={hero.name} thumb={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                    </div>
                )
            })}
        </div>
    )
}