
import BlogList from "./bloglist";
import useFetch from "./useFEtch";

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <div>Loading ....</div>}
            {data && <BlogList blogs={data} title={"All blogs"} />}

        </div>
    );
}

export default Home;