const apiKey = 'e3Ox0VJwCcNdJjmBD8q9NIeYU7Xo0y8f'

export default function getGifs ({keyword = 'bad bunny'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => image.images.downsized_medium.url)
                return gifs
            }
        })
}