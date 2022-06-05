/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  return (
    <label className="panel-block">
      <input type="checkbox" /> 
      {item.next}
    </label>
  );
}

export default TodoItem;