const MenuItem = ({item}) => {
    const {image, price, recipe,name,} = item
    return (
        <div className="flex w-[48%] mb-10 gap-5 ">
            <div className="w-[13%]">
                <img src={image} className="w-full rounded-br-[20px] rounded-lg" alt="" />
            </div>
            <div className="w-[85%]">
                <h2>{name}</h2>
                <p>{recipe}</p>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default MenuItem;