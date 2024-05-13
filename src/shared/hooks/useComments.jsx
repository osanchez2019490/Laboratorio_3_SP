import {  useState } from "react";
import toast from "react-hot-toast";
import { commentById as getCommentsRequest } from "../../service/api";

export const useComments = () => {
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const commentsData = await getCommentsRequest();

        if (commentsData.error) {
            return toast.error(
                commentsData.e?.response?.data || 'Error occurred when reading comments'
            );
        }
        setComments({ comments: commentsData.data.comments });
    }


    return {
        getComments,
        comments,
        isFetching: !Boolean(comments),
        allComments: comments?.comments
    }
}