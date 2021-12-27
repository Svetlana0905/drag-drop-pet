import '../../css/app.scss';

export const AddItem = (props) => {
   let getArticul = props.data.getarticul,
      articul = props.data.itarticul,
      getName = props.data.getname,
      name = props.data.name,
      getColor = props.data.getcolor,
      color = props.data.color,
      getRoom = props.data.getroom,
      room = props.data.room,
      clickHandler = props.data.clickhandler;

   return (
      <div className='container'>
         <form className='column' name='addItem' onSubmit={clickHandler}>
            <h3>Добавить</h3>
            <div className='inner'>
               <label className='label'><span className='label-title'>Артикул</span>
                  <input type="text" value={articul} required onChange={getArticul} />
               </label>
               <label className='label' ><span className='label-title'>Название</span>
                  <input type="text" value={name} required onChange={getName} />
               </label>
               <label className='label' ><span className='label-title'>Цвет</span>
                  <input type="text" value={color} required onChange={getColor} />
               </label>
               <label className='label' ><span className='label-title'>Кабинет</span>
                  <input type="text" value={room} required onChange={getRoom} />
               </label>
            </div>
            <button type="submit" >Добавить </button>
         </form>
      </div>
   )
}