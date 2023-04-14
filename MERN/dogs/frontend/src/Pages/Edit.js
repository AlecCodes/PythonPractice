import {Link, Form, useLoaderData} from 'react-router-dom'

function Edit(props){
    const data = useLoaderData()
    return(
        <div>
            <Form method='post' action={`../edit/${data._id}`}>
                <input placeholder='name' name='name' type='text'
                defaultValue={data.name}
                ></input>
                <input placeholder='age' name='age' type='number'
                defaultValue={data.age}
                ></input>
                <input placeholder='pic' name='picture' type='text'
                defaultValue={data.picture}
                ></input>
                <input placeholder='color' name='color' type='text'
                defaultValue={data.color}
                ></input>
                <input type='submit'/>
            </Form>
        </div>
    )
}
export default Edit