
import React from "react";
import AdminComments from "./admin-comments/AdminComments";
import styles from './Admin.module.css'

export default class Admin extends React.Component{

    render(){
        return (
                  <>
                  <section className={styles['admin-section']}> 
                  <h1>Admin panel</h1>
                  <AdminComments/>
                  </section>
                  </>
                );
    }

}

// export default function Admin() {
//   return (
//       <>
//       <h1>Admin section</h1>
//       <p>This will be code splitted</p>
//       </>
//     );
// }