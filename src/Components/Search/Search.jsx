import '../../css/app.scss';

export const Search = (props) => {
   let clickHandler = props.data.clickhandler,
      articul = props.data.articul,
      getArticul = props.data.getArticul,
      textSearch = props.data.textsearch,
      styleSearch = props.data.stylesearch,
      closeSerch = props.data.closeserch,
      styleError = props.data.styleerror,
      resultSearch = Object.entries(props.data.resultsearch);

   return (
      <div className='column'>
         <h3>Найти</h3>
         <form name='search' className='wrap' onClick={clickHandler}>
            <label className='label'><span className={styleError}>{textSearch}</span>
               <input type="search" value={articul} onChange={getArticul} />
            </label>
            <div className={styleSearch}>
               <button className='close-btn' onClick={closeSerch}>X</button>
               {resultSearch.map(item =>
                  <p key={item[0]} className='label-title'>
                     <span><i>{item[0]}: </i></span>  <span> {item[1]}</span>
                  </p>)}
            </div>
            <button type="submit" >Найти</button>
         </form>
      </div>
   )
}