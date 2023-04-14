import { useLoaderData, Link } from "react-router-dom"


function Index(props) {
    const data = useLoaderData()
    return (
    <>
        <h1>Index!</h1>
        {data.map((element) => {
            return(
            <div className="card">
                <Link
                to = {`/${element._id}`}
                ><h1>{element.name}</h1></Link>
                <h2>{element.color}</h2>
                <h2>{element.age}</h2>
            </div>
            )
        })}
    </>
    )
}

export default Index
