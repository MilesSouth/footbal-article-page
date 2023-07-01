import ArticleCard from "./ArticleCard"
const CardSection = () => {
  return (
    <div className=" container d-flex justify-content-between">
      <ArticleCard
        img="https://media-cdn.t24.com.tr/media/library/2023/06/1688029220475-15221525215.jpg"
        title="İsmail Kartal"
        description="İsmail Kartal’ın 3. defa Fenerbahçe’ye gelmesi üzerine bu konuyu yönetim ve hoca bakımından değerlendirmem gerektiğini düşündüm. Bu yazımın konusu Fenerbahçe’nin sezon planlaması, hoca tercihi ve yönetimin durmadan yaptığı hataları değerlendirmek üzere olacak."
        link="https://aferit.medium.com/i%CC%87smai%CC%87l-kartal-30710e6dcf3"
      ></ArticleCard>
      <ArticleCard
        img="https://e0.pxfuel.com/wallpapers/386/997/desktop-wallpaper-arda-guler-soccer-ardaguler-turkish-guler-fenerbahce-football.jpg"
        title="Arda Güler"
        description="Arda meselesinde sanırım çoğu taraftardan ayrılmış durumdayım fikir olarak. Öncelikle 17.5 milyon euro’luk serbest kalma maddesinin başarısız olduğuna katılmıyorum. Maalesef -iyi ki- genç futbolcuların gözü açıldı ve Avrupa’da kariyerlerine devam etmek istiyorlar."
        link="https://aferit.medium.com/arda-g%C3%BCler-ve-fenerbah%C3%A7e-2d2a20589421"
      ></ArticleCard>
      <ArticleCard
        img="https://www.trtspor.com.tr/resimler/508000/509886.jpg"
        title="Dzeko Transferi"
        description="Ali koç başarısız geçen bir sezonun daha ardından transfere hızlı başladı. Hatta öyle hızlı başladı ki hoca almadan önce oyuncu almaya geçti. Sanıyorum hoca Abdullah Avcı olacak ama geldiği günden bu yana kulübü Twitter’dan yönetmeye çalışan Ali Koç -ki kendisinin hesabı dahi yok- sanıyorum ki Twitter tepkilerinden çekindiği için..."
        link="https://aferit.medium.com/dzeko-transferi%CC%87-63f2b0708f01"
      ></ArticleCard>
    </div>
  )
}

export default CardSection
