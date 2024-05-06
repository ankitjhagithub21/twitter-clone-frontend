export async function getAllTweetFromServer(){
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/tweet/all`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}