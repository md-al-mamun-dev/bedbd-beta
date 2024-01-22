import styles from './index.module.css'
import LucidIcon from '@/components/LucidIcon'





const Sidebar = () => {


const activeMenu = 'Dashboard'

const useName = 'Russell Ahmed'

const menu = [{
                'name': 'Dashboard',
                'icon' : {
                          'type':'lucidicon',
                          'name':'layout-dashboard'
                        },
              },
              {
                'name': 'Profile',
                'icon' :{
                          'type':'lucidicon',
                          'name':'user-cog'
                        },
              },
              {
                'name': 'Message',
                'icon' : {
                          'type':'lucidicon',
                          'name':'mail'
                        },
              },
              {
                'name': 'Property',
                'icon' : {
                          'type':'lucidicon',
                          'name':'home'
                        },    
              },
              {
                'name': 'Transaction',
                'icon' : {
                          'type':'lucidicon',
                          'name':'arrow-right-left'
                        },
              },
              {
                'name': 'Setting',
                'icon' : {
                          'type':'lucidicon',
                          'name':'settings'
                        },
              },
              {
                'name': 'History',
                'icon' :{
                          'type':'lucidicon',
                          'name':'history'
                        },
              }
            ]



  return (
    <div className={`box-w-400 h-100 bg-secondary-400 p-48-16 clr-neutral-000-a-70 fw-regular-dark flex flex-column space-between ${styles.sidebar}`}>
      <div className='grid gap-16'>
        {
          menu.map(menuItem=>(
                  menuItem['name']=== activeMenu
                    ? <div className={`flex align-center gap-8 p-12-16 br-8 w-100 bg-transparent cursor-pointer  ${styles.active}`}>
                        <LucidIcon name={menuItem['icon']['name']} size={24}/>
                        <h3>{menuItem['name']}</h3> 
                      </div>
                    : <div className={`flex align-center gap-8 p-12-16 br-8 w-100 bg-transparent cursor-pointer `}>
                        <LucidIcon name={menuItem['icon']['name']} size={24}/>
                        <h3>{menuItem['name']}</h3> 
                      </div>
                  ))
        }


      </div>

      <div>
        <div className={`fw-semi-bold w-100 br-8 ${styles.user_name}`}>
          <h3>{useName}</h3> 
        </div>

        <div className={`flex align-center gap-8 p-12-16 br-8 w-100 bg-transparent cursor-pointer `}>
          <LucidIcon name='log-out' size={24}/>
          <h3>Log Out</h3> 
        </div>
      </div>
    </div>
  )
}

export default Sidebar