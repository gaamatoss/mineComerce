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

    const message = (
        <Message showIcon type={type}>
            {type}: {name}Hero added to cart.
        </Message>
    );
    function addCart(name) {
        toaster.push(message, { placement })
        console.log(e.target);
    }

    const [heros, setHeros] = useState([])
    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(heros.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = heros.slice(startIndex, endIndex)

    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${md5}&limit=100`)
            .then((response) => {
                setHeros(response.data.data.results)
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])


    return (
        <div className="content">
            <div>
                <label htmlFor="">Itens Per Page: </label>
                <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                {Array.from(Array(pages), (item, index) => {
                    return <button
                        prev
                        last
                        next
                        first
                        size="lg"
                        style={{ margin: '5px' }}
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >{index + 1}</button>
                })}
            </div>
            <div className="heros">
                {currentItens.map(hero => {
                    return (
                        <div key={hero.id}>
                            <Card addToCard={addCart} name={hero.name} thumb={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}