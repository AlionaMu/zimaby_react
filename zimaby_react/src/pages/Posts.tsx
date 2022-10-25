import { useState } from "react";
import PostService from "../API/PostService";
import Button from "../components/Button";
import Loader from "../components/Loader";
import PostList from "../components/PostList";
import { useFetching } from "../hooks/useFetching";

export interface Post {
  id: number;
  title: string;
  body: string
}

const Posts = () => {
  const arr: Post[] = [];
  // const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(arr);
  const [totalCount, setTotalCount] = useState(0);

  
  const [fetching, loading, error] = useFetching(async() => {
      const response = await PostService.getAll();
      console.log(response);
      setPosts(response);
      setTotalCount(response.headers['x-total-count']);
      console.log('NNNN', totalCount);
  })

  const removePostItem = (event: Event, id: number) => {
    event.preventDefault();
    setPosts(posts.filter(item => item.id !== id));
  }
    
  return (
      <main>
        <Button text={'fetch posts'} func={fetching} className={'header__button'}></Button>
        { loading ?
          <Loader></Loader> :
          fetching ? 
            <PostList postItems={posts} remove={removePostItem}></PostList> :
            <div>NO</div>
         }
      </main>
  );
};

export default Posts;