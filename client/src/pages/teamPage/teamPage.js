import React, { Component } from 'react'
import Add from './comp/add'
import Item from './comp/item'
import Items from './comp/items'
import Pagination from './comp/Pagination'

import './teamPage.css'

export default class TeamPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      posts: [],
      item: null,
      loading: true,
      error: null,
      currentPage: 1,
      perPage: 5
    }
  }
  
  fetchPosts = () => {
    fetch('/api/posts')
    .then(response => response.json())
    .then(json => this.setState({posts: json.items, loading:false}))
    .catch(e => {console.log(e); this.setState({loading: false, error: 'Проблемы с подключением к базе данных' })})
  }

  componentDidMount() {
    this.fetchPosts()
  }

  deletePost = (id) => {
    fetch(`/api/delete/${id}`, {
      method: 'DELETE',
    })
    .then(res => console.log(res)) 
    .then(res => console.log(res))
    .catch(e=>console.log(e.message))
  }

  idPost = async (e) => {
    let item = this.state.posts.filter(p => p._id === e._id)
    await this.setState({item})
  }
  
  backItem = () => {
    this.setState({item: null})
  }

  paginate = pageNumber => this.setState({currentPage: pageNumber})
  active = (number) => console.log(number, this.state.currentPage )
  render() {
    const { currentPage, perPage, posts } = this.state
    const lastPostsIdx = currentPage * perPage
    const firstPostsIdx = lastPostsIdx - perPage
    const currentPosts = posts.slice(firstPostsIdx, lastPostsIdx)
    
    const { loading, error, item } = this.state
        if (item !== null) return <Item item={this.state.item} back={this.backItem} />
        
        if (loading) return <div>Loading...</div>
        
        if (error) return <div style={{margin:'0 auto'}}>Ошибка:{<h1> {error}</h1>}</div>
    return (
      <div className="section">
        <Add />
        <Items 
          remove={this.deletePost} 
          posts={currentPosts} 
          error={this.state.error}
          idPost={this.idPost} 
        />
        <Pagination
          perPage={this.state.perPage}
          totalPosts={this.state.posts.length}
          paginate={this.paginate}
          currentPage={currentPage}
        />
      </div>
    )
  }
}

