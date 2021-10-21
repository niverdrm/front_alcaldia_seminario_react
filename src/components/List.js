import lists from '../jsons/List.json'
import styles from './styles/List.module.css'
export function List() {
    return (
        <div className={styles.content_all}>
            <h1 className={styles.title}>Transparencia</h1>
            {
                lists.map((item) => (
                    <div className={styles.content} key={item.id}>
                        <h1 className={styles.title}>{item.id}. {item.title} </h1>
                        {
                            item.content.map((data , key) => (
                                <div key={key} className={styles.content_card}>
                                    <div className={styles.article}>
                                        <a className={styles.a} href="/">
                                            <h3> {data.id}. {data.title} </h3>
                                        </a>
                                        <p> {data.description} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}