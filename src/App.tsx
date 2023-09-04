import { Layout } from 'antd'
import { Link, Route, Routes } from 'react-router-dom'

import Header from './components/layouts/headerNav'
import MenuContent from './components/layouts/menuContent'
import Contents from './components/layouts/contents'

const App = () => {
  return(
    <Layout>
      <Header />
      <Layout>
        <MenuContent />
        <Contents />
      </Layout>
    </Layout>
  )
}

export default App
