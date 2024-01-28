import { useParams } from "react-router-dom";

export const Slug = () => {

    const {id} = useParams();

    return(
        <>
        <h1>Slug</h1>
        <p>id: {id}</p>
        </>
    )
}