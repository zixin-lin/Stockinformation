import Link from 'next/link'
import Image from 'next/image'
//import Navbar from './Nav'
import styles from '../styles/Home.module.css'
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
export default function Layout({ children }) {
  const { user, error, isLoading } = useUser();

  return (
   <div>
     
		<ul className={styles.daohang}>
			<li className={styles.logo}><img src="/logo.jpg" alt="Picture of the author" height={150} width={30}/></li>
			<li className={styles.line}><Link href = "/"><a>Home page</a></Link></li>
      		<li className={styles.line}><Link href = "/Performance"><a>Market Performance</a></Link></li>
			<li className={styles.line}><Link href = "/Prediction"><a>Market Prediction</a></Link></li>
			<li className={styles.Contact}>
				<span> Contact us</span>
				<span className={styles.desc}>Email:12345678901@126.com.cn</span>
				<span className={styles.desc}>Phone:12345678901</span>
			</li>
		</ul>
		
		<ul className={styles.header1}>
			<li className={styles.title}>Neural Matrix  </li>
			<li className={styles.login}> {!user && <Link href="/api/auth/login"><a>Login/Sign UP</a></Link>}
      {user && (
          <Link href="/api/auth/logout"><a>{user.name}  Logout</a></Link>
        )}
      </li>
      

		</ul>
		
    <div className="page-content">
    
        { children }
    
      </div>
   </div>
  )
}