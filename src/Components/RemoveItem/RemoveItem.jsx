import '../../css/app.scss';

export const RemoveItem = (props) => {
   let clickHandler = props.data.clickhandler,
      articul = props.data.articul,
      getArticul = props.data.getArticul,
      textError = props.data.texterror,
      styleError = props.data.styleerror;

   return (
      <div className='column'>
         <h3>Удалить</h3>
         <form name='remove' className='wrap' onClick={clickHandler}>
            <label className='label'><span className={styleError}>{textError}</span>
               {/* <span className='label-title'>{textError}</span> */}
               <input type="text" value={articul} required onChange={getArticul} />
            </label>
            <button type="submit" >Удалить</button>
         </form>
      </div>

   )
}