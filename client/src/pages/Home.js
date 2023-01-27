import { useState, useEffect } from "react";
import { getArticles, postArticles, deleteArticle } from '../Redux/articlesSlice';
import { useDispatch, useSelector } from 'react-redux'
import ArticleTable from '../articlesComponents/articleTable';
import ArticleTable2 from '../articlesComponents/artickesTable2';
import ModalAddArticle from "../articlesComponents/modalAddArticle";
import PageBtn from "../articlesComponents/pageButtons";
import NavBar from "../articlesComponents/navBar";
import Swal from 'sweetalert2'
function Home() {
  const Dispatch = useDispatch()
  const arts = useSelector(state => state?.Articles?.articles)
  const [articles, setArticles] = useState(['']);
  const [article, setArticle] = useState({});//console.log(article)
  const [show, setShow] = useState(false)
  const [page, setpage] = useState(1);

  useEffect(() => {
    Dispatch(getArticles()).then(res => setArticles(res.payload))

  }, []);
  //console.log(articles)
  const Reasearched = (e) => { setArticles(arts?.filter(c => c.AR_Ref.toLowerCase().includes(e.toLowerCase()))) };
  const handleClose = () => { setShow(false); setArticle({}) }; const handleShow = () => { setShow(true); Dispatch() };
  const handleSubmit = () => { Dispatch(postArticles(article)).then(res => { res.payload.rowsAffected[0] == 1 ? Swal.fire({ text: "article was  updated", icon: "success", showConfirmButton: false, timer: 3000, showCloseButton: false },window.location.reload()) : Dispatch() }) }
  ;const handleChange = (e) => { setArticle({ ...article, [e.target.name]: e.target.value }) }
  const handleDelete = (e) => { Dispatch(deleteArticle({ id: e.target.id, Data: 0 })).then(res => { res.payload.rowsAffected[0] == 1 ? Swal.fire({ text: "article was successfully deleted", icon: "success", showConfirmButton: false, timer: 4000, showCloseButton: false },window.location.reload()) : Dispatch() }) }
  const handlePage=(e)=>{setpage(e.target.name)}
  const arr = Array.from({ length: Math.ceil(arts?.length) /6 }, (_, index) => index +1);
  console.log(page)
  console.log(arr);

  return (
    <div >
      <NavBar
        navBar=
        {<ModalAddArticle handleChange={handleChange} handleSubmit={handleSubmit} handleClose={handleClose} handleShow={handleShow} show={show} />
        }
        Research={Reasearched}
      />
      <div class="container">
        <h1 className="Title">Articles</h1>
        <span className="pagesTitle">Pages : </span>
        {arr.map((e,i) => e!=arr[arr.length-1]? <PageBtn number={e} handlePage={handlePage} />:null)}
        <table class="table table-bordered">
          <ArticleTable2 />
          <tbody className="ArticleTable">
            {articles?.
filter(e => e.deleted !== 0).map((e, i) =>i <= (7*(page-1))+6 && i >= (7*(page-1)) ?<ArticleTable key={i} handleDelete={handleDelete} AR_Ref={e?.AR_Ref} AR_Design={e?.AR_Design} FA_CodeFamille={e?.FA_CodeFamille} AR_Garantie={e?.AR_Garantie} AR_UnitePoids={e?.AR_UnitePoids} AR_PoidsNet={e?.AR_PoidsNet} AR_PoidsBrut={e?.AR_PoidsBrut} AR_UniteVen={e?.AR_UniteVen} AR_PrixAch={e?.AR_PrixAch} AR_Coef={e?.AR_Coef} AR_PrixVen={e?.AR_PrixVen} AR_SuiviStock={e?.AR_SuiviStock} AR_Gamme1={e?.AR_Gamme1} AR_Gamme2={e?.AR_Gamme2} AR_DateCreation={e?.AR_DateCreation} />:null)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Home;
