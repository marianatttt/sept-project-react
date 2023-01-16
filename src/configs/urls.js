const baseURL = 'https://jsonplaceholder.typicode.com'

const urls = {
    albums: '/albums',
    todos: '/todos',
    comments: '/comments',
    postById: (id) => `/posts/${id}`
}

export {
    baseURL, urls
}