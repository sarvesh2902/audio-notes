import React from 'react'
import CreateProjBtn from '../components/CreateProjBtn'
import ProjectList from '../components/ProjectList'
import Layout from '../components/Layout'

const dashboard = () => {
  return (
    <div>
        <Layout title="Dashboard">
        <CreateProjBtn/>
        <ProjectList />
        </Layout>
    </div>
  )
}

export default dashboard