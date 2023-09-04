// import { Route } from 'react-router-dom'
import FarmOverview from "./views/farmOverview"
import FarmDashboard from "./views/farmDashboard"

export interface menuItems {
    key: string
    icon?: any
    label: string
    path?: string
    component?: any
    children?: menuItems[]
}

const menuData: menuItems[] =[
    {
        key: 'farmOverview',
        label: 'Farm',
        path: '',
        children: [
            {
                key: 'location A',
                label: 'Overview',
                path: '/',
                component: <FarmOverview />
            },
            {
                key: 'location A',
                label: 'Location A',
                path: '/location_a',
                component: <FarmDashboard />
            },
            {
                key: 'location b',
                label: 'Location B',
                path: '/location_b',
                component: <FarmDashboard />
            },
            {
                key: 'location c',
                label: 'Location C',
                path: '/location_c',
                component: <FarmDashboard />
            }
        ]
    }
]

export default menuData
