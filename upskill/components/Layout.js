import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Navbar from './Navbar'
function Layout({ children }) {
  
    return (
        <>
         <Navbar/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer/>
        </>
    )
}

export default Layout