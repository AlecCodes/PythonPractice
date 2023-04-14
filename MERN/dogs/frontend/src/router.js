import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Create from './Pages/Create'
import Index from "./Pages/Index";
import App from './App'
import Show from './Pages/Show'
import Edit from './Pages/Edit'
import {dogLoader, indexLoader} from './loaders'
import { createAction, deleteAction, editAction} from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='edit/:id' element={<Edit/>} loader={dogLoader} action={editAction}/>
        <Route path='deleteAction/:id' action={deleteAction} />
        <Route path = 'createAction' action={createAction}/>
        <Route path='/:id' element={<Show/>} loader={dogLoader}/>
        <Route path ='' element={<Index/>} loader = {indexLoader}/>
        <Route path = 'create' element={<Create/>}/>
    </Route>
))

export default router;