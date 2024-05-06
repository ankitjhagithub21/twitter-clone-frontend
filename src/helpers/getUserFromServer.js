export async function getUserFromServer(){
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/user`,{
        credentials:'include'
    })
    const data = await res.json()

    return data
}