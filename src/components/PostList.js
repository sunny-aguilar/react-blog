import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // renderList() {
  //   return this.props.posts.map(post => {
  //     return (
  //       <div className="item" key={post.id}>asdf</div>
  //     );
  //   });
  // }

  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
    // return <div>Post List</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
