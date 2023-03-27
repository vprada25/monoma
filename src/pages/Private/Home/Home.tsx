import { List } from 'antd'
import { useEffect, useState } from 'react'

import { useData } from '../../../hooks/useData'
import { useGetData } from './../../../hooks/useGetData'
import { CardPokemon } from '../../../components/cards/CardPokeMon'

import { KEY_AUTH } from '../../../services/auth/authSlice'
import { allPokemon, getPokemon } from '../../../services/axios'

import styles from './Home.module.scss'

const Home = () => {
    const { user } = useData({ reducer: KEY_AUTH })

    const { data, loading, error } = useGetData<any>(allPokemon(10, 0))

    const [pokemon, setPokemon] = useState<any>([])

    useEffect(() => {
        data?.results?.map((item: any) => {
            getPokemon(item.url).then((res: any) => {
                setPokemon((prev: any) => [...prev, res.data])
            })
        })
    }, [data])

    return (
        <div className={styles.home_container}>
            <h1>Bienvenido: {user}</h1>
            <div className={styles.home__list}>
                <List
                    dataSource={pokemon}
                    grid={{ gutter: 5, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }}
                    renderItem={(item: any) => (
                        <List.Item>
                            <CardPokemon data={item} />
                        </List.Item>
                    )}
                    pagination={{ position: 'bottom' }}
                />
            </div>
        </div>
    )
}

export default Home
