import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Create from './Pages/Create'
import Index from "./Pages/Index";
import App from './App'
import Show from './Pages/Show'
import {dogLoader, indexLoader} from './loaders'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='/:id' element={<Show/>} loader={dogLoader}/>
        <Route path ='' element={<Index/>} loader = {indexLoader}/>
        <Route path = 'create' element={<Create/>}/>
    </Route>
))

export default router;