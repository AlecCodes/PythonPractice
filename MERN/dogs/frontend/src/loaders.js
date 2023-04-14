const URL = "https://dogcrud.onrender.com/dogs/"

export async function indexLoader(){
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export async function dogLoader({params}){
    const response = await fetch(URL+ params.id)
    const data = await response.json();
    console.log(data)
    return data
}