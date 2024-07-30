import "../css/bannerstyle.css";
const Banner = ({ products }) => {
  return (
    <div >
        <h1 style={{textAlign: 'center'}}> Our Menu </h1>

        {products.map((item) => {
            return (
                <div >
                    <h1>{item.name}</h1>
                    <img src={item.imageUrl}alt="" />
                </div>
            )
        })}
    </div>
  )
};

export default Banner;
