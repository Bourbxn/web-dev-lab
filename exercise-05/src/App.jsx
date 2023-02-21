import FoodBox from "./components/FoodBox";

function App() {
  let foodArr = [
    {
      key: 1,
      type: "อาหารคาว",
      food: "ข้าวผัด",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc:
        "https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/resive_04062021_430x320px-2_0.png?itok=IVRT5J1c",
    },
    {
      key: 2,
      type: "อาหารหวาน",
      food: "บัวลอย",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc: "http://lamphuonline.com/images/00-2022/bua-loi-kaiwan.jpg",
    },
    {
      key: 3,
      type: "อาหารคาว",
      food: "แกงส้ม",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc: "https://img.salehere.co.th/p/1200x0/2021/07/20/qcabnnxsseqr.jpg",
    },
    {
      key: 4,
      type: "อาหารคาว",
      food: "ลาบเนื้อดิบ เมืองแพร่",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc:
        "http://4.bp.blogspot.com/-UGAplc1NJyc/TwmL87o9aSI/AAAAAAAALVk/_OQQZyN9-Ak/s1600/Laab-Neua-16.jpg",
    },
    {
      key: 5,
      type: "อาหารคาว",
      food: "แกงอ่อม เมืองแพร่",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorequibusdam consequatur excepturi sit maiores aspernatur quos explicabo temporibus hic asperiores doloremque rerum ipsam molestias dignissimos accusamus fugiat voluptas, ab voluptatum?",
      imgSrc: "https://i.ytimg.com/vi/0hAAaTFaxFM/maxresdefault.jpg",
    },
  ];
  return (
    <div className="bg-zinc-500 p-12">
      <h1 className="text-amber-300 text-4xl font-bold text-center">
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
