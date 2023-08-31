export const getSwapiPeople = async (url: string) => {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error("Could not fetch. ", res.status);
            return false;
        }

        return await res.json()
    } catch (error) {
        console.error("Could not fetch. ", (error as Error).message );
        return false;
    }
}
