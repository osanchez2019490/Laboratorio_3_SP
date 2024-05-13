import { useState } from "react";
import toast from "react-hot-toast";
import { commentPut } from "../../service/api";

export const useCommentUpdate = (initialComments) => {
    const [comments, setComments] = useState(initialComments);
    const [isUpdating, setIsUpdating] = useState(false);

    const updateComment = async (id, data) => {
        setIsUpdating(true);
        const response = await commentPut(id, data);
        setIsUpdating(false);

        if (response.error) {
            return toast.error(
                response.e?.response?.data ||
                'Error occurred when updating comment'
            );
        }

        const updatedComments = comments.map(comment => {
            if (comment._id === id) {
                return {
                    ...comment,
                    ...data
                };
            }
            return comment;
        });
        setComments(updatedComments);

        toast.success('Comment updated successfully');
    };

    return {
        isUpdating,
        comments,
        updateComment
    };
};