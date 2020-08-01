import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderLists() {
    return this.props.posts.map(() => {
      return (
        <div className="item" key={postMessage.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{postMessage.title}</h2>
              <p>{postMessage.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps, { fetchPosts }
)(PostList);
