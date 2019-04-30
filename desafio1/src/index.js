import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import Header from './components/Header'
import Post from './components/Post'

class App extends Component {
  state = {
    title: 'RocketBook',
    Post: [
      {
        id: 1,
        name: 'Antonio Mesquita',
        image:
          'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release of Letrasetsheets containing Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions of LoremIpsum."
      },
      {
        id: 2,
        name: 'Jose Brito',
        image:
          'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release of Letrasetsheets containing Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions of LoremIpsum."
      },
      {
        id: 3,
        name: 'Restier Goncalves',
        image:
          'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release of Letrasetsheets containing Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions of LoremIpsum."
      }
    ]
  }

  renderPost() {
    return this.state.Post.map(post => {
      return (
        <Post
          key={post.id}
          author={post.name}
          text={post.text}
          image={post.image}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} />
        <div>{this.renderPost()}</div>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
