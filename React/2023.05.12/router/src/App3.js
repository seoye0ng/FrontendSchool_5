import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

// 동적 라우팅
// **`/:id`**는 동적 라우팅을 위해 사용되는 URL 패턴입니다.

// **`useLocation`** 훅은 현재 애플리케이션의 경로(location) 정보를 가져오는 데 사용됩니다. 이 훅을 사용하면 현재 URL의 경로, 쿼리 파라미터, 해시 등을 포함하는 객체를 반환하여 관련된 정보를 파악할 수 있게 됩니다.

// 이 두 가지 정보를 결합하여 같은 컴포넌트를 불러와도 다른 모습으로 변경하는것이 가능합니다. 마치 컴포넌트에 props 를 전달하여 변화를 주는것과 같다고 보시면 됩니다.

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/blog/1"> four_1 </Link>
      <Link to="/blog/2"> four_2 </Link>
      <Link to="/blog/3"> four_3 </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

function Blog() {
  // 파라미터 사용 예1
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split('/')[2];
  console.log(path);
  //   return <h1>hello Blog {path}</h1>;

  // 파라미터 사용 예2
  const { id } = useParams();
  return <h1>hello Blog {id}</h1>;
}

export default App;
