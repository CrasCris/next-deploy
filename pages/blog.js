import Layout from "../components/Layout";
import {posts} from '../profile'

const PostCard = ({post}) => (
   <div className="col-md-4">
        <div className="card ">
            <div className="overflow">
                <img src="{post.imageURL}" className="card-top"/>

            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>

            </div>
        </div>
   </div> 
)

const Blog = () => (

    <Layout footer={false} title="Un matematico entendiendo el valor del mundo" dark>
        <div className="row">
            {
                posts.map((post,i) => (
                    <PostCard post={post} key={i}/>
                ))
            }
        </div>
        
    </Layout>
)

export default Blog;
