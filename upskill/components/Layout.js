import styles from '../styles/Layout.module.css'
import AppBar from '@material-ui/core/AppBar';
function Layout({ children }) {
    return (
        <>
         <AppBar position='static'/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout