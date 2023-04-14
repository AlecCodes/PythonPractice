import { useLoaderData, Form} from "react-router-dom"

function Show(props) {
    const data = useLoaderData();
    return (
    <div>
        <Form action={`../deleteAction/${data._id}`} method='post'> 
            <input type='submit' value='delete'/>
        </Form>
        <h1>{data.name}</h1>
        <h3>{data.age}</h3>
        <h3>{data.color}</h3>
    </div>)
}

export default Show
