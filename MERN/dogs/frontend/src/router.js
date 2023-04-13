import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Create from './Pages/Create'
import Index from "./Pages/Index";
import App from './App'
const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path ='' element={<Index/>}/>
        <Route path = 'create' element={<Create/>}/>
    </Route>
))

export default router;