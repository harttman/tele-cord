import Island from "./Island.jpg";
import Post from "./Posts";

export default function Profile() {
  return (
    <div>
      <img src={Island} alt="Not Found" />
      <div>
        Мої пости
      </div>
      <div>
        Новий пост
        <br />
        <textarea></textarea>
        <br />
        <button>Додати</button>
        <button>Видалити</button>
        <br />
        <div>
          <div>
            <Post like={20} name="Ілья" content="Я новий користувач" />
          </div>
          <div>
            <Post name="Мигаль" content="Ха-ха, а я Мигдаль" />
          </div>
        </div>
      </div>
    </div>
  );
}