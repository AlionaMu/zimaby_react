const PostItem = (props: any) => {
    return (
        <div className='post-item' id={props.props.id}>
        <p className='post-item__title'>{props.props.id}  {props.props.title}</p>
        <p className='post-item__body'>{props.props.body}</p>
        <button className="button" onClick={(e) => props.remove(e, props.props.id)}>remove</button>
        </div>
    );
  };
  
  export default PostItem;