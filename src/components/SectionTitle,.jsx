
const SectionTitle = ({headding, subheading}) => {
    return (
        <div className="text-center  w-96 mx-auto border-b border-t mt-5 pt-4  border-blue-500 pb-4 mb-9">
                <h2 className="text-xl font-bold text-orange-500">{headding}</h2>
                <h3 className="text-2xl font-medium text-orange-500">{subheading}</h3>
        </div>
    );
};

export default SectionTitle;