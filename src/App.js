import {Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentsPage, NotFoundPages, PostByIdPage, TodoPages} from "./pages";
import {MainLayout} from "./layout";


const App = () => {

 return (

  <div>
      <Routes>
        <Route path={''} element={<MainLayout/>}>
            <Route path={'todos'} element={<TodoPages/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}>
                <Route path={':postId'} element={<PostByIdPage/>}/>
            </Route>
        </Route>
          <Route path={'*'} element={<NotFoundPages/>}/>
      </Routes>
  </div>
 );
};

export {App};

