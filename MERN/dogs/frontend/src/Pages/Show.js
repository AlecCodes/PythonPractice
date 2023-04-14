import { useLoaderData } from "react-router-dom"

function Show(props) {
    const data = useLoaderData();
    return (
    <div>
        <h1>{data.name}</h1>
        <h3>{data.age}</h3>
        <h3>{data.color}</h3>
    </div>)
}

export default Show
