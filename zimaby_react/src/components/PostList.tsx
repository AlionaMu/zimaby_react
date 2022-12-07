import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import PostItem from "./PostItem";
import { Post } from '../pages/Posts';

const PostList = ( props: any) => {
  return (
    <>
      <TransitionGroup>
        {props.postItems.map((item: Post) => 
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="transition__item"
          >
            <PostItem props={item}  remove={props.remove} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};
  
export default PostList;
