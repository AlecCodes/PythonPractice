import { redirect } from "react-router-dom"
const URL = "https://dogcrud.onrender.com/dogs/"


export async function createAction({request}){
    const formData = await request.formData()
    const newDog = {
        name : formData.get('name'),
        age : formData.get('age'),
        color : formData.get('color'),
        picture : formData.get('picture')
    }
    await fetch(URL, {
        method: 'post',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newDog)
    })
    return redirect('/')
}

export async function deleteAction({params}){
    await fetch(URL + params.id, {
        method: "delete"
    })
    return redirect('/')
}