const baseURL = 'https://jsonplaceholder.typicode.com'

const urls = {
    album: '/album',
    todo: '/todo',
    comments: '/comments',
    postById: (id) => `/posts/${id}`
}

export {
    baseURL, urls
}