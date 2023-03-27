import { Badge, Tag } from 'antd'
import styles from './Cover.module.scss'

type CoverProps = { img: string }

export const Cover = ({ img }: CoverProps) => {
    return (
        <div className={styles.cover_gradient}>
            <img alt='example' src={img} style={{ width: '300px' }} />
        </div>
    )
}
