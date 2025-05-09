import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Not from './components/Not/Not';
import UserContextProvider from './Context/UserContext';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home/Home';
import RecentProduct from './components/RecentProduct/RecentProduct';

let query = new QueryClient()


let x =createBrowserRouter([
 {  path:"", element: <Layout/>,
   children:[
  {index:true,   element: <ProtectedRouter>  <Home/> </ProtectedRouter>},
  {path:"login", element: <Login/> },
  {path:"register", element:   <Register/>},
  {path:"RecentProduct", element:   <RecentProduct/>},
  {path:"Search", element: <ProtectedRouter>  <Search/></ProtectedRouter> },
  {path:"*", element:<Not/>},
 ],},

]);


function App() {
  
  return (
<>
<UserContextProvider>
<QueryClientProvider client={query}>
  <CartContextProvider>
    <RouterProvider router={x}></RouterProvider>
    <Toaster/>
  </CartContextProvider>
    <ReactQueryDevtools/>
</QueryClientProvider>
  </UserContextProvider>
</>

  )
}
export default App