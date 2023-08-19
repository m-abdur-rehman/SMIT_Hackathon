let blogs = [
    {
        id: 1,
        title: 'An action will be coming',
        author: "Elon Musk",
        datePublished: "August 16th,2023",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis atque vero! Eaque eum odio cupiditate laudantium, dolores nisi esse. Obcaecati iusto exercitationem maxime at quo dolores, eum minus atque fuga eligendi tempore ratione est excepturi facilis doloribus iste culpa corrupti quae recusandae ducimus? Iure molestiae pariatur necessitatibus! Fugiat, quo?",
    },
    {
        id: 2,
        title: 'Another Blog',
        author: "Bilal Haider",
        datePublished: "August 16th,2023",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis atque vero! Eaque eum odio cupiditate laudantium, dolores nisi esse. Obcaecati iusto exercitationem maxime at quo dolores, eum minus atque fuga eligendi tempore ratione est excepturi facilis doloribus iste culpa corrupti quae recusandae ducimus? Iure molestiae pariatur necessitatibus! Fugiat, quo?",
    },
    {
        id: 3,
        title: 'Blog the Third',
        author: "Abdur Rehman",
        datePublished: "August 16th,2023",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis atque vero! Eaque eum odio cupiditate laudantium, dolores nisi esse. Obcaecati iusto exercitationem maxime at quo dolores, eum minus atque fuga eligendi tempore ratione est excepturi facilis doloribus iste culpa corrupti quae recusandae ducimus? Iure molestiae pariatur necessitatibus! Fugiat, quo?",
    },
    {
        id: 4,
        title: "Not a Blog",
        author: "Hamza Rashid",
        datePublished: "August 16th,2023",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis atque vero! Eaque eum odio cupiditate laudantium, dolores nisi esse. Obcaecati iusto exercitationem maxime at quo dolores, eum minus atque fuga eligendi tempore ratione est excepturi facilis doloribus iste culpa corrupti quae recusandae ducimus? Iure molestiae pariatur necessitatibus! Fugiat, quo?",
    },

]


let users = [
    {
        id: 1,
        name: "Elon Musk",
        email: "emusk32@gmail.com",
        password: 'spacex123',
    },
    {
        id: 2,
        name: "Abdur Rehman",
        email: "abdurrehman07@gmail.com",
        password: 'cr071234',
    },
    {
        id: 3,
        name: "Bilal Haider",
        email: "bhaider12@gmail.com",
        password: 'iambilal@1',
    },
    {
        id: 4,
        name: "Hamza Rashid",
        email: "hamzahe3@gmail.com",
        password: 'hamza12341',
    },
]




//  FOR USers


export const getUser = () => users

export const addUser = ({ name, email, password }) => {
    id += 1
    const user = {
        id: id,
        name: name,
        email: email,
        password: password,
    }
    users.push(user)
    // console.log(users)
}




//  FOR BLOGS

// lastBlog = blogs.slice(-1)
let id = blogs.slice(-1)[0].id
// console.log("nega", id)
export const getBlogs = () => blogs

export const addBlogs = (blog) => {
    id += 1
    blogs.push({
        id: id,
        ...blog
    })
}

export const deleteBlog = (id) => {
    blogs = blogs.filter((blog) => blog.id != id)
}

export const updateBlog = (blog) => {
    const oldBlog = blogs.find((b) => b.id == blog.id)
    if (oldBlog) {
        oldBlog.title = blog.title
        oldBlog.content = blog.content
    } else {
        throw new Error("No Post")
    }
}

export const userBlogs = (blog) => {
    return blogs.filter(b => b.author == blog.author)
}