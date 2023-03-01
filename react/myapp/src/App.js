import React, { useState } from 'react'
import PostItem from './components/PostItem'
import './/styles/App.css'

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: "Java", body: "10__10_____121___"},
		{id: 2, title: "IOIOIOIOIOIOI", body: "1-___1010)!))!)!"},
		{id: 3, title: "1-pqpa[a[", body: "Hello"}
	])
	

  return (
    <div className="App">
		<h1 style={{textAlign: 'center'}}>Список постов</h1>
		{posts.map(post => 
			<PostItem post={post} key={post.id}/>
		)}
	</div>
  );
}

export default App;
