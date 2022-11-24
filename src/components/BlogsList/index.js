import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {
    blogsData: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    console.log(updatedData)
    this.setState({blogsData: updatedData})
  }

  render() {
    const {blogsData} = this.state

    return (
      <div className="blog-list-container">
        {blogsData.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default BlogsList
