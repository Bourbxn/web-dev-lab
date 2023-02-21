import FoodBox from "./components/FoodBox";
import foodArr from "./database/FoodList.json";

function App() {
  return (
    <div className="bg-[#747474] p-12">
      <h1 className="text-[#ffd200] text-4xl font-bold text-center">
        โหวตอาหาร
      </h1>
      <div className="flex flex-col justify-center items-center pt-12">
        {foodArr.map((item) => (
          <FoodBox
            key={item.key}
            type={item.type}
            food={item.food}
            detail={item.detail}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
