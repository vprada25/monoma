import { Card } from 'antd'

import styles from './CardPokemon.module.scss'
import { Cover } from './components'
import { useEffect, useState } from 'react'
import { getPokemon } from '../../../services/axios'

const { Meta } = Card

type CardPokemonProps = { data: Array<any> | any }

export const CardPokemon = ({ data }: CardPokemonProps) => {
    const img = data.sprites.other.dream_world.front_default

    return (
        <Card className={styles.CardPokemon} hoverable>
            <div className={styles.cover_container}>
                <Cover img={img} />
            </div>
            <Meta
                title={data.name}
                description={`#${data.moves[0].move.name} #${data.moves[1].move.name}`}
            />
        </Card>
    )
}
