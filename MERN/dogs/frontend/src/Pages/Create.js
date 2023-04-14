import {Form} from 'react-router-dom'

function Create(props) {
    return (
    <div>
        <Form action='../createAction' method='post'>
            <input placeholder='name' name='name' type='text'></input>
            <input placeholder='age' name='age' type='number'></input>
            <input placeholder='pic' name='picture' type='text'></input>
            <input placeholder='color' name='color' type='text'></input>
            <input type='submit'/>
        </Form>
    </div>
    )
}

export default Create
