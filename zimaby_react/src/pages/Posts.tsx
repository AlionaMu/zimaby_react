import { useEffect, useMemo, useState } from "react";
import PostService from "../API/PostService";
import Button from "../components/Button";
import Loader from "../components/Loader";
import PostList from "../components/PostList";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArr } from "../utils/pagination";


export interface Post {
  id: number;
  title: string;
  body: string
}

const Posts = () => {
  const arr: Post[] = [];
  const [posts, setPosts] = useState(arr);
  const [limit, setLimit] = useState(10);

  const [totalPages, setTotalPages] =useState(0);
  const [page, setPage] =useState(1);

  const pagesArray = useMemo(() => getPagesArr(totalPages), [totalPages]);
  // const pagesArray = getPagesArr(totalPages);
  
  const [fetching, loading, error] = useFetching(async() => {
      const response = await PostService.getAll(limit, page);
      if (response) {
        setPosts(response.data);
        const headersCount: string | undefined = response.headers['x-total-count'];
  
        if (headersCount) {
          setTotalPages(getPageCount(+headersCount, limit));
        } 
      } else {
        console.log(error)
      }
  })

  const removePostItem = (event: Event, id: number) => {
    event.preventDefault();
    setPosts(posts.filter(item => item.id !== id));
  }

 

  const changePage = (page: number) => {
    setPage(page);

  }
    
  return (
      <main>
        <Button text={'fetch posts'} func={fetching} className={'header__button'}></Button>
        <div className="pagination__container">
          { pagesArray.map((item: number) => 
            <Button 
              text={item} 
              key={item} 
              className={ page === item ? 
                          'pagination__button pagination__button_current' :
                          'pagination__button'} 
              func={() => setPage(item)}>
            </Button>
          )}
        </div>
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