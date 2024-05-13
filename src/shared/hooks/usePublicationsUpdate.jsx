import { useState } from "react";
import toast from "react-hot-toast";
import { publicationPut, publicationGet } from "../../service/api";


export const usePublicationUpdate = () => {

    const [publications, setPublications] = useState();

    const fetchPublications = async () => {
        const response = await publicationGet();

        if (response.error) {
            return toast.error(
                response.e?.response?.data ||
                'Error occurred when fetching publications'
            );
        }

        setPublications({
            author: response.data.author,
            title: response.data.title,
            urlImage: response.data.urlImage,
            text: response.data.text,
            urlProyect: response.data.urlProyect,

        });

    };

    const updatePublication = async (id, data) => {
        const response = await publicationPut(id, data);

        if (response.error) {
            return toast.error(
                response.e?.response?.data ||
                'Error occurred when updating publication'
            );
        }

        toast.success('Publication updated successfully');
    };

    useEffect(() => {
        fetchPublications();
    }, []);

    return {
        isFetching: !publications,
        publications,
        updatePublication
    };
}   