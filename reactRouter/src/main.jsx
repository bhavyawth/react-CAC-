import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Layout from './Layout.jsx'
import Profile from './components/Profile.jsx'
import { createBrowserRouter, RouterProvider, Route ,createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":username",
        element: <Profile />,
      },
      {
        path: "github/",
        element: <Github />,
        
      },
    ]

  }
])
*/

//another way easier to read

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="about" element={<About />} />
      <Route path=":username" element={<Profile />} />
      <Route path="github" element={<Github />} 
        loader={githubInfoLoader}
      />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
