import React, { useEffect, memo } from 'React'
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { posts } from './selectors';
import './Post.scss';

const key = 'post';

export function PostPage({
  onLoadPosts, posts
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // Here i getting error
  useEffect(() => {
    onLoadPosts
  }, []);

  return (
    <article>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <div>
        {/* <button onClick={() => onLoadPosts()}>Load Posts</button> */}
        <section className="explore-the-opportunities">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-md-12">
                <div className="main-heading">
                  <h2>Posts</h2>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              {
                posts.map((item) => (
                  <div className="col-md-4 col-sm-4">
                    <div className="opportunities">
                      {/* <img src={step1} className="img-responsive" alt="" /> */}
                      <h4>{item.title.length > 24 ? `${item.title.slice(0, 20)}...` : item.title}</h4>
                      <p>{item.body.length > 50 ? `${item.body.slice(0, 50)}...` : item.body}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </section>
      </div>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  posts: posts(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPosts: () => {
      dispatch({ type: 'POST_LIST' });
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(PostPage);